export class Product {
  constructor(
    public id: string,
    public name: string,
    public tags: []
  ) { }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getTags() {
    return this.tags;
  }

  setId(id: string) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setTags(tags: []) {
    this.tags = tags;
  }
}

export interface ProductInputDTO {
  name: string,
  tags: []
}

export interface ProductId {
  id: string
}

export interface ProductName {
  name: string
}

export interface ProductTags {
  tags: []
}