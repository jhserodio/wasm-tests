(module
  (global $g (import "js" "global") (mut i32))
  (func (export "getGlobal") (result i32)
    (global.get $g))
  (func (export "add")
    (global.set $g
      (i32.add (global.get $g) (i32.const 10))))
)