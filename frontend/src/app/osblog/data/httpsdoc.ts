export const httpMethods = [
  {
    http: "GET",
    desc: "The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should not contain a request content.",
  },
  {
    http: "PUT",
    desc: "The PUT method replaces all current representations of the target resource with the request content.",
  },
  {
    http: "POST",
    desc: "The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.",
  },
  {
    http: "DELETE",
    desc: "The DELETE method deletes the specified resource.",
  },
  {
    http: "PATCH",
    desc: "The PATCH method applies partial modifications to a resource.",
  },
];

export const httpStatusCodes = [
  {
    http: "200 OK",
    desc: "The request succeeded. The result and meaning of 'success' depends on the HTTP method: <ul><li><http class='element'>GET</http>: The resource has been fetched and transmitted in the message body.</li><li><http class='element'>HEAD</http>: Representation headers are included in the response without any message body.</li><li><http class='element'>PUT</http> or <http class='element'>POST</http>: The resource describing the result of the action is transmitted in the message body.</li><li><http class='element'>TRACE</http>: The message body contains the request as received by the server.</li></ul>",
  },
  {
    http: "201 Created",
    desc: "The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.",
  },
  {
    http: "204 No Content",
    desc: "There is no content to send for this request, but the headers are useful. The user agent may update its cached headers for this resource with the new ones.",
  },
  {
    http: "301 Moved Permanently",
    desc: "The URL of the requested resource has been changed permanently. The new URL is given in the response.",
  },
  {
    http: "307 Temporary Redirect",
    desc: "The server sends this response to direct the client to get the requested resource at another URI with the same method that was used in the prior request. This has the same semantics as the 302 Found response http, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the redirected request.",
  },
  {
    http: "308 Permanent Redirect",
    desc: "This means that the resource is now permanently located at another URI, specified by the Location response header. This has the same semantics as the 301 Moved Permanently HTTP response http, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.",
  },
  {
    http: "400 Bad Request",
    desc: "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).",
  },
  {
    http: "401 Unauthorized",
    desc: "Although the HTTP standard specifies 'unauthorized', semantically this response means 'unauthenticated'. That is, the client must authenticate itself to get the requested response.",
  },
  {
    http: "403 Forbidden",
    desc: "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.",
  },
  {
    http: "404 Not Found",
    desc: "The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response http is probably the most well known due to its frequent occurrence on the web.",
  },
  {
    http: "407 Proxy Authentication Required",
    desc: "This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.",
  },
  {
    http: "408 Request Timeout",
    desc: "This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers use HTTP pre-connection mechanisms to speed up browsing. Some servers may shut down a connection without sending this message.",
  },
  {
    http: "414 URI Too Long",
    desc: "The URI requested by the client is longer than the server is willing to interpret.",
  },
  {
    http: "415 Unsupported Media Type",
    desc: "The media format of the requested data is not supported by the server, so the server is rejecting the request.",
  },
  {
    http: "418 I'm a teapot",
    desc: "The server refuses the attempt to brew coffee with a teapot.",
  },
  {
    http: "500 Internal Server Error",
    desc: "The server has encountered a situation it does not know how to handle. This error is generic, indicating that the server cannot find a more appropriate 5XX status http to respond with.",
  },
  {
    http: "502 Bad Gateway",
    desc: "This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.",
  },
  {
    http: "503 Service Unavailable",
    desc: "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.",
  },
  {
    http: "504 Gateway Timeout",
    desc: "This error response is given when the server is acting as a gateway and cannot get a response in time.",
  },
  {
    http: "511 Network Authentication Required",
    desc: "Indicates that the client needs to authenticate to gain network access.",
  },
];

export const httpProperties = [
  {
    http: "Safe",
    desc: "An HTTP method is safe if it doesn't alter the state of the server. In other words, a method is safe if it leads to a read-only operation.",
  },
  {
    http: "Idempotent",
    desc: "An HTTP method is idempotent if the intended effect on the server of making a single request is the same as the effect of making several identical requests.",
  },
  {
    http: "Cacheable",
    desc: "A cacheable response is an HTTP response that can be cached, that is stored to be retrieved and used later, saving a new request to the server.",
  },
];

export const httpHeaders = [
  {
    http: "Accept",
    desc: "The Accept header specifies the media types the client is willing to accept, such as application/json or text/html. It helps the server deliver resources in formats that match the client's preferences.",
  },
  {
    http: "User-Agent",
    desc: "The User-Agent header identifies the web browser or client making the request, allowing the server to customize its response based on the client's capabilities. For example, if the User-Agent indicates Chrome, the server may adjust content like CSS to ensure compatibility.",
  },
  {
    http: "Authorization",
    desc: "The Authorization header is used to send the client's credentials, such as a JSON Web Token (JWT), to the server when accessing protected resources. The server verifies these credentials to ensure secure access before returning the requested resource.",
  },
  {
    http: "Content-Type",
    desc: "The Content-Type header specifies the media type of the request body, such as application/json for JSON data. It ensures the server can correctly interpret and process the payload.",
  },
  {
    http: "Cookie",
    desc: "The Cookie header allows the client to send previously stored cookies back to the server, helping associate requests with specific users or sessions. It is essential for personalized experiences, such as maintaining login states or user preferences like language settings.",
  },
  {
    http: "Content-Type",
    desc: "The Content-Type response header, similar to the request header, specifies the type of data being sent from the server to the client. It usually indicates the media type (e.g., text/html, application/json, image/jpeg, audio/mp3) and any optional parameters.",
  },
  {
    http: "Cache-Control",
    desc: "The Cache-Control header manages caching behavior, specifying how long a response can be stored, when it expires, and how it should be validated. For instance, Cache-Control: max-age=3600, public tells the client to cache the response for up to 1 hour and allows public caching.",
  },
  {
    http: "Server",
    desc: "The Server header displays the name and version of the server software that generated the response, such as 'Apache/2.4.10' (Unix) for Apache web servers. It provides information about the server's technology stack but doesn't impact the API's functionality.",
  },
  {
    http: "Set-Cookie",
    desc: "The Set-Cookie header tells the client to store a cookie with specified attributes like name, value, expiration, domain, path, and security settings. The client sends this cookie with future requests to maintain stateful communication and deliver personalized experiences.",
  },
  {
    http: "Content-Length",
    desc: "The Content-Length header indicates the size of the response body in bytes, helping clients prepare for the amount of data they'll receive, enhancing performance by optimizing memory allocation and data processing.",
  },
];