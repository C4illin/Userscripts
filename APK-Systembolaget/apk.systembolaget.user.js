// ==UserScript==
// @name        APK Systembolaget
// @namespace   APK Systembolaget by C4illin
// @match       https://www.systembolaget.se/produkt/*
// @grant       none
// @version     1.3
// @author      C4illin
// @description Adds APK value to product pages
// @run-at      document-idle
// ==/UserScript==

let refresh = setInterval(() => {
  let main = document.querySelector(".col-md-7.offset-md-1")?.children
  let alkohol = main[2].firstChild.firstChild?.children[2]?.children[0]?.innerText
  let price = main[2]?.children[1]?.firstChild?.innerText.replace(" ","").replace(":-","").replace(":",".")
  let volume = main[2].firstChild.firstChild?.children[1]?.children[0]?.innerText
  let apk = Math.round((alkohol?.split(' ')[0].replace(",",".")*volume?.split(' ')[0]/100/price + Number.EPSILON) * 1000) / 1000
  //console.log("APK: " + apk)
  if (!apk.isNaN){
    clearInterval(refresh)
    let maind = main[2].firstChild.firstChild
    let apkdisplay = maind.children[1].cloneNode()
    apkdisplay.innerText = ("APK " + apk).replace(".",",")
    maind.append(apkdisplay)
  }
}, 200)