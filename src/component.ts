export class Component {
  type: keyof HTMLElementTagNameMap;
  parent: HTMLElement | null;

  constructor(type: keyof HTMLElementTagNameMap, parent: HTMLElement | null) {
    this.type = type;
    this.parent = parent;
  }

  render({ children }: { children: HTMLElement | string | null }) {
    const createdElement = document.createElement(this.type);

    if (!this.parent) {
      if (!children) {
        return createdElement;
      }

      if (typeof children === "string") {
        const textNode = document.createTextNode(children);
        createdElement.appendChild(textNode);
        return createdElement;
      }

      createdElement.appendChild(children);
      return createdElement;
    }

    this.parent.appendChild(createdElement);

    if (!children) {
      return createdElement;
    }

    if (typeof children === "string") {
      const textNode = document.createTextNode(children);
      createdElement.appendChild(textNode);
      return createdElement;
    }

    createdElement.appendChild(children);
    return createdElement;
  }
}
