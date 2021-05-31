import { Page } from '../../core/templates/page';
import './score-page.scss';

export class ScorePage extends Page {
  static TextObject = {
    MainTitle: 'dest score',
  };

  render(): HTMLElement {
    const scoreHTML: HTMLElement = document.createElement('section');
    scoreHTML.className = 'wrapper';
    scoreHTML.innerHTML = `
    <h1>Best players</h1>
   
    `;
    this.container.append(scoreHTML);
    return this.container;
  }
}
