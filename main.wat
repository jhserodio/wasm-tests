(module
  (table 2 anyfunc)
  (func $f1 (result i32)
    i32.const 42)
  (func $f2 (result i32)
    i32.const 1234)
  (elem (i32.const 0) $f1 $f2)
  (type $return_i32 (func (result i32)))
  (func (export "call_by_index") (param $i i32) (result i32)
    local.get $i
    call_indirect (type $return_i32))
)
