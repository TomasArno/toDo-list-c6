import { state } from "../../state";

export function listItem(container: Element) {
  const lastState = state.getState().list;

  function render(nombre?) {
    console.log(nombre);

    const list = state.getState().list;
    const div = document.createElement("div");
    div.classList.add("list-element");
    div.innerHTML = `
    <input type="checkbox" class="list__checkbox"></input>
    <h2 class="list__content">${nombre[nombre.length - 1]}</h2>
    `;
    container.appendChild(div);
  }

  state.subscribe(() => {
    const newState = state.getState().list;
    render(newState);
  });
}
