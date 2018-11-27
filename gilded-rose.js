const MIN_QUALITY = 0;
const MAX_QUALITY = 50;

export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class NormalItem extends Item {
  constructor(sellIn, quality) {
    super("normal", sellIn, quality);
  }

  updateQuality() {
    this.lowerQuality();
    this.lowerSellIn();
    if (this.isSellDatePassed()) this.lowerQuality();

    return this;
  }

  lowerQuality() {
    if (this.quality > MIN_QUALITY) {
      this.quality = this.quality - 1;
    }
  }

  lowerSellIn() {
    this.sellIn = this.sellIn - 1;
  }

  isSellDatePassed() {
    return this.sellIn < 0;
  }
}

export class SulfurasItem extends Item {
  constructor(sellIn, quality) {
    super("Sulfuras, Hand of Ragnaros", sellIn, quality);
  }

  updateQuality() {
    return this;
  }
}

export class BackstagePassItem extends Item {
  constructor(sellIn, quality) {
    super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
  }

  updateQuality() {
    this.increaseQuality();
    if (this.sellIn < 11) this.increaseQuality();
    if (this.sellIn < 6) this.increaseQuality();
    this.lowerSellIn();
    if (this.isSellDatePassed()) this.setQualityTo0();

    return this;
  }

  increaseQuality() {
    if (this.quality < MAX_QUALITY) {
      this.quality = this.quality + 1;
    }
  }

  lowerSellIn() {
    this.sellIn = this.sellIn - 1;
  }

  setQualityTo0() {
    this.quality = 0;
  }

  isSellDatePassed() {
    return this.sellIn < 0;
  }
}

export class AgedBrieItem extends Item {
  constructor(sellIn, quality) {
    super("Aged Brie", sellIn, quality);
  }

  updateQuality() {
    this.increaseQuality();
    this.lowerSellIn();
    if (this.isSellDatePassed()) this.increaseQuality();

    return this;
  }

  increaseQuality() {
    if (this.quality < MAX_QUALITY) {
      this.quality = this.quality + 1;
    }
  }

  lowerSellIn() {
    this.sellIn = this.sellIn - 1;
  }

  isSellDatePassed() {
    return this.sellIn < 0;
  }
}

export class ConjuredItem extends NormalItem {
  constructor(sellIn, quality) {
    super(sellIn, quality);
    this.name = "Conjured";
  }

  lowerQuality() {
    if (this.quality > MIN_QUALITY) {
      this.quality = this.quality - 2;
    }
  }
}

export class GildedRose {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    return this.items.map(item => item.updateQuality());
  }
}
