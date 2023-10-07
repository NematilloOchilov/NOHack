var mening_balim = 999999;
var loc = (location.hash || "").substr(1), loc = loc.replace(/[\?&].*/g, "");

function NOHack(dataset, success) {var request = new XMLHttpRequest, tarkib = [], i; for (i in dataset) tarkib.push(encodeURIComponent(i) + "=" + encodeURIComponent(dataset[i]));
    request.onreadystatechange = function () {4 == request.readyState && 200 == request.status && success(JSON.parse(request.responseText))}; 
    request.open("POST", "/api/setScore", !0); request.send(tarkib.join("&"))}

NOHack({data: loc, score: mening_balim || 0}, function (a) {console.log("Success"); console.log(a);});
