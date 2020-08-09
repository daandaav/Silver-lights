#	Silver-lights

#	Un/registered Visitor Sessions

This program does not work as a prototype, but more a general starting idea of as to how we'll get our most-prioritised User Story to work.
(User Story: Unregistered User Session)

Reason as to why: Development in JavaScript is kind of hard to do in a rushed manner. Would be ideal to have Google Chrome installed in the future, aside from just having Microsoft Edge.
My solution to this problem in terms of workflow: I had installed TypeScript instead, because the TypeScript compiler allows me to see errors on the fly instead of through the browser.
Combine TypeScript with Visual Studio Code extensions, the workflow in getting base-code is faster. Although, it does not guarantee code that works across all browsers especially since:
	TypeScript's compiler generates what the resulting JavaScript file through the "tsconfig.json" compiler-settings. Currently the compiler-settings for my TypeScript is in the default,
		generated automatically by the command: `tsc --init`

The general idea is to have the JavaScript run through a "document.getElementByClassName(".http-connection-code)",
	which then tells the script to generate a random number unique to that session, and then runs another function.
	The other function is for both creating a locally stored cache for that session then mapping both the ID and Cache data together.

	And then depending on the Visitor Session ID, this will then be our request/response with HTTP to the Java server, so that it can load the page in various ways:

-	Load webpage with locked multi-media content.
-	Load a separate webpage between the unregistered and registered visitor sessions.
-	Load the same webpage but with other forms of limitations? (Needs to be elaborated upon)**

	I also want to try and get this program to work into a JSON file which then sends that same data to a Java server.

Next task for this program is to have these locally stored caches be transformed from unregistered user sessions to registered user sessions.

As for what to do when designing the webpage, I need to consult with our team's UX Designer in order to have a convention to follow when designing the website.
