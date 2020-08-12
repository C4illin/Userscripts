// ==UserScript==
// @name        Youtube Allow Fullscreen
// @namespace   Youtube Allow Fullscreen by C4illin
// @description Allows fullscreen always
// @match       https://*/*
// @match       http://*/*
// @run-at      document-start
// @grant       none
// @author      C4illin <C@illin.cf>
// @oujs:author C4illin
// @version     1.0.0
// @license     MIT; https://opensource.org/licenses/MIT
// @copyright   2020, C4illin (https://github.com/C4illin)
// ==/UserScript==

setInterval(() => {
  if (!window.location.href.startsWith("https://www.youtube.com/embed/")) {
    let iframes = document.querySelectorAll('iframe[src^="https://www.youtube.com/embed/"]')
    iframes.forEach((elem) => {
      elem.setAttribute('allowFullScreen', '')
    })
  }
}, 250)