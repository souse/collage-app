import wxConfigURI from '../api/wxConfig';
import axios from 'axios';

/** 注入配置信息 */
export const wxConfig = () => {
    const params = {
        resetURI: true,
        data: { url: encodeURIComponent(location.href) },
    };
    
    axios.get(wxConfigURI, params).then(res => {
        var configs = res.data.js_config;
        wx.config({
            debug: false,
            appId: configs.appid,
            nonceStr: configs.nonceStr,
            timestamp: configs.timestamp,
            signature: configs.signature,
            jsApiList: [
                'hideMenuItems',
                'previewImage',
                'checkJsApi',
                'chooseWXPay',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'getLocation',
                'openLocation',
                'translateVoice',
            ],
        });
    });
};

/**
 * wxShare 分享
 * @param option
 */
export const wxShare = (option = {}, successCB = () => {}) => {
    wx.ready(() => {
        // 分享给朋友
        wx.onMenuShareAppMessage({
            title: option.title,
            desc: option.desc,
            link: option.link,
            imgUrl: option.imgUrl,
            success: function(res) {
                // 用户确认分享后执行的回调函数
                successCB(res);
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            },
        });

        // 分享到朋友圈
        wx.onMenuShareTimeline({
            title: option.friendtitle || option.title, // 标题
            desc: option.desc,
            link: option.link, // 链接
            imgUrl: option.imgUrl, // 分享图标
            success: function(res) {
                successCB(res);
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            },
        });
    });
};

export const wxDisabledShare = () => {
    wx.ready(() => {
        wx.hideMenuItems({
            menuList: [
                'menuItem:share:appMessage',
                'menuItem:share:timeline',
                'menuItem:share:qq',
                'menuItem:share:weiboApp',
                'menuItem:share:QZone',
            ],
        });
    });
};

/**
 *
 * @param source
 * @param option
 */
export const wechatShare = async (option = {}, successCB = () => {}) => {
    const shareOption = {
        link: location.href,
        title: `邀请您一起上课啦！`,
        friendtitle: `邀请您一起上课啦！`,
        desc: '秦汉胡同国学，让我们的孩子成为一个有涵养的人',
        imgUrl: 'http://qiniu.shbaoyuantech.com/yueke_share.jpeg',

        ...option,
    };
    wxConfig();
    wxShare(shareOption, successCB);
};