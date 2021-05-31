import { Component } from '../../../core/templates/component';
import { PageIds } from '../../constants';
import './header-component.scss';

type Btns = {
  id: PageIds;
  text: string;
};

const Buttons: Btns[] = [
  {
    id: PageIds.AboutPage,
    text: 'About Game',
  },
  {
    id: PageIds.ScorePage,
    text: 'Best Score',
  },
  {
    id: PageIds.SettingsPage,
    text: 'Game Settings',
  },
];

export class HeaderComponent extends Component {
  renderPageButtons():void {
    const menuWrapper: HTMLElement = document.createElement('nav');
    menuWrapper.className = 'menu-wrapper';
    const menuList: HTMLElement = document.createElement('ul');
    menuList.className = 'menu';

    Buttons.forEach((button, i) => {
      const iconsArr = ['about', 'score', 'settings'];
      const menuItem: HTMLElement = document.createElement('li');
      menuItem.className = 'menu-item ';

      const buttonHTML: HTMLAnchorElement = document.createElement('a');
      buttonHTML.className = 'menu-item-link';
      buttonHTML.href = `#${button.id}`;

      const menuIconImg: HTMLImageElement = document.createElement('img');
      menuIconImg.src = `./icons/${iconsArr[i]}.png`;

      const menuIcon: HTMLElement = document.createElement('div');
      menuIcon.className = 'menu-icon';
      if (button.id === PageIds.ScorePage) {
        menuIcon.style.background = 'none';
      }
      const menuText: HTMLElement = document.createElement('span');
      menuText.innerText = `${button.text}`;

      menuIcon.append(menuIconImg);
      buttonHTML.append(menuIcon);
      buttonHTML.append(menuText);

      menuItem.append(buttonHTML);
      menuList.append(menuItem);
    });

    menuWrapper.append(menuList);
    this.container.append(menuWrapper);
  }

  renderLogo():void {
    const logoWrapper: HTMLElement = document.createElement('div');
    logoWrapper.className = 'logo';
    const logoTextUp: HTMLElement = document.createElement('span');
    logoTextUp.innerText = 'match';
    const logoTextDown: HTMLElement = document.createElement('span');
    logoTextDown.innerText = 'match';
    logoWrapper.append(logoTextUp);
    logoWrapper.append(logoTextDown);
    this.container.append(logoWrapper);
  }

  renderRegisterBtn():void {
    const registerBtn: HTMLElement = document.createElement('button');
    registerBtn.id = 'check-in';
    registerBtn.className = 'header-btn';
    registerBtn.innerText = 'register new player';
    this.container.append(registerBtn);
  }

  render(): HTMLElement {
    this.renderLogo();
    this.renderPageButtons();
    this.renderRegisterBtn();
    return this.container;
  }
}
