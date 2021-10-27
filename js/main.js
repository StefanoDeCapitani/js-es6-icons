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
const colors = ["#9AD5CA", "#ACDDE7", "#ADB9E3", "#A379C9", "#B744B8"];

const types = getIconTypes(icons);
icons.forEach((icon) => (icon.color = colors[types.indexOf(icon.type)]));

const main = document.querySelector("main");
const select = document.querySelector("#select-category");

populateSelectOptions(types);
select.addEventListener("change", displaySelectedTypes);
displaySelectedTypes.call(select);

function getIconTypes(icons) {
  return icons.map((icon) => icon.type).reduce(this.deleteDoubles, []);
}

function deleteDoubles(accumulator, current) {
  if (!accumulator.includes(current)) {
    accumulator.push(current);
  }
  return accumulator;
}

function populateSelectOptions(types) {
  types.forEach((type) => displayOption(type));
}

function displayOption(type) {
  const option = document.createElement("option");
  option.textContent = type;
  option.value = type;
  select.append(option);
}

function displaySelectedTypes() {
  const selectedIcons =
    this.value === "all"
      ? icons
      : icons.filter((icon) => icon.type === this.value);
  const cards = generateCards(selectedIcons);
  displayInMain(cards);
}

function generateCards(selectedIcons) {
  return selectedIcons.map((icon) => createCard(icon));
}

function createCard(icon) {
  const card = document.createElement("div");
  card.classList.add("card");
  const iconImage = document.createElement("i");
  iconImage.className = getCompleteFontAwesomeClass(icon);
  iconImage.style.color = icon.color;
  const name = document.createElement("div");
  name.textContent = icon.name;
  card.append(iconImage, name);
  return card;
}

function getCompleteFontAwesomeClass(icon) {
  return icon.family + " " + icon.prefix + icon.name;
}

function displayInMain(cards) {
  main.textContent = "";
  cards.forEach((card) => main.append(card));
}
