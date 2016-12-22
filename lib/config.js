var _ = require('lodash');

var wechatConfig = {
  "wechatRedirectHost": "http://127.0.0.1", //redirect host in oauth redirect
  "wechatRedirectUrl": "", //full redirect url in oauth redirect, e.g http://127.0.0.1/wechat/oauth-callback
  "wechatToken": "", //your wechat token set in your https://mp.weixin.qq.com/advanced/advanced?action=dev&t=advanced/dev&token=1244756112&lang=zh_CN
  "appId": "", //your wechat appId
  "appSecret": "", // your wechat appSecret
  "ticketUrl": "https://api.weixin.qq.com/cgi-bin/ticket/getticket",
  "accessTokenUrl": "https://api.weixin.qq.com/cgi-bin/token",
  "oAuthUrl": "https://open.weixin.qq.com/connect/oauth2/authorize",
  "apiUrl": "https://api.weixin.qq.com",
  "oAuthState": "" //state in oauth callback query
};

/**
 * set Wechat configuration
 * @param info
 */
exports.setConfiguration = function(info) {
  if(_.isEmpty(info)) {
    throw new Error('you need to pass the wechat configuration');
  }
  if(!info.wechatToken) {
    throw new Error('wechat token not found');
  }
  if(!info.appId) {
    throw new Error('wechat appId not found');
  }
  if(!info.appSecret) {
    throw new Error('wechat appSecret not found');
  }
  _.assign(wechatConfig, info);
  require('./oauth').setDefaultOauthUrl();
};

/**
 * get wechat configuration
 * @returns {{wechatRedirectHost: string, wechatToken: string, appId: string, appSecret: string, ticketUrl: string, accessTokenUrl: string, oAuthUrl: string, apiUrl: string}}
 */
exports.getConfiguration = function() {
  return wechatConfig;
};