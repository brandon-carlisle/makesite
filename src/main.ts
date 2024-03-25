import "./style.css";
import { Component } from "./component.ts";

const root = document.getElementById("root")!;

const Title = new Component("h1", null, ["title"]).render({
  children: "My site",
});

const SubTitle = new Component("p", null, ["sub-title"]).render({
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
});

new Component("section", root, ["hero", "is-primary"]).render({
  children: new Component("div", null, ["hero-body"]).render({
    children: [Title, SubTitle],
  }),
});

new Component("main", root, ["section"]).render({
  children: new Component("button", null, ["button"]).render({
    children: "Click me!",
  }),
});
