import logoImage from '../../images/logo.svg';

class Header extends HTMLElement {
  constructor() {
    super();

    this.links = [
      {
        name: 'Home',
        href: 'home.html',
        active: this.checkPathname('index.html'),
      },
      {
        name: 'Films',
        href: 'films.html',
        active: this.checkPathname('films.html'),
      },
      {
        name: 'Collections',
        href: 'collections.html',
        active: this.checkPathname('collections.html'),
      },
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  checkPathname(path) {
    const pathname = window.location.pathname.split('/');
    return pathname[1] === path;
  }

  /* eslint-disable */
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <img class="header__logo" src="${logoImage}" height="60">
        <nav class="header__nav">
          <ul class="header__nav-list">
            ${this.links
              .map(
                (link) =>
                  `<li class="header__nav-item ${
                    link.active ? 'header__nav-item--active' : ''
                  }">
                    <a class="header__nav-link" href="${link.href}">${link.name}
                  </li>`
              )
              .join('')}
          </ul>
        </nav>
      </header>
    `;
  }
  /* eslint-disable */
}

customElements.define('header-component', Header);

export default Header;