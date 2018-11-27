import {
  NormalItem,
  AgedBrieItem,
  SulfurasItem,
  BackstagePassItem,
  ConjuredItem,
  GildedRose
} from "./gilded-rose";

describe("Gilded Rose", () => {
  describe("Normal Item", () => {
    it("should lower quality and sellIn properties by 1", () => {
      const gildedRose = new GildedRose([new NormalItem(10, 4)]);

      const [item] = gildedRose.updateQuality();

      expect(item).toMatchObject({ sellIn: 9, quality: 3 });
    });

    it("should lower quality by 2 when sellIn is negative", () => {
      const gildedRose = new GildedRose([new NormalItem(-1, 4)]);

      const [item] = gildedRose.updateQuality();

      expect(item.quality).toBe(2);
    });

    it("should not lower quality below 0", () => {
      const gildedRose = new GildedRose([new NormalItem(10, 0)]);

      const [item] = gildedRose.updateQuality();

      expect(item.quality).toBe(0);
    });
  });

  describe("Aged Brie", () => {
    it("should increase quality by 1", () => {
      const gildedRose = new GildedRose([new AgedBrieItem(10, 4)]);

      const [agedBrie] = gildedRose.updateQuality();

      expect(agedBrie.quality).toBe(5);
    });

    it("should increase quality by 2 if sellIn is negative", () => {
      const gildedRose = new GildedRose([new AgedBrieItem(-1, 4)]);

      const [agedBrie] = gildedRose.updateQuality();

      expect(agedBrie.quality).toBe(6);
    });

    it("should not increase quality above 50", () => {
      const gildedRose = new GildedRose([new AgedBrieItem(10, 50)]);

      const [agedBrie] = gildedRose.updateQuality();

      expect(agedBrie.quality).toBe(50);
    });
  });

  describe("Sulfuras", () => {
    it("should not update quality and sellIn properties", () => {
      const gildedRose = new GildedRose([new SulfurasItem(10, 80)]);

      const [sulfuras] = gildedRose.updateQuality();

      expect(sulfuras).toMatchObject({ sellIn: 10, quality: 80 });
    });

    it("should not update quality and sellIn properties when sellIn is negative", () => {
      const gildedRose = new GildedRose([new SulfurasItem(-1, 80)]);

      const [sulfuras] = gildedRose.updateQuality();

      expect(sulfuras).toMatchObject({ sellIn: -1, quality: 80 });
    });
  });

  describe("Backstage Pass", () => {
    function shouldIncreaseQualityRegardingSellIn(qualityIncrease, sellIn) {
      it(`should increase quality by ${qualityIncrease} if sellIn is ${sellIn}`, () => {
        const initialQuality = 4;
        const gildedRose = new GildedRose([
          new BackstagePassItem(sellIn, initialQuality)
        ]);

        const [backstagePass] = gildedRose.updateQuality();

        expect(backstagePass.quality).toBe(initialQuality + qualityIncrease);
      });
    }

    shouldIncreaseQualityRegardingSellIn(1, 20);
    shouldIncreaseQualityRegardingSellIn(2, 10);
    shouldIncreaseQualityRegardingSellIn(2, 9);
    shouldIncreaseQualityRegardingSellIn(2, 6);
    shouldIncreaseQualityRegardingSellIn(3, 5);
    shouldIncreaseQualityRegardingSellIn(3, 4);
    shouldIncreaseQualityRegardingSellIn(3, 1);

    it("should set quality to 0 if sellIn is 0", () => {
      const gildedRose = new GildedRose([new BackstagePassItem(0, 4)]);

      const [backstagePass] = gildedRose.updateQuality();

      expect(backstagePass.quality).toBe(0);
    });

    it("should set quality to 0 if sellIn is negative", () => {
      const gildedRose = new GildedRose([new BackstagePassItem(-3, 4)]);

      const [backstagePass] = gildedRose.updateQuality();

      expect(backstagePass.quality).toBe(0);
    });
  });

  describe("Conjured", () => {
    it("should lower quality twice as fast as normal item", () => {
      const gildedRose = new GildedRose([new ConjuredItem(10, 4)]);

      const [item] = gildedRose.updateQuality();

      expect(item).toMatchObject({ sellIn: 9, quality: 2 });
    });

    it("should lower quality by 4 when sellIn is negative", () => {
      const gildedRose = new GildedRose([new ConjuredItem(-1, 4)]);

      const [item] = gildedRose.updateQuality();

      expect(item.quality).toBe(0);
    });

    it("should not lower quality below 0", () => {
      const gildedRose = new GildedRose([new ConjuredItem(10, 0)]);

      const [item] = gildedRose.updateQuality();

      expect(item.quality).toBe(0);
    });
  });
});
