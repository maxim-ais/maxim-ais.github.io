var generalConfig={scriptName:"analytics.js",coolieName:["_ga","_gid","_gat"],coolieDomain:".maxim-ais.github.io",googleAnalyticsUserID:"UA-150997632-1"};function deleteCookie(e,o,a){for(var n="/",i="Thu, 01 Jan 1970 00:00:01 GMT",t=0;t<e.length;t++){var r=e[t];r="_gat"===r?"_gat_"+a:r,document.cookie=r+"=; Path="+n+"; Domain="+o+"; Expires="+i+";"}}document.head.insertBefore=function(t){return function(){for(var e=window.location.search&&"true"===window.location.search.match(/(?<=flag\=)(.*)/)[0],o=[],a=Object.assign([],arguments),n=0;n<a.length;n++){var i=a[n];"script"===i.tagName.toLowerCase()&&i.src.includes(generalConfig.scriptName)&&e&&(i.setAttribute("src",""),deleteCookie(generalConfig.coolieName,generalConfig.coolieDomain,generalConfig.googleAnalyticsUserID)),o.push(i)}t.apply(this,o)}}(document.head.insertBefore);
