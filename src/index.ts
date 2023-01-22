import { listItem } from "./components/list-item";
import { addItem } from "./components/add-item";

const rootList = document.querySelector(".root-list");
const rootForm = document.querySelector(".root-form");

if (rootForm && rootList !== null) {
  listItem(rootList);
  addItem(rootForm);
}
