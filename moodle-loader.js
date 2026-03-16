(function () {

    if (document.body.id !== "page-site-index") return;
    if (!document.body.classList.contains("notloggedin")) return;

    const base = "https://cdn.jsdelivr.net/gh/kimminh199/rikai-assets@latest/";

    /* FIX BASE PATH */

    const baseTag = document.createElement("base");
    baseTag.href = base;
    document.head.appendChild(baseTag);


    /* LOAD CSS */

    const styles = [
        "css/font-awesome-all.css",
        "css/flaticon.css",
        "css/owl.css",
        "css/bootstrap.css",
        "css/jquery.fancybox.min.css",
        "css/animate.css",
        "css/nice-select.css",
        "css/odometer.css",
        "css/elpath.css",
        "css/rtl.css",
        "css/style.css",
        "css/module-css/header.css",
        "css/module-css/banner.css",
        "css/module-css/about.css",
        "css/module-css/service.css",
        "css/module-css/skills.css",
        "css/module-css/portfolio.css",
        "css/module-css/testimonial.css",
        "css/module-css/pricing.css",
        "css/module-css/news.css",
        "css/module-css/subscribe.css",
        "css/module-css/footer.css",
        "css/responsive.css"
    ];

    styles.forEach(file => {
        let l = document.createElement("link");
        l.rel = "stylesheet";
        l.href = base + file;
        document.head.appendChild(l);
    });


    /* LOAD HTML */

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