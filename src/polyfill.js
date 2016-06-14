const scripts = document.querySelectorAll('script[type="application/arroba"]');
const promises = [];

for (script of scripts) {
    const src = script.getAttribute("src");

    if (src) {
        var promise = fetch(src).then(function(res) {
            return res.text();
        }).then(function(text) {
            console.info("Fetched from " + src + ": ", text.trim());
        });

        if (script.hasAttribute("async"))
            promise.then(function() { });
        else promises.push(promise);
    } else {
        var text = script.innerText.trim();
        promises.push(new Promise(function(resolve) {
            console.info("Inner text: ", text);
            return text;
        }));
    }
}

Promise.all(promises).then(function() {
    // Welcome to Arroba!
}).catch(reportError);

function reportError(err) {
    console.error("An error occurred while transpiling Arroba: ", err);
}