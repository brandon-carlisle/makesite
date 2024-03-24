import { Component } from "./component.ts";

const root = document.getElementById("root")!;

const testDiv = new Component("div", "hello, world", root);
testDiv.render();
