import { Page } from '../../core/templates/page';

export class SettingsPage extends Page {
  static TextObject = {
    MainTitle: 'Settings Page',
  };

  render(): HTMLElement {
    const title = this.createHeaderTitle(SettingsPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}
