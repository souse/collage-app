import { Toast } from 'vant';
import baseURI from '../api/index';
import { getItem, removeItem, hostNames, getParameterByName } from './index';

const request = {
  options:{
    noToken: false,
    method: 'GET',
    data: null,
    formData: false,
  },

  ajax: function(url, options = {}) {
    const _this = this;
    if (!url) return;

    options = { ...this.options, ...options };
    const base = new Base64();
    let params = {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      method: options.method,  
    };
    let token = null;

    if (!options.noToken) {
      if (hostNames.includes(window.location.hostname)) {
        token = 'Bearer ' + base.encode('gytest-act-456');  
      } else {
        if (!_this.checkToken()) {
          _this.callback({ status: 401 });
          return;  
        }
        const tokenKey = sessionStorage.getItem('COOKIE_TOKEN_KEY');

        token = 'Bearer ' + base.encode(tokenKey || 'need token');  
      }
      // add token
      params.headers[ 'Authorization' ] = token;
    }

    const { data, method } = options;

    if(method.toUpperCase() === 'GET') {
      url = url + (data ? ('?' + _this.formDataCode(data)) : '');  
    } else {
      if (options.formData) {
        params.headers[ 'Content-Type' ] = 'application/x-www-form-urlencoded';
        params.body = _this.formDataCode(data);
      } else {
        params.body = JSON.stringify(data);
      }
    }

    return fetch(`${baseURI + url}`, params).then(_this.callback).catch(_this.errHandle);
  },

  checkToken: function() {
    let token = sessionStorage.getItem('COOKIE_TOKEN_KEY');

    if (token == null) {
      token = getParameterByName('token');

      if (token == null) {
        return false;
      } else {
        sessionStorage.setItem('COOKIE_TOKEN_KEY', token);
        return true;
      } 
    }
    return true;
  },

  callback: function(res) {
    const _this = this;

    if (res.status == 401) {
      const params = {
        noToken: true,
        method: 'POST',
        formData: true,
        data: { originUrl: encodeURIComponent(window.location.href) },
      };

      removeItem('COOKIE_TOKEN_KEY');
      _this.ajax('/get-wechat-auth-link', params).then(res => {
        if (res.code == 0) {
          window.location.href = res.data.wechatAuthUrl;
        }
      });
      throw new Error('come to get auth-link ...');
    }

    return res.json().then(response => {
      if (response.code != 0) {
        // Toast.info(response.message || '请求失败', 1.5, null, false)
        return Promise.reject(response)
      }
      return response;
    });
  },

  errHandle: function(res) {
    const message = res.code && res.code === '1' ? '请求失败' : '服务器未知异常';  
    
    Toast(res.message || message);
  },

  formDataCode: function(data) {
    let str = '';

    for (let i in data) {
      if (data.hasOwnProperty(i)) {
        str = str + i + "=" + data[ i ] + '&'
      }
    }
    return (str ? str.slice(0, -1) : '');
  },
}

export default request;

function Base64() {
  var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function(input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = _utf8_encode(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }
    return output;
  }
  this.decode = function(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = _utf8_decode(output);
    return output;
  }

  function _utf8_encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }
    return utftext;
  }

  function _utf8_decode(utftext) {
    var string = "";
    var c2, c1;
    var i = 0;
    var c = c1 = c2 = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  }
}







