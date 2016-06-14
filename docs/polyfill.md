# Polyfill
arroba2js comes bundled with a polyfill that you can use to transpile
Arroba code on the fly.

**NOT for production use!!!**

It's easy to include the polyfill in your code, just place it at the
bottom of your body tag, or after every other script.

It will transpile both inline scripts, and scripts with a `src`
attribute. Scripts marked as `async` will be transpiled asynchronously.

**Don't forget to include a `type="application/arroba"` attribute on
your scripts, or else they won't be transpiled.**

It is recommended to write your code so that it has a single entry
point, so that you only have to worry about one file being imported,
eliminating the chance of scripts being transpiled out of order.

```html
<body>
    ...
    <script type="application/arroba">
        print("Hello, world!");
    </script>
    <script src="src/app.arr" type="application/arroba"></script>
    <script src="node_modules/arroba2js/lib/polyfill.js"></script>
</body>
```