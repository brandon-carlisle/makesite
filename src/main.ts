import "./style.css";
import { Component } from "./component.ts";

const root = document.getElementById("root")!;

const header = new Component("header", root).render({
  children: new Component("h1", null).render({ children: "My title!!!" }),
});

new Component("button", header).render({ children: "Click me" });
