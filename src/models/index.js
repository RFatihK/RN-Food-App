class Product {
    constructor(id, image, images, name, miktar, fiyat, fiyatIndirimli) {
      this.id = id;
      this.image = image;
      this.images = images;
      this.name = name;
      this.miktar = miktar;
      this.fiyat = fiyat;
      this.fiyatIndirimli = fiyatIndirimli;
    }
  }
  
  class Category {
    constructor(id, name, src, subCategories) {
      this.id = id;
      this.name = name;
      this.src = src;
      this.subCategories = subCategories;
    }
  }
  
  class Filtering {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }
  
  module.exports = { Product, Category, Filtering };
  