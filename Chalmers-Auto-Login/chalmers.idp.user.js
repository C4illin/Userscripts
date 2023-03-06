// ==UserScript==
// @name        Chalmers idp auto
// @namespace   Chalmers idp auto by C4illin
// @match       https://idp.chalmers.se/adfs/*
// @match       https://idp2.chalmers.se/adfs/*
// @grant       none
// @version     1.0
// @author      C4illin
// @description 2022-12-16 23:39:48
// ==/UserScript==


function checkIfPassAndUserIsDone() {
  let username = document.getElementById("userNameInput").value
  let pass = document.getElementById("passwordInput").value

  if (username.length > 3 && pass.length > 3) {
    console.log("Chalmers idp auto is done")
    return document.getElementById("submitButton").click()
  }
  setTimeout(checkIfPassAndUserIsDone,300)
}

checkIfPassAndUserIsDone()