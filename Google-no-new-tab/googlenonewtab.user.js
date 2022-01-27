// ==UserScript==
// @name        Google don't open account in new tab
// @namespace   Google don't open account in new tab by C4illin
// @description Replace target="_blank" links in account selector
// @match       https://*.google.com/*
// @grant       none
// @version     1.1
// @author      C4illin <extension@emrik.org>
// ==/UserScript==

setInterval(() => {
  let alist = document.querySelectorAll("a[target=_blank]")
  for (let i = 0; i < alist.length; i++) {
    alist[i].target = ""
  }
}, 200)