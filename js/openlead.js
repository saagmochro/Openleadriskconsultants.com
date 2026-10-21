(function () {
    "use strict";

    const page = document.body.dataset.page || "home";
    const pageLoader = document.createElement("div");
    pageLoader.className = "page-loader";
    pageLoader.setAttribute("role", "status");
    pageLoader.setAttribute("aria-live", "polite");
    pageLoader.innerHTML = '<span class="page-loader-mark" aria-hidden="true"></span><span>Loading OpenLead</span>';
    document.body.classList.add("page-loading");
    document.body.appendChild(pageLoader);

    let loaderDismissed = false;
    const dismissPageLoader = () => {
        if (loaderDismissed) return;
        loaderDismissed = true;
        document.body.classList.remove("page-loading");
        pageLoader.classList.add("is-hidden");
        window.setTimeout(() => pageLoader.remove(), 450);
    };

    if (document.readyState === "complete") {
        window.requestAnimationFrame(dismissPageLoader);
    } else {
        window.addEventListener("load", dismissPageLoader, { once: true });
        window.setTimeout(dismissPageLoader, 8000);
    }

    const navItems = [
        { key: "home", label: "Home", href: "index.html" },
        { key: "about", label: "About", href: "about.html" },
        { key: "security", label: "Security", href: "service.html" },
        { key: "resilience", label: "Resilience", href: "resilience.html" },
        { key: "leadership", label: "Leadership", href: "leadership.html" },
        { key: "training", label: "Training", href: "training.html" },
        { key: "partnerships", label: "Partnerships", href: "partnerships.html" },
        { key: "resources", label: "Resources", href: "blog.html" },
        { key: "contact", label: "Contact", href: "contact.html" }
    ];

    const headerHost = document.querySelector("[data-site-header]");
    if (headerHost) {
        headerHost.innerHTML = `
            <div class="utility-bar"><div class="container utility-inner">
                <span>Business Solutions &amp; Risk Management Consultancy</span>
                <span>Kenya <span aria-hidden="true">&middot;</span> Security <span aria-hidden="true">&middot;</span> Resilience <span aria-hidden="true">&middot;</span> Leadership</span>
            </div></div>
            <nav class="navbar navbar-expand-xl navbar-light bg-white shadow-sm" aria-label="Main navigation">
                <div class="container-fluid px-lg-5">
                    <a class="navbar-brand brand-lockup" href="index.html" aria-label="OpenLead Risk Consultants home">
                        <span class="brand-logo"><img src="img/Openlead%20logo.jpeg" alt="OpenLead Risk Consultants official logo" width="72" height="72"></span>
                        <span class="brand-name"><strong>OPENLEAD</strong><small>RISK CONSULTANTS</small></span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#openleadNavigation" aria-controls="openleadNavigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="openleadNavigation">
                        <div class="navbar-nav ms-auto align-items-lg-center">
                            ${navItems.map(item => `<a class="nav-item nav-link${page === item.key ? " active" : ""}"${page === item.key ? ' aria-current="page"' : ""} href="${item.href}">${item.label}</a>`).join("")}
                            <a class="btn btn-primary nav-consult ms-lg-3" href="contact.html">Request a consultation</a>
                        </div>
                    </div>
                </div>
            </nav>`;
    }

    const footerHost = document.querySelector("[data-site-footer]");
    if (footerHost) {
        footerHost.innerHTML = `
            <footer class="site-footer">
                <div class="container py-5">
                    <div class="row g-4 align-items-start">
                        <div class="col-lg-5">
                            <a class="footer-brand" href="index.html"><img src="img/Openlead%20logo.jpeg" alt="OpenLead Risk Consultants official logo" width="80" height="80" loading="lazy"><span><strong>OPENLEAD</strong><small>RISK CONSULTANTS</small></span></a>
                            <p class="footer-intro mt-3">Business Solutions &amp; Risk Management Consultancy</p>
                        </div>
                        <div class="col-6 col-lg-3">
                            <h2 class="footer-heading">Explore</h2>
                            <ul class="footer-links">${navItems.map(item => `<li><a href="${item.href}">${item.label}</a></li>`).join("")}</ul>
                        </div>
                        <div class="col-6 col-lg-4">
                            <h2 class="footer-heading">Connect</h2>
                            <p>Central Church of the Nazarene<br>Ngong Road, Nairobi, Kenya</p>
                            <p><a href="mailto:info@openleadriskconsultants.com">info@openleadriskconsultants.com</a></p>
                            <p>Phone / WhatsApp:<br><a href="tel:+254740204355">0740 204355</a> / <a href="tel:+254117239095">0117 239095</a></p>
                            <a class="footer-cta" href="contact.html">Discuss your organisational needs <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom"><div class="container d-flex flex-column flex-md-row justify-content-between gap-2">
                    <span>&copy; ${new Date().getFullYear()} OpenLead Risk Consultants. All rights reserved.</span>
                    <span>Designed by <a class="designer-credit" href="https://wa.me/254112157020" target="_blank" rel="noopener noreferrer" aria-label="Contact G on WhatsApp">G</a></span>
                </div></div>
            </footer>`;
    }

            const whatsapp = document.createElement("a");
            whatsapp.className = "whatsapp-float";
            whatsapp.href = "https://wa.me/254740204355";
            whatsapp.target = "_blank";
            whatsapp.rel = "noopener noreferrer";
            whatsapp.setAttribute("aria-label", "Chat with OpenLead Risk Consultants on WhatsApp");
            whatsapp.title = "Chat with us on WhatsApp";
            whatsapp.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16.04 3C8.9 3 3.1 8.78 3.1 15.9c0 2.27.6 4.48 1.74 6.43L3 29l6.85-1.79a13 13 0 0 0 6.18 1.57h.01c7.13 0 12.93-5.79 12.94-12.91A12.85 12.85 0 0 0 25.2 6.7 12.85 12.85 0 0 0 16.04 3Zm0 23.58h-.01c-1.87 0-3.7-.5-5.3-1.45l-.38-.23-4.07 1.07 1.08-3.97-.25-.4a10.7 10.7 0 0 1-1.64-5.7c0-5.88 4.79-10.66 10.68-10.66a10.6 10.6 0 0 1 7.55 3.13 10.6 10.6 0 0 1 3.12 7.56c0 5.88-4.79 10.65-10.68 10.65Zm5.86-7.98c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.84-1.59-1.88-1.78-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.56-.08-.16-.73-1.75-1-2.39-.26-.62-.53-.53-.73-.54l-.62-.01c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.59 1.16 3.12 1.32 3.34.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.1 1.9-.78 2.17-1.54.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.62-.37Z"/></svg><span>WhatsApp</span>';
            document.body.appendChild(whatsapp);

    const year = document.querySelector("[data-current-year]");
    if (year) year.textContent = new Date().getFullYear();

    document.querySelectorAll(".page-hero > .container, .home-hero > .container").forEach(hero => {
        hero.classList.add("hero-enter");
    });

    const revealElements = document.querySelectorAll(
        "main .content-section > .container > .section-heading, " +
        "main .content-section > .container > .row > [class*='col-'], " +
        "main .framework-step, main > .cta-band .container, " +
        ".site-footer .row > [class*='col-']"
    );
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if ("IntersectionObserver" in window && !prefersReducedMotion) {
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

        revealElements.forEach(element => {
            element.classList.add("scroll-reveal");
            const siblingIndex = Array.prototype.indexOf.call(element.parentElement.children, element);
            element.style.setProperty("--reveal-delay", `${(siblingIndex % 4) * 90}ms`);

            if (element.matches("main .framework-step")) {
                element.classList.add("scroll-reveal--zoom");
            } else if (element.matches("main .content-section > .container > .section-heading")) {
                element.classList.add("scroll-reveal--soft");
            } else if (element.matches("main .content-section > .container > .row > [class*='col-']")) {
                element.classList.add(siblingIndex % 2 === 0 ? "scroll-reveal--left" : "scroll-reveal--right");
            } else if (element.matches("main > .cta-band .container")) {
                element.classList.add("scroll-reveal--left");
            }

            revealObserver.observe(element);
        });
    }

    if (!prefersReducedMotion) {
        const scrollProgress = document.createElement("div");
        scrollProgress.className = "scroll-progress";
        scrollProgress.setAttribute("aria-hidden", "true");
        document.body.appendChild(scrollProgress);

        let progressUpdatePending = false;
        const updateScrollProgress = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
            scrollProgress.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
            progressUpdatePending = false;
        };

        window.addEventListener("scroll", () => {
            if (!progressUpdatePending) {
                progressUpdatePending = true;
                window.requestAnimationFrame(updateScrollProgress);
            }
        }, { passive: true });
        window.addEventListener("resize", updateScrollProgress);
        updateScrollProgress();
    }
}());
