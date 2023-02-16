var a = function() {
  window.document.body.style.background = '#17992a'
}
a();

window.parent.postMessage(JSON.stringify({
  from: 'auth',
  event: 'close',
  code: 1
}), '*')