// ==UserScript==
// @name        Get classlist
// @namespace   Get classlist by E, D, E
// @match       https://meet.google.com/*
// @grant       none
// @version     1.1.1
// @downloadURL https://github.com/C4illin/Userscripts/raw/master/getuserlist.user.js
// @updateURL   https://github.com/C4illin/Userscripts/raw/master/getuserlist.user.js
// @author      Emrik Daniel och Edvin <e@mrik.ga>
// @description 2020-03-18 23:12:15
// ==/UserScript==

let status = false
function waitForElementToDisplay(selector, time) {
  if(document.querySelector(selector) != null) {
    status = true
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

      function add_emoji(array,classNames) {
        var out = []
        for (var i = 0; i < classNames.length; i++) {
          if (array.includes(classNames[i])){
            out.push("✔️ " + (classNames[i].split(" "))[0])
          } else {
            out.push("❌ " + (classNames[i].split(" "))[0])
          }
        }
        return out
      }
      
      const klass = ["Lukas Abel", "Dadi Andrason", "Oliver Andreasson", "Lukas Artursson", "Fabian Beskow", "Joel Båtsman Hilmersson", "Julius Eliasson", "Elias Falk", "Petter Halling", "Erik Hellman", "Vincent Hellner", "Anton Håkansson", "Kevin Jeryd", "Felix Johansson", "Alexander Kjellberg", "Simon Lindwall", "Oscar Litorell", "Edvin Lundqvist Sternvik", "Patrik Lussi", "Joel Martinsson", "Edvin Nilsson", "Daniel Persson", "Gabriel Pfeiffer", "Erik Päts", "Filip Rakic", "Christoffer Ridderland", "Anton Roegner Kinnmark", "Isak Roos", "Johan Scherman", "Jonathan Sundh", "Johan Wheeler", "Emrik Östling"]

      let attedense = removeDups(arr).sort((a, b) => a.split(' ')[1] < b.split(' ')[1] ? -1 : 1)

      navigator.clipboard.writeText(add_emoji(attedense, klass).toString().replace(/,/g, "\n"))
      console.log("Copied text")
    })
    return
  }
  else {
    setTimeout(function() {
      waitForElementToDisplay(selector, time)
    }, time)
  }
}

if (status == false) {
  waitForElementToDisplay(".anXpBf", 3000)
}


function checkElement(selector) {
  if (status == true && document.querySelector(selector) == null) {
    status == false
    waitForElementToDisplay(selector, 3000)
    console.log("försöker nu igen")
  }
  setTimeout(function(){
    checkElement(selector)
  }, 10000)
}
checkElement(".anXpBf")