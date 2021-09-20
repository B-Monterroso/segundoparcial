export class Products {

    constructor(ProductId,Name,PathPhoto,Details, Coste, Link, Count, Type) {

      this.ProductId = ProductId;
      this.name = Name;
      this.PathPhoto = PathPhoto;
      this.Details = Details;
      this.Coste = Coste;
      this.Link = Link;
      this.Count = Count;
      this.Type = Type
    }

    getProductId() {
      return this.ProductId;
    }

    setProductId(ProductId) {
      this.ProductId = ProductId
    }

    getName() {
      return this.name;
    }

    setName(name) {
      this.name = name
    }

    getPathPhoto() {
      return this.PathPhoto;
    }

    setPathPhoto(PathPhoto) {
      this.PathPhoto = PathPhoto
    }

    getDetails() {
      return this.Details;
    }

    setDetails(Details) {
      this.Details = Details
    }

    getCoste() {
      return this.Coste;
    }

    setCoste(Coste) {
      this.Coste = Coste
    }

    getLink() {
      return this.Link;
    }

    setLink(Link) {
      this.Link = Link
    }

    getCount() {
      return this.Count;
    }

    setCount(Count) {
      this.Count = Count
    }

    getType() {
      return this.Type;
    }

    setType(Type) {
      this.Type = Type
    }
}