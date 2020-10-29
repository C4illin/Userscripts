// ==UserScript==
// @name        Youtube Allow Fullscreen
// @namespace   Youtube Allow Fullscreen by C4illin
// @description View embedded youtube videos in fullscreen on every website
// @match       https://*/*
// @match       http://*/*
// @run-at      document-start
// @grant       none
// @author      C4illin
// @oujs:author C4illin
// @version     1.1.0
// @license     MIT; https://opensource.org/licenses/MIT
// @copyright   2020, C4illin (https://github.com/C4illin)
// ==/UserScript==

// featurePolicy can still break it and I can't do anything about it :(
// for some reason it seems to circumvent featurePolicy if you are fast enough :)
setInterval(() => {
  if (!window.location.href.startsWith("https://www.youtube.com/")) {
    let iframes = document.querySelectorAll('iframe[src^="https://www.youtube.com/embed/"]')
    iframes.forEach((elem) => {
      elem.setAttribute('allowFullScreen', '')
    })
  } else if (window.location.href.startsWith("https://www.youtube.com/embed")) {
    let fullscreenButton = document.getElementsByClassName("ytp-fullscreen-button")[0]
    if (fullscreenButton.getAttribute("aria-disabled")) {
      fullscreenButton.style.display = ""
      fullscreenButton.setAttribute("aria-disabled", false)
      fullscreenButton.setAttribute("aria-haspopup", false)
      fullscreenButton.onclick = () => {
        var e = document.getElementById("player")
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
          if (e.requestFullscreen) {
            e.requestFullscreen()
          } else if (e.msRequestFullscreen) {
            e.msRequestFullscreen()
          } else if (e.mozRequestFullScreen) {
            e.mozRequestFullScreen()
          } else if (e.webkitRequestFullscreen) {
            e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen()
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
          }
        }
        document.getElementsByClassName("ytp-generic-popup")[0].display = "none"
      }
    }
  }
}, 350)