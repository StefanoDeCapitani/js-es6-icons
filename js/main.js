const icons = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
  },
];

icons.forEach((icon) => {
  icon.getClass = function () {
    return this.family + " " + this.prefix + this.name;
  };
});

const main = document.querySelector("main");
const filter = document.querySelector("#select-category");
filter.addEventListener("change", displaySelectedTypes);

displayIconCards(icons);
populateFilterOptions(icons);

function populateFilterOptions(icons) {
  const types = getIconTypes(icons);
  displaySelectOptions(types);
}

function getIconTypes(icons) {
  return icons.map((icon) => icon.type).reduce(deleteDoubles, []);
}

function deleteDoubles(accomulator, current) {
  if (!accomulator.includes(current)) {
    accomulator.push(current);
  }
  return accomulator;
}

function displaySelectOptions(types) {
  types.forEach((type) => displayOption(type));
}

function displayOption(type) {
  const option = document.createElement("option");
  option.textContent = type;
  option.value = type;
  filter.append(option);
}

function displayIconCards(icons) {
  main.textContent = "";
  getIconCardsArray(icons).forEach((icon) => main.append(icon));
}

function getIconCardsArray(icons) {
  return icons.map((icon) => getIconCard(icon));
}

function getIconCard(icon) {
  const card = document.createElement("div");
  card.classList.add("card");
  const iconImage = document.createElement("i");
  iconImage.className = icon.getClass();
  const name = document.createElement("div");
  name.textContent = icon.name;
  card.append(iconImage, name);
  return card;
}

function displaySelectedTypes() {
  const iconsFittingSelection =
    this.value === "all" ? icons : getFilteredIcons(this.value);
  displayIconCards(iconsFittingSelection);
}

function getFilteredIcons(type) {
  return icons.filter((icon) => icon.type === type);
}
