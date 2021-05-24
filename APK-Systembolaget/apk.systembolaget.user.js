// ==UserScript==
// @name        APK Systembolaget
// @namespace   APK Systembolaget by C4illin
// @match       https://www.systembolaget.se/produkt/*
// @grant       none
// @version     1.4
// @author      C4illin
// @description Adds APK value to product pages
// @run-at      document-idle
// ==/UserScript==

let refresh = setInterval(() => {
  let main = document.querySelector(".col-md-7.offset-md-1")?.children
  if (main) {
    let offset = 0
    if (main.length == 5) {
      offset = 1
    }
    let alkohol = main[2+offset]?.firstChild?.firstChild?.children[2]?.children[0]?.innerText
    if (alkohol.endsWith("g/l")) {
      alkohol = "0 %"
    }

    let price = Number(main[2+offset]?.children[1]?.firstChild?.innerText.replace(" ","").replace(":-","").replace(":","."))
    let volume = main[2+offset]?.firstChild?.firstChild?.children[1]?.children[0]?.innerText
    let apk = Math.round((alkohol?.split(' ')[0].replace(",",".")*volume?.split(' ')[0]/100/price + Number.EPSILON) * 1000) / 1000
    if (!apk.isNaN){
      clearInterval(refresh)
      let maind = main[2+offset].firstChild.firstChild
      let apkdisplay = maind.children[1].cloneNode()
      apkdisplay.innerText = ("APK " + apk).replace(".",",")
      maind.append(apkdisplay)
    }
  }
}, 200)