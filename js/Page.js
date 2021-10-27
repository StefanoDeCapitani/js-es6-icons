class Page {
  constructor(icons) {
    this.iconsCollection = new IconsCollection(icons);

    this.select = document.querySelector("#select-category");

    this.populateSelectOptions(this.iconsCollection.types);

    this.main = document.querySelector("main");

    this.displayInMain(this.iconsCollection.cards);
  }

  populateSelectOptions(types) {
    types.forEach((type) => this.displayOption(type));
  }

  displayOption(type) {
    const option = document.createElement("option");
    option.textContent = type;
    option.value = type;
    this.select.append(option);
  }

  displayInMain(iconCards) {
    this.main.textContent = "";
    iconCards.forEach((icon) => this.main.append(icon));
  }

  displaySelectedTypes(e) {
    this.iconsCollection.setIcons(e.target.value);
    this.displayInMain(this.iconsCollection.cards);
  }
}
