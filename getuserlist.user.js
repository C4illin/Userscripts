// ==UserScript==
// @name        Get classlist
// @namespace   Get classlist by E, D, E
// @match       https://meet.google.com/*
// @grant       none
// @version     1.0.1
// @downloadURL https://github.com/C4illin/Userscripts/raw/master/getuserlist.user.js
// @updateURL   https://github.com/C4illin/Userscripts/raw/master/getuserlist.user.js
// @author      Emrik <e@mrik.ga>
// @description 2020-03-18 23:12:15
// ==/UserScript==


function waitForElementToDisplay(selector, time) {
  if(document.querySelector(selector) != null) {
    console.log("merging with button now")
    document.querySelector(selector).addEventListener("click", function(){
      var arr = []
      var inputs = document.querySelectorAll("div")
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].getAttribute("aria-label") != null) {
          if (inputs[i].getAttribute("aria-label").startsWith("Visa fler åtgärder för")) {
            arr.push(inputs[i].getAttribute("aria-label").substring(23))
          }
        }
      }
    
      arr.push(document.querySelector("div.XWGOtd:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").innerHTML.slice(0, -5))
    
      function removeDups(names) {
        let unique = {}
        names.forEach(function(i) {
          if(!unique[i]) {
            unique[i] = true
          }
        })
        return Object.keys(unique)
      }
    
      navigator.clipboard.writeText(removeDups(arr).sort((a, b) => a.split(' ')[1] < b.split(' ')[1] ? -1 : 1).toString().replace(/,/g, "\n"))
    })
    return
  }
  else {
    setTimeout(function() {
      waitForElementToDisplay(selector, time)
    }, time)
  }
}
waitForElementToDisplay(".anXpBf", 3000)
