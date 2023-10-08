import('/groxy/injects.js');

function P() {
    let t = document.querySelector(".js-header");
    document.querySelectorAll(".js-desktop-menu-hover").forEach(c=>{
        c.addEventListener("mouseenter", a=>{
            let u = a.target
              , s = document.querySelector(".forced-open");
            s && s !== c && (s.blur(),
            s.classList.remove("forced-open")),
            u.focus(),
            u.blur()
        }
        );
        let r = a=>{
            var d, h;
            let u = a.target
              , s = u == null ? void 0 : u.classList.contains("forced-open")
              , n = a.currentTarget;
            s ? (n.removeEventListener("blur", ()=>n.classList.remove("forced-open")),
            n.classList.remove("forced-open"),
            n.classList.add("forced-closed"),
            n.blur(),
            (d = n == null ? void 0 : n.parentNode) == null || d.addEventListener("mouseout", ()=>{
                n.classList.remove("forced-closed")
            }
            )) : (n.classList.remove("forced-closed"),
            n.classList.add("forced-open"),
            n.focus(),
            n.addEventListener("blur", ()=>n.classList.remove("forced-open")),
            (h = n == null ? void 0 : n.parentNode) == null || h.removeEventListener("mouseout", ()=>{
                n.classList.remove("forced-closed")
            }
            ))
        }
        ;
        c.addEventListener("click", r)
    }
    ),
    document.querySelectorAll(".Header-menuItem").forEach(c=>{
        c.addEventListener("keyup", r=>{
            var u;
            let a = r;
            a.key === "Escape" && ((u = a.target) == null || u.blur())
        }
        )
    }
    );
    let i = document.querySelectorAll(".js-headerMenuButton");
    i.forEach(c=>{
        c.addEventListener("click", r=>{
            r.preventDefault();
            let a = t == null ? void 0 : t.classList.contains("is-active");
            a ? g(t) : w(t),
            c.setAttribute("aria-expanded", a ? "true" : "false")
        }
        )
    }
    );
    let l = document.querySelector(".js-scrim");
    l == null || l.addEventListener("click", c=>{
        c.preventDefault(),
        document.querySelectorAll(".go-NavigationDrawer-submenuItem.is-active").forEach(a=>g(a)),
        g(t),
        i.forEach(a=>{
            a.setAttribute("aria-expanded", t != null && t.classList.contains("is-active") ? "true" : "false")
        }
        )
    }
    );
    let m = c=>{
        if (!c)
            return [];
        let r = Array.from(c.querySelectorAll(":scope > .go-NavigationDrawer-nav > .go-NavigationDrawer-list > .go-NavigationDrawer-listItem > a, :scope > .go-NavigationDrawer-nav > .go-NavigationDrawer-list > .go-NavigationDrawer-listItem > .go-Header-socialIcons > a") || [])
          , a = c.querySelector(".go-NavigationDrawer-header > a");
        return a && r.unshift(a),
        r
    }
      , p = c=>{
        if (c)
            return c.classList.contains("go-NavigationDrawer-submenuItem")
    }
      , g = c=>{
        var u, s;
        if (!c)
            return;
        let r = m(c);
        c.classList.remove("is-active");
        let a = (u = c.closest(".go-NavigationDrawer-listItem")) == null ? void 0 : u.querySelector(":scope > a");
        a == null || a.focus(),
        r == null || r.forEach(n=>n == null ? void 0 : n.setAttribute("tabindex", "-1")),
        r && r[0] && (r[0].removeEventListener("keydown", L(c)),
        r[r.length - 1].removeEventListener("keydown", b(c))),
        c === t && i && ((s = i[0]) == null || s.focus())
    }
      , w = c=>{
        let r = m(c);
        c.classList.add("is-active"),
        r.forEach(a=>a.setAttribute("tabindex", "0")),
        r[0].focus(),
        r[0].addEventListener("keydown", L(c)),
        r[r.length - 1].addEventListener("keydown", b(c))
    }
      , L = c=>r=>{
        r.key === "Tab" && r.shiftKey && (r.preventDefault(),
        g(c))
    }
      , b = c=>r=>{
        r.key === "Tab" && !r.shiftKey && (r.preventDefault(),
        g(c))
    }
      , M = c=>{
        var u;
        let r = p(c)
          , a = m(c);
        c.addEventListener("keyup", s=>{
            s.key === "Escape" && g(c)
        }
        ),
        a.forEach(s=>{
            let n = s.closest("li");
            if (n && n.classList.contains("js-mobile-subnav-trigger")) {
                let d = n.querySelector(".go-NavigationDrawer-submenuItem");
                s.addEventListener("click", ()=>{
                    w(d)
                }
                )
            }
        }
        ),
        r && (g(c),
        (u = c == null ? void 0 : c.querySelector(".go-NavigationDrawer-header")) == null || u.addEventListener("click", s=>{
            s.preventDefault(),
            g(c)
        }
        ))
    }
    ;
    document.querySelectorAll(".go-NavigationDrawer").forEach(c=>M(c)),
    g(t)
}
function U() {
    let t = document.querySelector(".js-searchForm")
      , e = document.querySelector(".js-expandSearch")
      , o = t == null ? void 0 : t.querySelector("input")
      , i = document.querySelector(".js-headerLogo")
      , l = document.querySelector(".js-headerMenuButton");
    e == null || e.addEventListener("click", ()=>{
        t == null || t.classList.add("go-SearchForm--expanded"),
        i == null || i.classList.add("go-Header-logo--hidden"),
        l == null || l.classList.add("go-Header-navOpen--hidden"),
        o == null || o.focus()
    }
    ),
    document == null || document.addEventListener("click", m=>{
        t != null && t.contains(m.target) || (t == null || t.classList.remove("go-SearchForm--expanded"),
        i == null || i.classList.remove("go-Header-logo--hidden"),
        l == null || l.classList.remove("go-Header-navOpen--hidden"))
    }
    )
}
var k = class {
    constructor(e) {
        this.el = e;
        this.setActive = e=>{
            this.activeIndex = (e + this.slides.length) % this.slides.length,
            this.el.setAttribute("data-slide-index", String(this.activeIndex));
            for (let o of this.dots)
                o.classList.remove("go-Carousel-dot--active");
            this.dots[this.activeIndex].classList.add("go-Carousel-dot--active");
            for (let o of this.slides)
                o.setAttribute("aria-hidden", "true");
            this.slides[this.activeIndex].removeAttribute("aria-hidden"),
            this.liveRegion.textContent = "Slide " + (this.activeIndex + 1) + " of " + this.slides.length
        }
        ;
        var o;
        this.slides = Array.from(e.querySelectorAll(".go-Carousel-slide")),
        this.dots = [],
        this.liveRegion = document.createElement("div"),
        this.activeIndex = Number((o = e.getAttribute("data-slide-index")) != null ? o : 0),
        this.initSlides(),
        this.initArrows(),
        this.initDots(),
        this.initLiveRegion()
    }
    initSlides() {
        for (let[e,o] of this.slides.entries())
            e !== this.activeIndex && o.setAttribute("aria-hidden", "true")
    }
    initArrows() {
        var o, i;
        let e = document.createElement("ul");
        e.classList.add("go-Carousel-arrows"),
        e.innerHTML = `
      <li>
        <button class="go-Carousel-prevSlide" aria-label="Go to previous slide">
          <img class="go-Icon" height="24" width="24" src="/static/shared/icon/arrow_left_gm_grey_24dp.svg" alt="">
        </button>
      </li>
      <li>
        <button class="go-Carousel-nextSlide" aria-label="Go to next slide">
          <img class="go-Icon" height="24" width="24" src="/static/shared/icon/arrow_right_gm_grey_24dp.svg" alt="">
        </button>
      </li>
    `,
        (o = e.querySelector(".go-Carousel-prevSlide")) == null || o.addEventListener("click", ()=>this.setActive(this.activeIndex - 1)),
        (i = e.querySelector(".go-Carousel-nextSlide")) == null || i.addEventListener("click", ()=>this.setActive(this.activeIndex + 1)),
        this.el.append(e)
    }
    initDots() {
        let e = document.createElement("ul");
        e.classList.add("go-Carousel-dots");
        for (let o = 0; o < this.slides.length; o++) {
            let i = document.createElement("li")
              , l = document.createElement("button");
            l.classList.add("go-Carousel-dot"),
            o === this.activeIndex && l.classList.add("go-Carousel-dot--active"),
            l.innerHTML = `<span class="go-Carousel-obscured">Slide ${o + 1}</span>`,
            l.addEventListener("click", ()=>this.setActive(o)),
            i.append(l),
            e.append(i),
            this.dots.push(l)
        }
        this.el.append(e)
    }
    initLiveRegion() {
        this.liveRegion.setAttribute("aria-live", "polite"),
        this.liveRegion.setAttribute("aria-atomic", "true"),
        this.liveRegion.setAttribute("class", "go-Carousel-obscured"),
        this.liveRegion.textContent = `Slide ${this.activeIndex + 1} of ${this.slides.length}`,
        this.el.appendChild(this.liveRegion)
    }
}
;
var A = class {
    constructor(e) {
        this.el = e;
        var o, i, l, m, p;
        this.data = (o = e.dataset.toCopy) != null ? o : e.innerText,
        !this.data && ((i = e.parentElement) != null && i.classList.contains("go-InputGroup")) && (this.data = (p = this.data || ((m = (l = e.parentElement) == null ? void 0 : l.querySelector("input")) == null ? void 0 : m.value)) != null ? p : ""),
        e.addEventListener("click", g=>this.handleCopyClick(g))
    }
    handleCopyClick(e) {
        e.preventDefault();
        let o = 1e3;
        if (!navigator.clipboard) {
            this.showTooltipText("Unable to copy", o);
            return
        }
        navigator.clipboard.writeText(this.data).then(()=>{
            this.showTooltipText("Copied!", o)
        }
        ).catch(()=>{
            this.showTooltipText("Unable to copy", o)
        }
        )
    }
    showTooltipText(e, o) {
        this.el.setAttribute("data-tooltip", e),
        setTimeout(()=>this.el.setAttribute("data-tooltip", ""), o)
    }
}
;
var x = class {
    constructor(e) {
        this.el = e;
        document.addEventListener("click", o=>{
            this.el.contains(o.target) || this.el.removeAttribute("open")
        }
        )
    }
}
;
var C = class {
    constructor(e) {
        this.el = e;
        this.el.addEventListener("change", o=>{
            let i = o.target
              , l = i.value;
            i.value.startsWith("/") || (l = "/" + l),
            window.location.href = l
        }
        )
    }
}
;
var q = class {
    constructor(e) {
        this.el = e;
        window.dialogPolyfill && window.dialogPolyfill.registerDialog(e),
        this.init()
    }
    init() {
        let e = document.querySelector(`[aria-controls="${this.el.id}"]`);
        e && e.addEventListener("click", ()=>{
            var o;
            this.el.showModal ? this.el.showModal() : this.el.setAttribute("opened", "true"),
            (o = this.el.querySelector("input")) == null || o.focus()
        }
        );
        for (let o of this.el.querySelectorAll("[data-modal-close]"))
            o.addEventListener("click", ()=>{
                this.el.close ? this.el.close() : this.el.removeAttribute("opened")
            }
            )
    }
}
;
function I(t, e, o, i) {
    var l;
    (l = window.dataLayer) != null || (window.dataLayer = []),
    typeof t == "string" ? window.dataLayer.push({
        event: t,
        event_category: e,
        event_action: o,
        event_label: i
    }) : window.dataLayer.push(t)
}
function W(t) {
    var e;
    (e = window.dataLayer) != null || (window.dataLayer = []),
    window.dataLayer.push(t)
}
var O = class {
    constructor() {
        this.handlers = {},
        document.addEventListener("keydown", e=>this.handleKeyPress(e))
    }
    on(e, o, i, l) {
        var m, p;
        return (p = (m = this.handlers)[e]) != null || (m[e] = new Set),
        this.handlers[e].add({
            description: o,
            callback: i,
            ...l
        }),
        this
    }
    handleKeyPress(e) {
        var o;
        for (let i of (o = this.handlers[e.key.toLowerCase()]) != null ? o : new Set) {
            if (i.target && i.target !== e.target)
                return;
            let l = e.target;
            if (!i.target && ((l == null ? void 0 : l.tagName) === "INPUT" || (l == null ? void 0 : l.tagName) === "SELECT" || (l == null ? void 0 : l.tagName) === "TEXTAREA") || l != null && l.isContentEditable || i.withMeta && !(e.ctrlKey || e.metaKey) || !i.withMeta && (e.ctrlKey || e.metaKey))
                return;
            I("keypress", "hotkeys", `${e.key} pressed`, i.description),
            i.callback(e)
        }
    }
}
  , H = new O;
function $() {
    var u;
    let t = document.querySelector(".JumpDialog"), e = t == null ? void 0 : t.querySelector(".JumpDialog-body"), o = t == null ? void 0 : t.querySelector(".JumpDialog-list"), i = t == null ? void 0 : t.querySelector(".JumpDialog-input"), l = document.querySelector(".js-documentation"), m;
    function p() {
        let s = [];
        if (l) {
            for (let n of l.querySelectorAll("[data-kind]"))
                s.push(g(n));
            for (let n of s)
                n.link.addEventListener("click", function() {
                    t == null || t.close()
                });
            return s.sort(function(n, d) {
                return n.lower.localeCompare(d.lower)
            }),
            s
        }
    }
    function g(s) {
        var E;
        let n = document.createElement("a")
          , d = s.getAttribute("id");
        n.setAttribute("href", "#" + d),
        n.setAttribute("tabindex", "-1"),
        n.setAttribute("data-gtmc", "jump to link");
        let h = s.getAttribute("data-kind");
        return {
            link: n,
            name: d != null ? d : "",
            kind: h != null ? h : "",
            lower: (E = d == null ? void 0 : d.toLowerCase()) != null ? E : ""
        }
    }
    let w, L = -1;
    function b(s) {
        for (w = s,
        m || (m = p()),
        M(-1); o != null && o.firstChild; )
            o.firstChild.remove();
        if (s) {
            let n = s.toLowerCase()
              , d = []
              , h = []
              , E = []
              , S = (v,y,T)=>v.name.substring(0, y) + "<b>" + v.name.substring(y, T) + "</b>" + v.name.substring(T);
            for (let v of m != null ? m : []) {
                let y = v.name.toLowerCase();
                if (y === n)
                    v.link.innerHTML = S(v, 0, v.name.length),
                    d.push(v);
                else if (y.startsWith(n))
                    v.link.innerHTML = S(v, 0, s.length),
                    h.push(v);
                else {
                    let T = y.indexOf(n);
                    T > -1 && (v.link.innerHTML = S(v, T, T + s.length),
                    E.push(v))
                }
            }
            for (let v of d.concat(h).concat(E))
                o == null || o.appendChild(v.link)
        } else {
            if (!m || m.length === 0) {
                let n = document.createElement("i");
                n.innerHTML = "There are no symbols on this page.",
                o == null || o.appendChild(n)
            }
            for (let n of m != null ? m : [])
                n.link.innerHTML = n.name + " <i>" + n.kind + "</i>",
                o == null || o.appendChild(n.link)
        }
        e && (e.scrollTop = 0),
        m != null && m.length && o && o.children.length > 0 && M(0)
    }
    function M(s) {
        let n = o == null ? void 0 : o.children;
        if (!(!n || !e)) {
            if (L >= 0 && n[L].classList.remove("JumpDialog-active"),
            s >= n.length && (s = n.length - 1),
            s >= 0) {
                n[s].classList.add("JumpDialog-active");
                let d = n[s].offsetTop - n[0].offsetTop
                  , h = d + n[s].clientHeight;
                d < e.scrollTop ? e.scrollTop = d : h > e.scrollTop + e.clientHeight && (e.scrollTop = h - e.clientHeight)
            }
            L = s
        }
    }
    function c(s) {
        if (L < 0)
            return;
        let n = L + s;
        n < 0 && (n = 0),
        M(n)
    }
    i == null || i.addEventListener("keyup", function() {
        i.value.toUpperCase() != w.toUpperCase() && b(i.value)
    }),
    i == null || i.addEventListener("keydown", function(s) {
        switch (s.which) {
        case 38:
            c(-1),
            s.preventDefault();
            break;
        case 40:
            c(1),
            s.preventDefault();
            break;
        case 13:
            L >= 0 && o && (o.children[L].click(),
            s.preventDefault());
            break
        }
    });
    let r = document.querySelector(".ShortcutsDialog");
    H.on("f", "open jump to modal", s=>{
        var n;
        t != null && t.open || r != null && r.open || (s.preventDefault(),
        i && (i.value = ""),
        (n = t == null ? void 0 : t.showModal) == null || n.call(t),
        i == null || i.focus(),
        b(""))
    }
    ).on("?", "open shortcuts modal", ()=>{
        var s;
        t != null && t.open || r != null && r.open || (s = r == null ? void 0 : r.showModal) == null || s.call(r)
    }
    );
    let a = document.querySelector(".js-jumpToInput");
    a && a.addEventListener("click", ()=>{
        var s;
        i && (i.value = ""),
        b(""),
        !(t != null && t.open || r != null && r.open) && ((s = t == null ? void 0 : t.showModal) == null || s.call(t),
        i == null || i.focus())
    }
    ),
    (u = document.querySelector(".js-openShortcuts")) == null || u.addEventListener("click", ()=>{
        var s;
        (s = r == null ? void 0 : r.showModal) == null || s.call(r)
    }
    )
}
var G = async function() {
    if (!["/about"].includes(window.location.pathname))
        return;
    let e = "h2, h3, h4"
      , o = ".LeftNav a"
      , i = document.querySelector(".LeftNav")
      , l = document.querySelector(".go-Content")
      , m = !1;
    function p(a="", u={}, ...s) {
        if (!a)
            throw new Error("Provide `type` to create document element.");
        let n = Object.assign(document.createElement(a), u);
        return s.forEach(d=>{
            typeof d == "string" ? n.appendChild(document.createTextNode(d)) : Array.isArray(d) ? d.forEach(h=>n.appendChild(h)) : d instanceof HTMLElement && n.appendChild(d)
        }
        ),
        n
    }
    function g() {
        return new Promise((a,u)=>{
            var d, h, E, S, v, y, T, J, R, _;
            let s = []
              , n = [];
            if (!l || !i)
                return u(".SiteContent not found.");
            if (i instanceof HTMLElement && !((d = i == null ? void 0 : i.dataset) != null && d.hydrate))
                return a(!0);
            for (let f of l.querySelectorAll(e))
                if (f instanceof HTMLElement && !((h = f == null ? void 0 : f.dataset) != null && h.ignore))
                    switch (f.tagName) {
                    case "H2":
                        s = [...s, {
                            id: f.id,
                            label: (E = f == null ? void 0 : f.dataset) != null && E.title ? f.dataset.title : (S = f.textContent) != null ? S : ""
                        }];
                        break;
                    case "H3":
                    case "H4":
                        (v = s[s.length - 1]) != null && v.subnav ? s[s.length - 1].subnav && ((_ = s[s.length - 1].subnav) == null || _.push({
                            id: f.id,
                            label: (J = f == null ? void 0 : f.dataset) != null && J.title ? f.dataset.title : (R = f.textContent) != null ? R : ""
                        })) : s[s.length - 1].subnav = [{
                            id: f.id,
                            label: (y = f == null ? void 0 : f.dataset) != null && y.title ? f.dataset.title : (T = f.textContent) != null ? T : ""
                        }];
                        break
                    }
            for (let f of s) {
                let V = p("a", {
                    href: "#" + f.id
                }, p("span", {}, f.label));
                if (n = [...n, V],
                f != null && f.subnav) {
                    let N = [];
                    for (let K of f.subnav) {
                        let z = p("li", {}, p("a", {
                            href: "#" + K.id
                        }, p("img", {
                            src: "/static/frontend/about/dot.svg",
                            width: "5",
                            height: "5"
                        }), p("span", {}, K.label)));
                        N = [...N, z]
                    }
                    let X = p("ul", {
                        className: "LeftSubnav"
                    }, N);
                    n = [...n, X]
                }
            }
            return n.forEach(f=>i.appendChild(f)),
            a(!0)
        }
        )
    }
    function w() {
        return new Promise(a=>{
            if (!document.querySelectorAll(o))
                return a(!0);
            for (let u of document.querySelectorAll(o))
                if (u instanceof HTMLAnchorElement && u.href === location.href) {
                    b(u);
                    break
                }
            a(!0)
        }
        )
    }
    function L() {
        return new Promise(a=>{
            if (!document.querySelectorAll(o))
                return a(!0);
            for (let u of document.querySelectorAll(o))
                u.classList.remove("active");
            a(!0)
        }
        )
    }
    function b(a) {
        a instanceof HTMLAnchorElement && L().then(()=>{
            var s, n, d;
            a.classList.add("active");
            let u = (s = a == null ? void 0 : a.parentNode) == null ? void 0 : s.parentNode;
            u instanceof HTMLElement && ((n = u == null ? void 0 : u.classList) != null && n.contains("LeftSubnav")) && ((d = u.previousElementSibling) == null || d.classList.add("active"))
        }
        )
    }
    function M() {
        c();
        let a = document.querySelector('[href="' + location.hash + '"]');
        a instanceof HTMLAnchorElement && b(a)
    }
    function c() {
        m = !0,
        setTimeout(()=>{
            m = !1
        }
        , 200)
    }
    function r() {
        var a;
        if (window.addEventListener("hashchange", M),
        l != null && l.querySelectorAll(e)) {
            let u = n=>{
                if (!m && Array.isArray(n) && n.length > 0) {
                    for (let d of n)
                        if (d.isIntersecting && d.target instanceof HTMLElement) {
                            let {id: h} = d.target
                              , E = document.querySelector('[href="#' + h + '"]');
                            E instanceof HTMLAnchorElement && b(E);
                            break
                        }
                }
            }
              , s = new IntersectionObserver(u,{
                threshold: 0,
                rootMargin: "0px 0px -50% 0px"
            });
            for (let n of l.querySelectorAll(e))
                n instanceof HTMLElement && !((a = n == null ? void 0 : n.dataset) != null && a.ignore) && s.observe(n)
        }
    }
    try {
        await g(),
        await w(),
        location.hash && c(),
        r()
    } catch (a) {
        a instanceof Error ? console.error(a.message) : console.error(a)
    }
};
window.addEventListener("load", ()=>{
    var t;
    for (let e of document.querySelectorAll(".js-clipboard"))
        new A(e);
    for (let e of document.querySelectorAll(".js-modal"))
        new q(e);
    for (let e of document.querySelectorAll(".js-tooltip"))
        new x(e);
    for (let e of document.querySelectorAll(".js-selectNav"))
        new C(e);
    for (let e of document.querySelectorAll(".js-carousel"))
        new k(e);
    for (let e of document.querySelectorAll(".js-toggleTheme"))
        e.addEventListener("click", ()=>{
            Y()
        }
        );
    (t = document.querySelector(".js-gtmID")) != null && t.dataset.gtmid && window.dataLayer ? W(function() {
        B()
    }) : B(),
    P(),
    U(),
    $(),
    G(),
    Z()
}
);
H.on("/", "focus search", t=>{
    let e = Array.from(document.querySelectorAll(".js-searchFocus")).pop();
    e && !window.navigator.userAgent.includes("Firefox") && (t.preventDefault(),
    e.focus())
}
);
H.on("y", "set canonical url", ()=>{
    var e;
    let t = (e = document.querySelector(".js-canonicalURLPath")) == null ? void 0 : e.dataset.canonicalUrlPath;
    if (t && t !== "") {
        let o = window.location.hash;
        o && (t += o),
        window.history.replaceState(null, "", t)
    }
}
);
(function() {
    I({
        "gtm.start": new Date().getTime(),
        event: "gtm.js"
    })
}
)();
function B() {
    let t = new URLSearchParams(window.location.search)
      , e = t.get("utm_source");
    if (e !== "gopls" && e !== "godoc" && e !== "pkggodev")
        return;
    let o = new URL(window.location.href);
    t.delete("utm_source"),
    o.search = t.toString(),
    window.history.replaceState(null, "", o.toString())
}
function Y() {
    let t = "dark"
      , e = document.documentElement.getAttribute("data-theme");
    e === "dark" ? t = "light" : e === "light" && (t = "auto");
    let o = "";
    location.hostname.endsWith("go.dev") && (o = "domain=.go.dev;"),
    document.documentElement.setAttribute("data-theme", t),
    document.cookie = `prefers-color-scheme=${t};${o}path=/;max-age=31536000;`
}
function Z() {
    if (!document.cookie.match(/cookie-consent=true/)) {
        let e = document.querySelector(".js-cookieNotice")
          , o = e == null ? void 0 : e.querySelector("button");
        e == null || e.classList.add("Cookie-notice--visible"),
        o == null || o.addEventListener("click", ()=>{
            let i = "";
            location.hostname.endsWith("go.dev") && (i = "domain=.go.dev;"),
            document.cookie = `cookie-consent=true;${i}path=/;max-age=31536000`,
            e == null || e.remove()
        }
        )
    }
}
/**
 * @license
 * Copyright 2021 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
/*!
 * @license
 * Copyright 2019-2020 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
/**
 * @license
 * Copyright 2022 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
/**
 * @license
 * Copyright 2020 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
//# sourceMappingURL=frontend.js.map
