const NODE_ENV = process.env.NODE_ENV;
let wxConfig = '';

if (NODE_ENV == 'development') {
    wxConfig = 'http://tencent.test.shbaoyuantech.com/wechat-js-config/testmp';
} else {
    wxConfig = 'http://tencent.test.shbaoyuantech.com/wechat-js-config/newguowen'
}

export default wxConfig;
