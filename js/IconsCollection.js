class IconsCollection {
  icons;
  types;
  mapTypeColor;
  iconsSelected;
  cards;

  constructor(icons) {
    this.icons = icons;
    this.types = this.getIconTypes(this.icons);
    this.mapTypeColor = new Map();
    this.setMapTypeColor();
    this.icons.forEach((icon) => {
      icon.color = this.mapTypeColor.get(icon.type);
      icon.getClass = function () {
        return this.family + " " + this.prefix + this.name;
      };
    });
    this.iconsSelected = this.icons;
    this.cards = this.getCardsNodeList();
  }

  setIcons(type) {
    this.iconsSelected =
      type === "all"
        ? this.icons
        : this.icons.filter((icon) => icon.type === type);
    this.cards = this.getCardsNodeList();
  }

  getCardsNodeList() {
    return this.iconsSelected.map((icon) => this.getCard(icon));
  }

  getCard(icon) {
    const card = document.createElement("div");
    card.classList.add("card");
    const iconImage = document.createElement("i");
    iconImage.className = icon.getClass();
    iconImage.style.color = icon.color;
    const name = document.createElement("div");
    name.textContent = icon.name;
    card.append(iconImage, name);
    return card;
  }

  getIconTypes(icons) {
    return icons.map((icon) => icon.type).reduce(this.deleteDoubles, []);
  }

  deleteDoubles(accumulator, current) {
    if (!accumulator.includes(current)) {
      accumulator.push(current);
    }
    return accumulator;
  }

  setMapTypeColor() {
    this.types.forEach((type) =>
      this.mapTypeColor.set(type, this.getRandomColor())
    );
  }

  getRandomColor() {
    return `rgb(${this.getRandomNumber(0, 255)}, 
    ${this.getRandomNumber(0, 255)}, 
    ${this.getRandomNumber(0, 255)})`;
  }

  getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }
}
