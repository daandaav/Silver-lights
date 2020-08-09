"use strict";
/** user_session.ts documentation
 * the general idea is that if the HTML page is accessed and the page hits a class or id element,
 * the program then proceeds to check for HTTP status codes and then if it matches that range of codes-
 * -it will then execute a JSON parse and send a message to the server with a randomly generated ID and some cache data.
 * Locally stored cache will also present itself in the user's browser.
*/
exports.__esModule = true;
require("jquery");
var UserSession = /** @class */ (function () {
    function UserSession(sessionId, sessionCache) {
        this.sessionId = sessionId;
        this.sessionCache = sessionCache;
    }
    UserSession.prototype.getSessionId = function () { return this.sessionId; };
    UserSession.prototype.getsessionCache = function () { return this.sessionCache; };
    UserSession.prototype.generateRng = function () {
        this.sessionId = "\/([^a-zA-Z0-9])\/";
        var rng = Math.floor(Math.random() * parseInt(this.sessionId)) + 1;
        var sId = "\"" + rng + "\"";
        return sId;
    };
    UserSession.prototype.initializeCaching = function () {
        var locallyStoreCache = new Storage;
        var urls = ["/api/get/config?visitor=" + this.generateRng, "/api/get/visitorcache"];
        var sessionCached = caches.open(".cache-stored-class").then(function (cache) {
            cache.addAll(urls);
        });
        var sCache = "\"" + sessionCached + "\"";
        return locallyStoreCache.setItem(this.generateRng(), sCache);
    }; // Available: https://medium.com/javascript-dots/cache-api-in-javascript-644380391681
    return UserSession;
}()); // Available: https://stackoverflow.com/questions/205411/random-string-that-matches-a-regexp
var CrossXhttp = /** @class */ (function () {
    function CrossXhttp() {
        this.xhttp = new XMLHttpRequest;
        this.sessionId = UserSession.toString();
    }
    CrossXhttp.prototype.readyOnReach = function () {
        var regex;
        regex = "\/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\/";
        var ip = this.xhttp.responseText.match(regex);
        return ip;
    };
    CrossXhttp.prototype.freshOnLoad = function () {
        document.getElementsByClassName(".jquery-connection-code");
        this.xhttp.open("HEAD", "//" + window.location.host + "/?rand=" + Math.floor((1 + Math.random()) * 0x10000), false); // 0x10000 is similar to THRESHOLD = 10_000 // of bits/bytes in a stream
        if (this.xhttp.status >= 200 && (this.xhttp.status < 300 || this.xhttp.status === 304)) {
            var message = JSON.parse(this.sessionId);
            try {
                this.xhttp.send(message);
            }
            catch (error) {
                console.error();
                return false;
            }
        }
        else if (this.xhttp.status === 218)
            this.xhttp.send(message);
        else {
            return console.error();
        }
    }; // Available: https://stackoverflow.com/questions/205411/random-string-that-matches-a-regexp
    return CrossXhttp;
}());
