fetch('./main.wasm')
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes))
    .then(results => {
        instance = results.instance;

        console.log("global with mut : ", instance.exports.call_by_index(0))
        console.log("global with mut : ", instance.exports.call_by_index(1))
        console.log("global with mut : ", instance.exports.call_by_index(2))
    }).catch(console.error);
  
  
