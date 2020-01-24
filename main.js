function consoleLogString(offset, length) {
  var bytes = new Uint8Array(memory.buffer, offset, length);
  var string = new TextDecoder('utf8').decode(bytes);
  console.log(string);
}


var memory = new WebAssembly.Memory({ initial:1 });

var importObject = { console: { log: consoleLogString }, js: { mem: memory } }

fetch('./main.wasm')
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, importObject))
    .then(results => {
      writeName = results.instance.exports.writeName;
      writeName();
    }).catch(console.error);
  
  
