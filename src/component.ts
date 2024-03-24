export class Component {
  el: keyof HTMLElementTagNameMap;
  content: string;
  parent: HTMLElement;

  constructor(
    el: keyof HTMLElementTagNameMap,
    content: string,
    parent: HTMLElement
  ) {
    this.el = el;
    this.content = content;
    this.parent = parent;
  }

  render() {
    const elementToRender = document.createElement(this.el);
    elementToRender.textContent = this.content;
    this.parent.appendChild(elementToRender);
  }
}
