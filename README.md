# arroba2js
The official Arroba -> JS transpiler.

* [Project Philosophy](philosophy.md)
* [Documentation](docs/index.md)

# Goals
* Transpile 100% of Arroba's *syntax* into ES5
* Add new features to Arroba to allow flexibility without hassle
* Polyfill the Arroba interpreter's API's for Node.js
* *Compile* 100% of Arroba's syntax into performant JavaScript

# New Syntax

### Named Functions, Keywords "function" and "return"

```js
// In case you're feeling nostalgic and missing JS
function foo(x) {
    return x * 2;
}

// However, you can still use the old, shorter syntax.

local:foo = fn(x) {
    ret x * 2
}

fn foo(x) => x * 2;
```

### Element Literals
These return instances of `extern`. More on `extern` below.

```arroba

fn renderUl(items) {
    ret (
        <ul>
            {items.all(item => <li>{item}</li>)}
        </ul>
    );
}
```

### "extern" Keyword
The `extern` keyword allows you flexibility with your coding. 
Typically, the following code would throw an error:

```arroba
local:foo = any();
print(foo.bar.baz); // Error - foo.bar is null
```

However, `extern` is a way to tell the transpiler, "Hey, I'm going to
invoke this code, and I know how to use it. You can trust me." It is
perfect for JS transpilation, as it disables the aforementioned null
checks on data.

Unfortunately, if you mess up, or make a typo, that's on you.

```arroba
/// Declares 'foo' as an external symbol.
// Perhaps you defined it in JS code before running this Arroba.

extern("foo");
print(foo.bar.baz); // No compiler error anymore
```

You can also use `extern` to create aliases for external symbols.

```arroba
local:$ = extern("window.document.querySelectorAll")

$("input").all(fn(input) {
    input.value = "Surprise!"
})
```

### Finally, a "null" literal

### Decorators?

```arroba
Reflection = import("<reflection>")

fn myDecorator(target) {
    print("Attached to ${target}!")
}

@myDecorator local:foo = 3

@myDecorator fn MyClass() {
    local:this = any()
    
    this.bar = "baz"
    
    ret this
}

// Easy to query
fn isDecorated(x) => Reflection.hasDecorator(x, myDecorator)
```