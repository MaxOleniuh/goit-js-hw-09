let t=null;const e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");e.addEventListener("click",(()=>{t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,e.disabled=!0}),1e3)})),a.addEventListener("click",(()=>{clearInterval(t),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.fd74bf6c.js.map