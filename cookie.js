function storeCookie() {
    let key = prompt("Enter key to store cookie");
    let value = prompt("Enter value to store into cookie");
    let cookie = key + '=' + encodeURIComponent(value);
    cookie += ';max-age=' + (5 * 24 * 60 * 60); // 5 days
    document.cookie = cookie;
}

function readCookie() {
    let key = prompt("Enter key to read cookie");
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if (cookiePair[0].trim() == key) {
            alert(decodeURIComponent(cookiePair[1]));
            return; // Stop after finding the first match
        }
    }
    alert("Cookie not found");
}
