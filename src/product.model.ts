export default class Product {
  constructor(private title: string, private price: number) {}

  getInformation() {
    return [this.title, `$${this.price}`];
  }
}
