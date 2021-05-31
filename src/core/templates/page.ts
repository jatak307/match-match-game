function createHeaderTitle(text: string): HTMLHeadingElement {
  const headerTitle = document.createElement('h1');
  headerTitle.innerText = text;
  return headerTitle;
}

export abstract class Page {
  protected container: HTMLElement;

  private headerTitle: HTMLHeadingElement | null;

  static TextObject = {};

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.headerTitle = null;
  }

  protected createHeaderTitle(text: string): HTMLHeadingElement {
    this.headerTitle = document.createElement('h1');
    this.headerTitle.innerText = text;
    return this.headerTitle;
  }

  render(): HTMLElement {
    return this.container;
  }
}
