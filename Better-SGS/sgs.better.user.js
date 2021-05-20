// ==UserScript==
// @name        Better SGS
// @namespace   Better SGS by C4illin
// @match       https://marknad.sgs.se/*
// @grant       none
// @version     1.0
// @author      C4illin
// @run-at      document-idle
// @description Better SGS
// ==/UserScript==


let refresh = setInterval(() => {
  let hash = window.location.hash.split("&take")
  if (hash[1] != "=1000000") {
    hash[1] = "=1000000"
    let newlink = "https://marknad.sgs.se"+ window.location.pathname + window.location.search + hash.join("&take")
    window.location.replace(newlink)
  }
  let value = document.querySelector("#selected-take").value
  if (value != null){
    clearInterval(refresh)

    let distance = {
      "Kustgatan":5,
      "Birger Jarl":4.5,
      "Brahegatan":6.3,
      "Ekbacka":8.2,
      "Fridhemsgatan":5.6,
      "Gibraltar":1.1,
    }

    let table = document.querySelector("table.table.table-striped")
    let tableH = document.createElement("th")
    tableH.innerHTML = "till Chalmers"
    table.children[0].children[0].appendChild(tableH)

    table.children[0].children[0].children[8].style.display = "none" // hide where it is from torget etc

    let tr = table.children[1].children

    for (let i = 0; i < tr.length; i++) {
      tr[i].children[8].style.display = "none"
      let address = tr[i].children[1].innerHTML
      let distelem = document.createElement("td")
      if (distance[address]) {
        distelem.innerHTML = (distance[address] + " km").replace(".",",")
      } else {
        distelem.innerHTML = ""
      }
      tr[i].appendChild(distelem)
    }
  }
}, 1000)

// table tr > *:nth-child(2) {
//   display: none;
// }