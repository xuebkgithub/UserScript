// ==UserScript==
// @name         nextchat-themes
// @namespace    https://github.com/dlzmoe/nextchat-themes
// @version      0.0.1
// @author       dlzmoe
// @description  NextChat 插件，修改 UI 主题！
// @license      Apache-2.0
// @icon         https://framerusercontent.com/images/tCHbBovHGLAJDNKRG1lKfavenFs.png
// @match        *://app.nextchat.dev/*
// @require      https://unpkg.com/vue@3.4.38/dist/vue.global.prod.js
// @grant        GM_addStyle
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const i=document.createElement("style");i.textContent=t,document.head.append(i)})(" :root{--primary: #333 !important}.home_container__4PEJZ{width:98vw!important;height:98vh!important;max-width:100%!important}.home_sidebar__fPZfq{background:#f9f9f9!important;box-shadow:none!important}.chat_chat-input__PQ_oF{min-height:130px!important}.settings_settings__427bK{max-width:1000px!important}.chat_chat-input-actions__mwYC_ .chat_chat-input-action__DMW7Y{width:auto!important}.chat_chat-input-actions__mwYC_ .chat_chat-input-action__DMW7Y .chat_text__TkPfN{opacity:1!important;transform:none!important}.chat_chat-message-avatar__3QeMq .chat_chat-message-edit__h58of button{display:none!important}.chat_chat-message-user__ZtTEj>.chat_chat-message-container__O_X8_>.chat_chat-message-item__dKqMl{background-color:#fff!important}.chat_chat-message-action-date__RsXTn{display:none!important}.ui-lib_list-item__YH0DO .ui-lib_list-header__RwThu .ui-lib_list-item-title__Fsa9c{font-size:16px}.ui-lib_list-item__YH0DO .ui-lib_list-header__RwThu .ui-lib_list-item-sub-title__jSgHb{font-size:14px;padding-top:6px}.input-range_input-range__SuxRd,.ui-lib_select-with-icon__L6FLF .ui-lib_select-with-icon-select__JhHwp{font-size:14px}.home_sidebar-tail__T2_u7{flex-direction:column-reverse;width:100%}.home_sidebar-actions__LcDT9:nth-child(2){width:100%!important;margin-bottom:10px}.home_sidebar-actions__LcDT9:nth-child(2) .button_shadow__G4m_0{width:100%!important;height:45px!important;background:#333!important;color:#fff!important}.home_sidebar-actions__LcDT9:nth-child(2) .button_shadow__G4m_0 *{font-size:16px!important}.home_sidebar-actions__LcDT9:nth-child(2) .button_shadow__G4m_0 .button_icon-button-icon__AMZta{transform:scale(1.2)}.home_sidebar-actions__LcDT9:nth-child(2) .button_shadow__G4m_0 svg{fill:#fff!important}.home_chat-item-info__9r6z_{display:none!important}.home_chat-item__Oblai{margin-bottom:5px!important}.home_chat-item-delete__3qV5m{top:13px!important;right:10px!important}.home_chat-item-title__sRstw{font-weight:500!important} ");

(function (vue) {
  'use strict';

  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = {
    methods: {},
    created() {
      console.log(
        `%c NextChat 增强插件 %c 已开启 `,
        "padding: 2px 1px; color: #fff; background: #606060;",
        "padding: 2px 1px; color: #fff; background: #42c02e;"
      );
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return null;
  }
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const app = vue.createApp(App);
  app.mount(
    (() => {
      const appDiv = document.createElement("div");
      document.body.append(appDiv);
      return appDiv;
    })()
  );

})(Vue);