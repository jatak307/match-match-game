import { Page } from '../../core/templates/page';
import { AboutPage } from '../AboutPage/about-page';
import { ScorePage } from '../ScorePage/score-page';
import { SettingsPage } from '../SettingsPage/settings-page';
import { PageIds } from '../../shared/constants';
import { HeaderComponent } from '../../shared/components/HeaderComponent/header-component';
import { ErrorTypes, NotFoundPage } from '../NotFoundPage/not-found-page';

// function initRoutes() {
//   let hash: string;
//   window.addEventListener('hashchange', () => {
//     hash = window.location.hash.slice(1);
//     // app.renderNewPage(hash);
//     return hash;
//   });
// }

export class App {
  private static container: HTMLElement = document.body;

  private static defaultPageId = 'current-page';

  private initialPage: AboutPage;

  private header: HeaderComponent;

  private hash: string |null;

  static renderNewPage(idPage: string):void {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.AboutPage) {
      page = new AboutPage(idPage);
    } else if (idPage === PageIds.SettingsPage) {
      page = new SettingsPage(idPage);
    } else if (idPage === PageIds.ScorePage) {
      page = new ScorePage(idPage);
    } else {
      page = new NotFoundPage(idPage, ErrorTypes.Error_404);
    }

    if (page) {
      const pageHTML: HTMLElement = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  constructor() {
    this.initialPage = new AboutPage(PageIds.AboutPage);
    this.header = new HeaderComponent('header', 'header');
    this.hash = null;
  }

  initRoutes():void {
    window.addEventListener('hashchange', () => {
      this.hash = window.location.hash.slice(1);
      App.renderNewPage(this.hash);
    });
  }

  run():void {
    App.container.appendChild(this.header.render());
    App.renderNewPage(PageIds.AboutPage);
    this.initRoutes();
  }
}
