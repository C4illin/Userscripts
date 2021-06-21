// ==UserScript==
// @name        APK Systembolaget
// @namespace   APK Systembolaget by C4illin
// @description Adds APK value to product pages
// @icon        https://raw.githubusercontent.com/alkolist/alkolist.github.io/main/icon/android-chrome-512x512.png
// @match       https://www.systembolaget.se/produkt/*
// @grant       none
// @version     1.7
// @author      C4illin <e@mrik.ga>
// @homepageURL https://alkolist.github.io/
// @run-at      document-idle
// ==/UserScript==

GM_info.script.homepageURL = "https://alkolist.github.io/"

let refresh = setInterval(() => {
  let main = document.querySelector(".col-md-7.offset-md-1")?.children
  if (main) {
    //let offset = 0
    let alkohol = main[2]?.firstChild?.firstChild?.children[2]?.children[0]?.innerText
    if (alkohol == null) {
      alkohol = "0 %"
    }
    
    if (alkohol.endsWith("g/l")) {
      alkohol = "0 %"
    }

    let price = Number(main[2]?.children[1]?.firstChild?.innerText.replace(" ","").replace(":-","").replace(":","."))
    let volume = main[2]?.firstChild?.firstChild?.children[1]?.children[0]?.innerText
    let apk = Math.round((alkohol?.split(' ')[0].replace(",",".")*volume?.split(' ')[0]/100/price + Number.EPSILON) * 1000) / 1000
    if (!apk.isNaN){
      clearInterval(refresh)
      let maind = main[2].firstChild.firstChild
      let apkdisplay = maind.children[1].cloneNode()
      apkdisplay.innerText = ("APK " + apk).replace(".",",")
      maind.append(apkdisplay)
    }
  }
}, 200)