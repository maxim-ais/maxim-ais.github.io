window.cookieShark = {}; window.cookieShark.config = {"first_screen_title":"Let me tell you a secret...","first_screen_intro":"If we\u2019re able to track your (anonimized) website visit, we can offer you great content about traveling in Peru. We\u2019ll show you awesome hidden gems via Facebook and instagram messages\u2026","first_screen_image":"http:\/\/127.0.0.1:8000\/storage\/","first_screen_no_link":"Hell no, I prefer without cookies and hidden gems","first_screen_yes_link":"Yes, please!","confirm_link":"Accept","second_screen_title":"It's a deal","second_screen_intro":"We are activating the following cookies:","third_screen_title":"Change cookie preferences","third_screen_intro":"Change your cookie preferences here:","main_color":"#794B9B","accent_color":"#FFA500","text_color":"#212529","cookies_table":"<div class=\"cookie--checkers-container\">\r\n    <div class=\"cookie--checker-parent\">\r\n                <div class=\"cookie--checker-container\">\r\n            <label class=\"cookie--checkbox-container\">Default\r\n                <input type=\"checkbox\"  id=\"cookie--checkbox-necesary\" onclick=\"return false;\" checked=\"checked\" >\r\n                <span class=\"cookie--checkbox-checkmark\"><\/span>\r\n            <\/label>\r\n            <span class=\"cookie--checkbox-details\">Show details<\/span>\r\n            <div class=\"cookie--table-container\" style=\"display:none;\">\r\n            <table class=\"cookie--table\">\r\n                <tbody><tr>\r\n                    <th>Name<\/th>\r\n                    <th>Company<\/th>\r\n                    <th>Description<\/th>\r\n                    <th>Expires<\/th>\r\n                <\/tr>\r\n                        <\/tbody><\/table>\r\n            <\/div>\r\n        <\/div>\r\n                <div class=\"cookie--checker-container\">\r\n            <label class=\"cookie--checkbox-container\">Marketing\r\n                <input type=\"checkbox\"  id=\"cookie--checkbox-marketing\" >\r\n                <span class=\"cookie--checkbox-checkmark\"><\/span>\r\n            <\/label>\r\n            <span class=\"cookie--checkbox-details\">Show details<\/span>\r\n            <div class=\"cookie--table-container\" style=\"display:none;\">\r\n            <table class=\"cookie--table\">\r\n                <tbody><tr>\r\n                    <th>Name<\/th>\r\n                    <th>Company<\/th>\r\n                    <th>Description<\/th>\r\n                    <th>Expires<\/th>\r\n                <\/tr>\r\n                        <\/tbody><\/table>\r\n            <\/div>\r\n        <\/div>\r\n                <div class=\"cookie--checker-container\">\r\n            <label class=\"cookie--checkbox-container\">Analytics\r\n                <input type=\"checkbox\"  id=\"cookie--checkbox-analytics\" >\r\n                <span class=\"cookie--checkbox-checkmark\"><\/span>\r\n            <\/label>\r\n            <span class=\"cookie--checkbox-details\">Show details<\/span>\r\n            <div class=\"cookie--table-container\" style=\"display:none;\">\r\n            <table class=\"cookie--table\">\r\n                <tbody><tr>\r\n                    <th>Name<\/th>\r\n                    <th>Company<\/th>\r\n                    <th>Description<\/th>\r\n                    <th>Expires<\/th>\r\n                <\/tr>\r\n                        <\/tbody><\/table>\r\n            <\/div>\r\n        <\/div>\r\n                <div class=\"cookie--checker-container\">\r\n            <label class=\"cookie--checkbox-container\">General\r\n                <input type=\"checkbox\"  id=\"cookie--checkbox-other\" >\r\n                <span class=\"cookie--checkbox-checkmark\"><\/span>\r\n            <\/label>\r\n            <span class=\"cookie--checkbox-details\">Show details<\/span>\r\n            <div class=\"cookie--table-container\" style=\"display:none;\">\r\n            <table class=\"cookie--table\">\r\n                <tbody><tr>\r\n                    <th>Name<\/th>\r\n                    <th>Company<\/th>\r\n                    <th>Description<\/th>\r\n                    <th>Expires<\/th>\r\n                <\/tr>\r\n                        <\/tbody><\/table>\r\n            <\/div>\r\n        <\/div>\r\n            <\/div>\r\n<\/div>","js_link":"\/storage\/js\/mdl5dbab735eed61.js","cta_image":"http:\/\/127.0.0.1:8000\/img\/probeer-ook-gratis-cookieShark.png"}; window.cookieShark.scripts = [];!function(e){var o={};function t(n){if(o[n])return o[n].exports;var c=o[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=48)}({48:function(e,o,t){e.exports=t(49)},49:function(e,o){window.cookieShark.modal=function(){var e=[],o={},t="";function n(e){var t,n=document.createElement("div");for(var c in n.setAttribute("id","cookieShark--main-modal"),o)e=e.replace("{{"+c+"}}",o[c]);n.innerHTML=e,document.getElementsByTagName("body")[0].appendChild(n),void 0!==(t=document.getElementById("cookieShark--main-modal"))?(console.log(t),t.querySelector("#cookie--Modal").style.display="block",function(e){var o=e.querySelector("#cookie--first-screen"),t=e.querySelector("#cookie--second-screen"),n=e.querySelector("#firstscreenvalue"),c=e.querySelector(".cookie--yes-button"),i=e.querySelector(".cookie--no-link");c.onclick=function(){o.style.display="none",document.getElementById("cookie--checkbox-marketing").checked=!0,document.getElementById("cookie--checkbox-analytics").checked=!0,document.getElementById("cookie--checkbox-other").checked=!0,n.value="yes",t.style.display="block"},i.onclick=function(){o.style.display="none",n.value="no",t.style.display="block"}}(t),function(e){e.querySelector("#cookie--first-screen");var o=e.querySelector("#cookie--second-screen"),t=e.querySelector(".cookie--accept-button");(function(e){for(var o=e.querySelectorAll(".cookie--checkbox-details"),t=0;t<o.length;t++){var n=o[t];n.onclick=function(){for(var o=this.parentNode,t=o.children[2],n=e.querySelectorAll(".cookie--table-container"),c=0;c<n.length;c++)if(n[c]!==t){n[c].style.display="none";var i=n[c].parentNode.children[1];i.innerHTML="show cookies"}"none"==t.style.display?(t.style.display="block",this.innerHTML="close details"):(t.style.display="none",this.innerHTML="show cookies")}}})(e),t.onclick=function(){o.style.display="none",e.style.display="none"}}(t)):console.log("modal undifined")}return{init:function(){var c;e=window.cookieShark.scripts,o=window.cookieShark.config,function(){t=new MutationObserver(function(o){o.forEach(function(o){o.addedNodes.forEach(function(o){if(1===o.nodeType&&"SCRIPT"===o.tagName){var t=o.src||"";e.forEach(function(e){t.includes(e.url)&&("default"!=e.category?(o.type="javascript/blocked/"+e.category,console.log("blocked: "+t)):console.log("not bocked: "+t))})}})})});var o=document.documentElement;t.observe(o,{childList:!0,subtree:!0})}(),c=document.createElement,document.createElement=function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return"script"!==o[0].toLowerCase()?(console.log("skipped",o),console.log(c.bind(document).apply(void 0,o)),c.bind(document).apply(void 0,o)):c.bind(document).apply(void 0,o)},document.addEventListener("DOMContentLoaded",function(){var e,t;e="_cookieShark",(t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)")))&&t[2]||(function(){var e=document.getElementsByTagName("head")[0];if(!document.getElementById("cookieShark-css")){var t=document.createElement("link");t.id="cookieShark-css",t.rel="stylesheet",t.type="text/css",t.href="https://dev.cookieshark.eu/css/modal.css",t.media="all",e.appendChild(t)}if(!document.getElementById("cookieShark-css-custom")){var n=":root{ --cookie--accent-color: "+o.accent_color+"; --cookie--sub-color: "+o.main_color+"; --cookie--text-color: "+o.text_color+"; }",c=document.createElement("style");c.id="cookieShark-css-custom",c.type="text/css",c.styleSheet?c.styleSheet.cssText=n:c.appendChild(document.createTextNode(n)),e.appendChild(c)}}(),function(e,o,t){if("GET"==o){var n=new XMLHttpRequest;n.open(o,e,!0),n.onload=function(){t(n.responseText)},n.send()}}("https://dev.cookieshark.eu/template/modal.php","GET",n))})}}}(),window.cookieShark.modal.init()}});