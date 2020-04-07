// ==UserScript==
// @name        Copy all users badly lol
// @namespace   Violentmonkey Scripts
// @include     https://meet.google.com/*
// @grant       none
// @version     1.0
// @author      C4illin (unfortunately)
// @description No joke this is so bad
// @run-at      document-idle
// @downloadURL https://github.com/C4illin/Userscripts/raw/master/Experimental/copy.simple.user.js
// ==/UserScript==

let toggleButtonSVG = null

var gridOff =
  '<path fill="currentColor" d="M11.41 3.76c-.8.04-1.6.31-2.27.86-1.5 1.22-1.89 3.52-.59 5.06 1.06 1.24 3.02 1.55 4.3.4.98-.88 1.21-2.5.2-3.52a2.05 2.05 0 00-1.34-.6c-.5-.02-1.05.17-1.42.61-.23.29-.35.64-.33 1.01.01.38.23.82.65 1.01.32.14.52.1.78-.01a.7.7 0 00.39-.37.74.74 0 00-.07-.65l-.84.54a.41.41 0 01-.01-.3c.05-.11.12-.13.13-.14l.04.02c-.07-.03-.07-.04-.07-.14s.05-.27.1-.33a.67.67 0 01.6-.25c.24.02.51.13.69.3.56.57.41 1.55-.18 2.08-.82.74-2.14.53-2.85-.3-.92-1.09-.63-2.76.45-3.64 1.34-1.09 3.37-.73 4.42.6 1.25 1.6.82 3.98-.77 5.2l.61.79a4.73 4.73 0 00.94-6.6 4.31 4.31 0 00-3.56-1.63zm.44 9.55c-1.42 0-3.45.34-5.19 1.04-.87.35-1.67.79-2.28 1.35a2.9 2.9 0 00-1.03 2.11v3.5h17v-3.5a2.9 2.9 0 00-1.04-2.11c-.6-.56-1.4-1-2.27-1.35a15.08 15.08 0 00-5.2-1.04zm0 1c1.25 0 3.22.33 4.81.97.8.32 1.5.72 1.97 1.15.48.44.72.89.72 1.38v2.5h-15v-2.5c0-.5.24-.94.71-1.38a6.57 6.57 0 011.97-1.15c1.6-.64 3.57-.97 4.82-.97zm0 1c-1.43 0-2.92.34-4.11.77-.6.21-1.11.45-1.51.7-.4.25-.74.45-.86.9l-.02.08v1.55h13v-1.57l-.02-.06c-.13-.47-.46-.66-.87-.9-.4-.25-.91-.49-1.5-.7a12.56 12.56 0 00-4.11-.77zm0 1c1.27 0 2.68.31 3.77.7.54.2 1 .42 1.32.62.3.19.42.38.4.3v.38h-11v-.37c0 .07.1-.12.41-.3.32-.2.79-.42 1.33-.62 1.09-.4 2.5-.7 3.77-.7z"></path>'
var gridOn =
  '<path fill="currentColor" d="M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"></path>'
  
const toggleSVG = () => {
  if (toggleButtonSVG.innerHTML == gridOn) {
    toggleButtonSVG.innerHTML = gridOff
  } else {
    toggleButtonSVG.innerHTML = gridOn
  }
}

setInterval(() => {
  let buttons = document.querySelector('[data-fps-request-screencast-cap]').parentElement.parentElement.parentElement
  if (!buttons.__attendent_ran) {
    buttons.__attendent_ran = true
    console.log("hmm")
    buttons.prepend(buttons.children[1].cloneNode())
    const toggleButton = document.createElement('div')
    toggleButton.classList = buttons.children[1].classList
    toggleButton.classList.add('__gmgv-button')
    toggleButton.style.display = 'flex'
    toggleButton.onclick = toggleSVG
    buttons.prepend(toggleButton)

    toggleButtonSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    toggleButtonSVG.style.width = '24px'
    toggleButtonSVG.style.height = '24px'
    toggleButtonSVG.setAttribute('viewBox', '0 0 24 24')
    toggleButtonSVG.innerHTML = gridOff
    toggleButton.appendChild(toggleButtonSVG)
  }
}, 250)

function getAllAttendees() {


  let buttons = document.querySelector('[data-fps-request-screencast-cap]').parentElement.parentElement.parentElement

  let gridtoggle
  if (buttons.children[2].firstChild.innerHTML.substring(30,31) == "1") {
    gridtoggle = true
  }  
  else {
    gridtoggle = false
  }
  let checkboxes = buttons.children[2].lastChild.children
  let showOnlyVideo = checkboxes[0].firstChild.checked
  let includeOwnVideo = checkboxes[2].firstChild.checked
  // console.log(gridtoggle,showOnlyVideo,includeOwnVideo)
  
  let toChange = [false, false, false]
  if (!gridtoggle) {
    buttons.children[2].click()
    toChange[0] = true
  }
  if (!showOnlyVideo) {
    checkboxes[0].firstChild.checked = true
    toChange[1] = true
  }
  if (!showOnlyVideo) {
    checkboxes[2].firstChild.checked = true
    toChange[2] = true
  }
  // console.log(toChange)

  let attendees = []
  document.querySelectorAll(".epqixc").forEach(element => attendees.push(element.innerText))
  console.log(attendees)
  
}