!function(){var t,n=document.getElementById("startButton"),e=document.getElementById("stopButton");function o(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}n.addEventListener("click",(function(){n.disabled=!0,t=setInterval(o,1e3)})),e.addEventListener("click",(function(){n.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.91047e9b.js.map