const global = new WebAssembly.Global({
    value: 'i32',
    mutable: true,
}, 0)


fetch('./main.wasm')
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, { js: { global }}))
    .then(results => {
        instance = results.instance;
        console.log("global : ", global.value)

        global.value = 31;
        console.log("global with mut : ", global.value)

        instance.exports.add();
        console.log("global with add: ", global.value)

        global.value = 5;
        const result = instance.exports.add();
        console.log("global with mut & add: ", global.value)
    }).catch(console.error);
  
  