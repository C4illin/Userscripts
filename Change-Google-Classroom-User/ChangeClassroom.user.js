// ==UserScript==
// @name        Change Google Classroom User
// @namespace   Change Google Classroom User by C4illin
// @description Switches between /u/0 & /u/1 on google classroom automatically.
// @match       https://classroom.google.com/*
// @run-at      document-idle
// @grant       none
// @author      C4illin <C@illin.cf>
// @oujs:author C4illin
// @version     1.2.1
// @downloadURL https://github.com/C4illin/Userscripts/raw/master/Change-Google-Classroom-User/ChangeClassroom.user.js
// @updateURL   https://github.com/C4illin/Userscripts/raw/master/Change-Google-Classroom-User/ChangeClassroom.user.js
// @homepageURL https://github.com/C4illin/Userscripts/tree/master/Change-Google-Classroom-User
// @license     MIT; https://opensource.org/licenses/MIT
// @copyright   2018-2020, C4illin (https://github.com/C4illin)
// ==/UserScript==

(function() {
  let refresh = setInterval(() => {
    if ((document.getElementsByClassName("Lqr2e").length != 0) && (window.location.pathname.length < 7)) {
      switchUser()
    }
    if ((document.getElementsByClassName("tCD5Mc").length != 0) && (window.location.pathname.length > 7)) {
      switchUser()
    }
  }, 250)
  
  function switchUser() {
    clearInterval(refresh)
    let user
    if (window.location.pathname.substring(3,4) == 0) {
      user = 1
    } else {
      user = 0
    }
    let newlink = "https://classroom.google.com/u/"+ user + window.location.pathname.substring(4) + window.location.search + window.location.hash
    window.location.replace(newlink)
  }
})()