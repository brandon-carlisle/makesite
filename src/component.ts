type TChildren = HTMLElement[] | HTMLElement | string[] | string | null;

export class Component {
  private type: keyof HTMLElementTagNameMap;
  private parent: HTMLElement | null;
  private classNames: string[] | null = null;

  constructor(
    type: keyof HTMLElementTagNameMap,
    parent: HTMLElement | null,
    classNames: string[] | null = null
  ) {
    this.type = type;
    this.parent = parent;
    this.classNames = classNames;
  }

  render({ children }: { children: TChildren }) {
    const createdElement = document.createElement(this.type);
    this.applyClassNames(createdElement);
    this.appendToParent(createdElement);

    if (children) {
      this.handleChildren(createdElement, children);
    }

    return createdElement;
  }

  private applyClassNames(element: HTMLElement) {
    if (this.classNames) {
      this.classNames.forEach((className) => element.classList.add(className));
    }
  }

  private appendToParent(element: HTMLElement) {
    if (this.parent) {
      this.parent.appendChild(element);
    }
  }

  private handleChildren(element: HTMLElement, children: TChildren) {
    if (Array.isArray(children)) {
      children.forEach((child) => {
        if (child !== null) {
          this.appendChild(element, child);
        }
      });
    } else if (children !== null) {
      this.appendChild(element, children);
    }
  }

  private appendChild(element: HTMLElement, child: HTMLElement | string) {
    if (typeof child === "string") {
      const textNode = document.createTextNode(child);
      element.appendChild(textNode);
    } else {
      element.appendChild(child);
    }
  }
}
