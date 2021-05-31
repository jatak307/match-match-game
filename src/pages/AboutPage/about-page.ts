import { Page } from '../../core/templates/page';
import './about-page.scss';

export class AboutPage extends Page {
  static TextObject = {
    MainTitle: 'Main Page wq',
  };

  render(): HTMLElement {
    const about: HTMLElement = document.createElement('section');
    about.className = 'wrapper';
    about.innerHTML = `
    <h1>How to play?</h1>
    <div class="content">
      <div class="instruction">
        <div class="step">
          <span class="step-number">1</span>
          <span class="step-descr">Register new player in game</span>
        </div>
        <div class="step">
          <span class="step-number">2</span>
          <span class="step-descr">Configure your game settings</span>
        </div>
        <div class="step">
          <span class="step-number">3</span>
          <span class="step-descr">Start you new game! Remember card positions and match it before times up.</span>
        </div>
      </div>

      <div class="to-start">
        <div class="registr-picture"></div>
        <div class="settings-picture"></div>
        <div class="game-picture"></div>
      </div>
    </div>
    `;
    this.container.append(about);
    return this.container;
  }
}
