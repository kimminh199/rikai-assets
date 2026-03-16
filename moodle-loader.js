(function () {

    if (document.body.id !== "page-site-index") return;
    if (!document.body.classList.contains("notloggedin")) return;

    const base = "https://cdn.jsdelivr.net/gh/kimminh199/rikai-assets@latest/";

    /* LOAD CSS */

    const styles = [
        "css/bootstrap.css",
        "css/style.css",
        "css/responsive.css",
        "css/font-awesome-all.css",
        "css/flaticon.css",
        "css/owl.css",
        "css/animate.css",
        "css/nice-select.css",
        "css/odometer.css"
    ];

    styles.forEach(file => {
        let l = document.createElement("link");
        l.rel = "stylesheet";
        l.href = base + file;
        document.head.appendChild(l);
    });


    /* LOAD LANDING PAGE */

    fetch(base + "index.html")
        .then(res => res.text())
        .then(html => {

            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");

            let wrapper = doc.querySelector(".boxed_wrapper");

            document.body.prepend(wrapper);

            /* LOAD JS */

            const scripts = [
                "js/jquery.js",
                "js/bootstrap.min.js",
                "js/owl.js",
                "js/wow.js",
                "js/validation.js",
                "js/jquery.fancybox.js",
                "js/appear.js",
                "js/isotope.js",
                "js/parallax-scroll.js",
                "js/jquery.nice-select.min.js",
                "js/scrolltop.min.js",
                "js/odometer.js",
                "js/script.js"
            ];

            scripts.forEach(file => {
                let s = document.createElement("script");
                s.src = base + file;
                document.body.appendChild(s);
            });

        });

})();