import { Page } from '../../core/templates/page';

export const enum ErrorTypes {
  Error_404 = 404,
}

export class NotFoundPage extends Page {
  private errorType: ErrorTypes | string;

  static TextObject: { [prop: string]: string } = {
    404: 'Error! The page was not found.',
  };

  constructor(id: string, errorType: ErrorTypes | string) {
    super(id);
    this.errorType = errorType;
  }

  render():HTMLElement {
    const title: HTMLHeadingElement = this.createHeaderTitle(NotFoundPage.TextObject[this.errorType]);
    this.container.append(title);
    return this.container;
  }
}
