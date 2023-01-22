import { state } from "../../state";

export function addItem(container: Element) {
  function render() {
    const form = document.createElement("form");
    form.classList.add("form");
    form.innerHTML = `
    <input class="form__input" placeholder="Nuevo pendiente" type="text" />
    <button class="form__button">+</button>
    `;
    const input = form.querySelector(".form__input");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      state.addItem(input?.value);
    });

    container.appendChild(form);
  }
  render();
}
