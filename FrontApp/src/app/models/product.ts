export interface Product {
    productId: number; // primary key
    title: string;
    price: number; // decimal
    description: string;
    material?: Material;
    gender?: Gender; // Relation: one Product has one Gender (nullable)
    size?: Size | null; // Relation: one Product has one Size (nullable)
    brand?: Brand; // Relation: one Product has one Brand (nullable)
    color?: Color; // Relation: one Product has one Color (nullable)
    images: Image[]; // Relation: one Product has many Images
    tags?: Tag[]; // Relation: one Product has many Tags,
    isAccessory: boolean;
    category: Category;
  };

  export interface Category {
    categoryId: number,
    name: string
  }

  export interface Material {
    MaterialId: number; // primary key
    name: string; // foreign key referencing Product
  };
 
  
  export interface Image {
    imageId: number; // primary key
    imageSrc: string;
  };
  
  export interface Gender {
    genderId: number; // primary key
    name: string;
  };
  
  export interface Size {
    sizeId: number; // primary key
    name: string;
  };
  
  export interface Brand {
    brandId: number; // primary key
    name: string;
  };
  
  export interface Color {
    colorId: number; // primary key
    name: string;
    value: string;
  };
  
  export interface Tag {
    tagId: number; // not specified as primary key but assumed unique
    name: string;
  };

  