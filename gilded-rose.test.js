import { Item, Shop } from "./gilded-rose";

describe("Gilded Rose", () => {
  describe("normal item", () => {
    it("should decrease quality by 1 before sell date", () => {
      const item = new Item("normal", 10, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(8);
    });

    it("should decrease sellIn by 1 before sell date", () => {
      const item = new Item("normal", 10, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(9);
    });

    it("should decrease quality by 2 on sell date", () => {
      const item = new Item("normal", 0, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(7);
    });

    it("should decrease sellIn by 1 on sell date", () => {
      const item = new Item("normal", 0, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(-1);
    });

    it("should decrease quality by 2 after sell date", () => {
      const item = new Item("normal", -3, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(7);
    });

    it("should decrease sellIn by 1 after sell date", () => {
      const item = new Item("normal", -3, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(-4);
    });

    it("should not decrease quality below 0", () => {
      const item = new Item("normal", 10, 0);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(0);
    });
  });

  describe("brie", () => {
    it("should increase quality by 1 before sell date", () => {
      const item = new Item("Aged Brie", 10, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(10);
    });

    it("should decrease sellIn by 1 before sell date", () => {
      const item = new Item("Aged Brie", 10, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(9);
    });

    it("should increase quality by 2 on sell date", () => {
      const item = new Item("Aged Brie", 0, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(11);
    });

    it("should decrease sellIn by 1 on sell date", () => {
      const item = new Item("Aged Brie", 0, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(-1);
    });

    it("should increase quality by 2 after sell date", () => {
      const item = new Item("Aged Brie", -3, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(11);
    });

    it("should decrease sellIn by 1 after sell date", () => {
      const item = new Item("Aged Brie", -3, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(-4);
    });

    it("should not increase quality above 50", () => {
      const item = new Item("Aged Brie", 10, 50);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(50);
    });

    it("should not increase quality above 50 if it's near on sell date", () => {
      const item = new Item("Aged Brie", 0, 49);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(50);
    });
  });

  describe("sulfuras", () => {
    it("should not decrease quality before sell date", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", 10, 80);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(80);
    });

    it("should not decrease sellIn before sell date", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", 10, 80);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(10);
    });

    it("should not decrease quality on sell date", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", 0, 80);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(80);
    });

    it("should not decrease sellIn on sell date", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", 0, 80);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(0);
    });

    it("should not decrease quality after sell date", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", -3, 80);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(80);
    });

    it("should not decrease sellIn after sell date", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", -3, 80);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(-3);
    });
  });

  describe("backstage pass", () => {
    it("should increase quality by 1 more than 10 days before sell date", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 20, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(10);
    });

    it("should increase quality by 2 between 10 and 5 days before sell date", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(11);
    });

    it("should increase quality by 3 between 5 and 3 days before sell date", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(12);
    });

    it("should decrease sellIn by 1 before sell date", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(9);
    });

    it("should set quality to 0 on sell date", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(0);
    });

    it("should decrease sellIn by 1 on sell date", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(-1);
    });

    it("should set quality to 0 after sell date", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", -3, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(0);
    });

    it("should decrease sellIn by 1 after sell date", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", -3, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(-4);
    });

    it("should not increase quality above 50 more than 10 days before sell date", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 20, 50);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(50);
    });

    it("should not increase quality above 50 between 10 and 5 days before sell date", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(50);
    });

    it("should not increase quality above 50 between 5 and 3 days before sell date", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(50);
    });
  });

  describe("conjured", () => {
    it("should decrease quality by 2 before sell date", () => {
      const item = new Item("Conjured", 10, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(7);
    });

    it("should decrease sellIn by 1 before sell date", () => {
      const item = new Item("Conjured", 10, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(9);
    });

    it("should decrease quality by 4 on sell date", () => {
      const item = new Item("Conjured", 0, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(5);
    });

    it("should decrease sellIn by 1 on sell date", () => {
      const item = new Item("Conjured", 0, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(-1);
    });

    it("should decrease quality by 4 after sell date", () => {
      const item = new Item("Conjured", -3, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(5);
    });

    it("should decrease sellIn by 1 after sell date", () => {
      const item = new Item("Conjured", -3, 9);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.sellIn).toBe(-4);
    });

    it("should not decrease quality below 0", () => {
      const item = new Item("Conjured", 10, 0);

      const updatedItem = runUpdateQualityOn(item);

      expect(updatedItem.quality).toBe(0);
    });
  });
});

function runUpdateQualityOn(item) {
  const gildedRose = new Shop([item]);
  const items = gildedRose.updateQuality();
  return items[0];
}
