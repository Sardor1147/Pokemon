let list = document.getElementById("list");
let result = document.getElementById("input");
result.value = 0;
let renderList = pokemons;

let pokemonsFn = (pokemon) => {
  pokemon.forEach((element) => {
    let item = document.createElement("li");
    item.classList.add("list_item");
    list.appendChild(item);

    let img = document.createElement("img");
    img.classList.add("item__img");
    img.setAttribute("src", element.img);
    item.appendChild(img);

    let head = document.createElement("h4");
    head.classList.add("item_head");
    head.textContent = element.name;
    item.appendChild(head);

    let like = document.createElement("img");
    like.classList.add("item_like");
    like.src = "./images/like.svg";
    like.style.width = "25px";
    like.style.height = "25px";
    item.appendChild(like);

    like.addEventListener("click", () => {
      like.classList.toggle("click");
    });
    like.addEventListener("click", () => {
      if (like.classList == "item_like") {
        result.value = Number(result.value) - 1;
        item.style.backgroundColor = "red";
      } else {
        result.value = Number(result.value) + 1;
        item.style.backgroundColor = "green";
      }
    });
  });
};
pokemonsFn(renderList);
