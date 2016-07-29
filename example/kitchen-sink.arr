local:one = 1
local:two = 0.2
three = "3"

fn greet() => "Hello, world!"

local:foo = fn(x) {
    ret x * 2
}

fn main() {
  local:six = foo(4)
  "Hello, world!" -> print
  ret 0
}

main();
