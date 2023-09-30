async function handleRequest(request) {
    const headdef = "<!doctype html>\n <head><title>ifconfig</title></head>\n";
    const clientIP = request.headers.get('CF-Connecting-IP');
    const landing = headdef + " Current IP Address: " + clientIP;
    
    return new Response(landing, {
      headers: {
        "content-Type": "text/html",
        "Cache-Control": "no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate"
      }
    })
        
  }
  
  addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });