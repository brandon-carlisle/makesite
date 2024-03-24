export class Component {
  el: string;
  content: string;

  constructor(el: string, content: string) {
    this.el = el;
    this.content = content;
  }

  render() {
    return `<${this.el}>${this.content}</${this.el}>`;
  }
}
