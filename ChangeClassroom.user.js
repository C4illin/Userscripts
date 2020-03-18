// ==UserScript==
// @name        Change Google Classroom User
// @namespace   Change Google Classroom User by C4illin
// @description Swithces between /u/0 & /u/1 on google classroom automatically.
// @match       *://classroom.google.com/*
// @run-at      document-idle
// @grant       none
// @author      C4illin <C@illin.cf>
// @oujs:author C4illin
// @version     1.1.4
// @downloadURL https://github.com/C4illin/Change-Google-Classroom-User/raw/master/ChangeClassroom.user.js
// @updateURL   https://github.com/C4illin/Change-Google-Classroom-User/raw/master/ChangeClassroom.user.js
// @homepageURL https://github.com/C4illin/Change-Google-Classroom-User
// @license     MIT; https://opensource.org/licenses/MIT
// @copyright   2018-2019, C4illin (https://github.com/C4illin)
// ==/UserScript==

function checkuser(){
  if ((document.getElementsByClassName("tCD5Mc").length != 0) || (document.getElementsByClassName("FKF6mc").length != 0)) {
    if (window.location.pathname.substring(3,4) == 0) {
      var user = 1
    } else {
      user = 0
    }
    var newlink = "https://classroom.google.com/u/"+ user + window.location.pathname.substring(4) + window.location.search + window.location.hash
    window.location.replace(newlink)
  }
}

checkuser()
setTimeout(function(){
  checkuser()
}, 3000)