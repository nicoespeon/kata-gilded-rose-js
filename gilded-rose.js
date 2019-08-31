export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class BaseItem {
  constructor(sellIn, quality) {
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {}

  increaseQuality() {
    if (this.quality < 50) {
      this.quality += 1;
    }
  }

  decreaseQuality() {
    if (this.quality > 0) {
      this.quality -= 1;
    }
  }

  decreaseSellIn() {
    this.sellIn -= 1;
  }
}

class AgedBrie extends BaseItem {
  update() {
    this.increaseQuality();
    this.decreaseSellIn();

    if (this.sellIn < 0) {
      this.increaseQuality();
    }
  }
}

class BackstagePass extends BaseItem {
  update() {
    this.increaseQuality();

    if (this.sellIn < 11) {
      this.increaseQuality();
    }

    if (this.sellIn < 6) {
      this.increaseQuality();
    }

    this.decreaseSellIn();

    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }
}

class Normal extends BaseItem {
  update() {
    this.decreaseQuality();
    this.decreaseSellIn();

    if (this.sellIn < 0) {
      this.decreaseQuality();
    }
  }
}

class Conjured extends Normal {
  decreaseQuality() {
    super.decreaseQuality();
    super.decreaseQuality();
  }
}

const DEFAULT_CLASS = Normal;
const SPECIALIZED_CLASSES = {
  "Aged Brie": AgedBrie,
  "Backstage passes to a TAFKAL80ETC concert": BackstagePass,
  "Sulfuras, Hand of Ragnaros": BaseItem,
  "Conjured": Conjured
};

export class Shop {
  constructor(items = []) {
    this.items = items.map(item => {
      const ItemClass = this.getItemClass(item.name);
      return new ItemClass(item.sellIn, item.quality);
    });
  }

  updateQuality() {
    this.items.forEach(item => item.update());
    return this.items;
  }

  getItemClass(name) {
    return SPECIALIZED_CLASSES[name] || DEFAULT_CLASS;
  }
}
