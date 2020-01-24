(module
  (import "console" "log" (func $log (param i32 i32)))
  (import "js" "mem" (memory 1))
  (data (i32.const 0) "JHSerodio Carambolas quadradonas never die")
  (func (export "writeName")
    i32.const 0 ;; offset0
    i32.const 42 ;; offset2
    call $log))

