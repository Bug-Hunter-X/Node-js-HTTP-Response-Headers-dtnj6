# Missing Content-Type Header in Node.js HTTP Response

This repository demonstrates a common error in Node.js HTTP servers: omitting the `Content-Type` header in the response.  This can lead to unexpected behavior on the client-side, as the client may not be able to correctly interpret the response body.

## Bug Description:

The `bug.js` file shows an HTTP server that sends a response without specifying the `Content-Type` header. This can cause issues with clients that rely on this header to determine how to handle the response (e.g., parsing JSON, rendering HTML).

## Solution:

The `bugSolution.js` file corrects the issue by adding the `Content-Type` header to the response.  This explicitly tells the client the type of data being sent (in this case, plain text).