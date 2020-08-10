/** user_session.ts documentation
 * the general idea is that if the HTML page is accessed and the page hits a class or id element,
 * the program then proceeds to check for HTTP status codes and then if it matches that range of codes-
 * -it will then execute a JSON parse and send a message to the server with a randomly generated ID and some cache data.
 * Locally stored cache will also present itself in the user's browser.
 * 
 * General idea of what I'm trying to achieve: http://youmightnotneedjquery.com/#json
*/

import { match } from "assert";
import * as http from "http";
import { Http2Server, Http2ServerRequest, Http2ServerResponse } from "http2";

const cache = require("caches");

class UserSession {
	private sessionId: string;
	private sessionCache: string;

	constructor(sessionId: string, sessionCache: string) {
		this.sessionId = sessionId;
		this.sessionCache = sessionCache;
	}

	getSessionId() { return this.sessionId; }
	getsessionCache() { return this.sessionCache; }

	generateRng() {
    this.sessionId = "\/([^a-zA-Z0-9])\/";

    let rng = Math.floor(Math.random() * parseInt(this.sessionId)) + 1;

    let sId = "\"" + rng + "\""

	return sId;
  }
  
  initializeCaching() {
    let locallyStoredCache = window.localStorage;

    let urls = ["/api/get/config?visitor=" + this.generateRng, "/api/get/visitorcache"];

    let sessionCached = caches.open(".cache-stored-class").then(cache => {
      cache.addAll(urls)
    });

    let sCache = "\"" + sessionCached + "\"";
	
	return locallyStoredCache.setItem(this.generateRng(), sCache);
  } // Available: https://medium.com/javascript-dots/cache-api-in-javascript-644380391681

  cacheResponseAsJson() {
	  let locallyStoredCache = window.localStorage;

		let data = JSON.parse(this.sessionCache);
		let item = JSON.stringify(data);

	  let response = cache.put("/local_cache.json", new Response("{\"localCachedId\" : "+ item +" "));

	  return response;
  }

  cacheRequesForJson() {
		let request = new Request("/cached_data_items/local_cache.json");

		let requestToJson = JSON.stringify(request);

		let options = {
			headers: {
				"Content-Type": "application/json",
			}
		}

		let responseAsJson = new Response("{}", options);
		let message = JSON.stringify(responseAsJson);

		let matchResponse = message.match(requestToJson);

		return matchResponse;
	}


} // Available: https://stackoverflow.com/questions/205411/random-string-that-matches-a-regexp

class CrossXhttp {
	public xhttp = new XMLHttpRequest;
	sessionId = UserSession.toString();
	
	readyOnReach() {
		let regex : string;
		regex = "\/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\/";
		
		let ip = this.xhttp.responseText.match(regex);

		return ip;
	}

	freshOnLoad() {
		this.xhttp.open("GET", "../landing_page.html", true); // 0x10000 is similar to THRESHOLD = 10_000 // of bits/bytes in a stream
		
		document.getElementsByClassName(".http-connection-code");

		let message = JSON.parse(this.sessionId);
		let mail = JSON.stringify(message);

		if (this.xhttp.status >= 200 && (this.xhttp.status < 300 || this.xhttp.status === 304)) {
			try { this.xhttp.send(mail); }
			catch (error) { console.error(); return 1; }
    }
    
    else if (this.xhttp.status === 218) this.xhttp.send(mail);

		else { return console.error(); }
	} // Available: https://stackoverflow.com/questions/205411/random-string-that-matches-a-regexp

	postAfterLoad() {
		let message = JSON.parse(this.sessionId);
		let mail = JSON.stringify(message);

		this.xhttp.open("POST", "/reqs/media_content.html, true");
		this.xhttp.setRequestHeader("Content-Type", "app/client_server_page.html; charset=\"UTF-8\"");
		this.xhttp.send(mail);
	}
}

class WebsiteDomain {

	hostnamePathing = {
		hostname: "silverlights.amstel.net",
		path: "200_node.html",
		method: "GET",
		head: { Accept: "../*.html" }
	}

	writer() {
		let req = fetch("silverlights.amstel.net", {
			method: "POST",
			headers: { "Content-Type": "../landing_page.html"}
		});

		req
	}
}