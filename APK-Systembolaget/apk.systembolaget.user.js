// ==UserScript==
// @name        APK Systembolaget
// @namespace   APK Systembolaget by C4illin
// @match       https://www.systembolaget.se/produkt/*
// @grant       none
// @version     1.0
// @author      C4illin
// @description Adds APK value to product pages
// @run-at      document-idle
// ==/UserScript==

let refresh = setInterval(() => {
  let alkohol = document.querySelector('.css-mggt0o > div:nth-child(3) > span:nth-child(1)')?.innerText
  let price = document.querySelector('.css-1b705ej > div:nth-child(1)')?.innerText.replace(" ","").replace(":-","").replace(":",".")
  let volume = document.querySelector('.css-mggt0o > div:nth-child(2) > span:nth-child(1)')?.innerText
  let apk = Math.round((alkohol?.split(' ')[0].replace(",",".")*volume?.split(' ')[0]/100/price + Number.EPSILON) * 1000) / 1000
  //console.log("APK: " + apk)
  if (!apk.isNaN){
    clearInterval(refresh)
    let main = document.getElementsByClassName("css-mggt0o")[0]
    let apkdisplay = main.children[1].cloneNode()
    apkdisplay.innerText = ("APK " + apk).replace(".",",")
    main.append(apkdisplay)
    
  }
}, 250)