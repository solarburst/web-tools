import "./styles/style.scss";
import { drawItem } from "./js/drawItem.js";
import { content } from "./js/content";

const gallery = document.getElementById("gallery");

content.map((item) => gallery.appendChild(drawItem(item)));
