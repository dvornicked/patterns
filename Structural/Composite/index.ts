abstract class DeliveryItem {
  items: DeliveryItem[] = []

  addItem(item: DeliveryItem) {
    this.items.push(item)
  }

  abstract getPrice(): number

  getItemPrices() {
    return this.items.reduce(
      (acc: number, item: DeliveryItem) => (acc += item.getPrice()),
      0
    )
  }
}

export class DeliveryShop extends DeliveryItem {
  constructor(private deliveryFee: number) {
    super()
  }
  getPrice(): number {
    return this.getItemPrices() + this.deliveryFee
  }
}

export class Package extends DeliveryItem {
  getPrice(): number {
    return this.getItemPrices()
  }
}

export class Product extends DeliveryItem {
  constructor(public price: number) {
    super()
  }
  getPrice(): number {
    return this.price
  }
}

const shop = new DeliveryShop(100)
shop.addItem(new Product(1000))
const pack = new Package()
pack.addItem(new Product(200))
pack.addItem(new Product(2000))
shop.addItem(pack)

console.log(shop.getPrice())