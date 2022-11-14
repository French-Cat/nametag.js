function nametag(type, host, id, callback, refresh) {
  if (type == "ws") {
    const ws = new WebSocket(host);

    ws.onopen = function() {
      ws.send(JSON.stringify({ id: id }))
    };

    ws.onmessage = function(event) {
      callback(event.data);
    };

    setInterval((() => { ws.send(JSON.stringify({ id: id })) }), refresh)

  } else if (type == "http") {
    fetch(host + "/" + id)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error))
  }

if (document.currentScript.getAttribute('type') == "module") {
  export { nametag }
} else {
  w.nametag = nametag
}
