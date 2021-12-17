import"./style.6aa822db.js";import{a as e}from"./vendor.a6cc7faa.js";class t extends HTMLElement{constructor(){super(),this.links=[{name:"Home",href:"home.html",active:this.checkPathname("index.html")},{name:"Films",href:"films.html",active:this.checkPathname("films.html")},{name:"Collections",href:"collections.html",active:this.checkPathname("collections.html")}]}checkPathname(e){return window.location.pathname.split("/")[1]===e}connectedCallback(){this.innerHTML=`\n      <header class="header">\n        <img class="header__logo" src="/CodersCamp2021.Project.Web-Development-Basics/assets/logo.e534eb18.svg" height="60">\n        <nav class="header__nav">\n          <ul class="header__nav-list">\n            ${this.links.map((e=>`<li class="header__nav-item ${e.active?"header__nav-item--active":""}">\n                    <a class="header__nav-link" href="${e.href}">${e.name}\n                  </li>`)).join("")}\n          </ul>\n        </nav>\n      </header>\n    `}}customElements.define("header-component",t);class a extends HTMLElement{connectedCallback(){this.innerHTML='\n        <footer class="footer">\n          <div class="footer__nav-link">\n              <a href="https://www.coderscamp.edu.pl/" target="_blank">\n                <img class="footer__logo" src="/CodersCamp2021.Project.Web-Development-Basics/assets/CodersCamp.731b2d0a.png" alt="coderscamp-logo">\n              </a>\n              <a href="https://github.com/mcwiekala/CodersCamp2021.Project.Web-Development-Basics" target="_blank">\n                <img class="footer__logo" src="/CodersCamp2021.Project.Web-Development-Basics/assets/GitHub.1a0dfbed.png" alt="github-logo">\n              </a>\n          </div>\n        </footer>\n      '}}customElements.define("footer-component",a);const s=e.create({baseURL:"http://www.omdbapi.com/"});["tt0816692","tt0103064","tt1675434","tt0910970","tt4633694","tt1675434","tt0078748","tt1446714","tt3896198","tt1160419"].forEach((async e=>{const t=await s.get(`?i=${e}&apikey=46e8c41c`);console.log(t.data)}));