import { Brand, Category, Color, Gender, Material, Product, Size, Tag } from "./product";


export const Materials: Material[] = [
    { MaterialId: 1, name: "Cotton" },
    { MaterialId: 2, name: "Linen" },
    { MaterialId: 3, name: "Silk" },
    { MaterialId: 4, name: "Wool" },
    { MaterialId: 5, name: "Polyester" },
    { MaterialId: 6, name: "Nylon" },
    { MaterialId: 7, name: "Rayon" },
    { MaterialId: 8, name: "Spandex" },
    { MaterialId: 9, name: "Leather" },
    { MaterialId: 10, name: "Denim" },
  ];
  

  export const Tags: Tag[] = [
    {tagId: 1, name: "Hiver"},
    {tagId: 2, name: "Tendance2024"},
    {tagId: 3, name: "Football"},
  ];

  export const Colors: Color[] = [
    { colorId: 1, name: "White", value: "#FFFFFF" },
    { colorId: 2, name: "Black", value: "#000000" },
    { colorId: 3, name: "Red", value: "#FF0000" },
    { colorId: 4, name: "Yellow", value: "#FFFF00" },
    { colorId: 5, name: "Green", value: "#00FF00" },
    { colorId: 6, name: "Blue", value: "#0000FF" },
    { colorId: 7, name: "Pink", value: "#FFC0CB" },
    { colorId: 8, name: "Orange", value: "#FFA500" },
    { colorId: 9, name: "Purple", value: "#800080" },
    { colorId: 10, name: "Gray", value: "#808080" },
  ];
  

  export const Brands: Brand[] = [
    {brandId: 1, name: "Adidas"},
    {brandId: 2, name: "DC Jeans"},
    {brandId: 3, name: "Shein"},
    {brandId: 4, name: "Nourane"},
  ];

  export const Genders: Gender[] = [
    { genderId: 1, name: "Male"},
    { genderId: 2, name: "Female"},
    { genderId: 3, name: "Boy"},
    { genderId: 4, name: "Girl"},
  ];

  export const Sizes: Size[] = [
    {sizeId: 1, name: "XS"},
    {sizeId: 2, name: "S"},
    {sizeId: 3, name: "M"},
    {sizeId: 4, name: "L"},
    {sizeId: 5, name: "XL"},
    {sizeId: 6, name: "2XL"},
    {sizeId: 7, name: "3XL"},
    {sizeId: 8, name: "1 Months"},
    {sizeId: 9, name: "6 Months"},
    {sizeId: 10, name: "12 Months"},
    {sizeId: 11, name: "18 Months"},
    {sizeId: 12, name: "24 Months"},
    {sizeId: 13, name: "4 Years"},
    {sizeId: 14, name: "6 Years"},
    {sizeId: 15, name: "8 Years"},
    {sizeId: 16, name: "10 Years"},
    {sizeId: 17, name: "45"},
  ];

  export const Categories: Category[] = [
    { categoryId: 1, name: "Pantalon" },
    { categoryId: 2, name: "Montre" },
    { categoryId: 3, name: "Jean" },
    { categoryId: 4, name: "Veste" },
    { categoryId: 5, name: "T-shirt" },
    { categoryId: 6, name: "Chemise" },
    { categoryId: 7, name: "Chaussures" },
    { categoryId: 8, name: "Sac" },
    { categoryId: 9, name: "Short" },
    { categoryId: 10, name: "Robe" },
  ];
  
  export const Products: Product[] = [
    {
      productId: 1,
      title: "Veste en Cuir Noir",
      price: 149.99,
      description: "Une veste en cuir élégante et résistante pour un style moderne.",
      material: Materials[8], // Leather
      gender: Genders[0], // Male
      size: Sizes[3], // L
      brand: Brands[0], // Adidas
      color: Colors[1], // Black
      images: [
        { imageId: 1, imageSrc: "https://img.la-canadienne.com/c2cea71de7516c2e918f95588edb513b.jpg?w=406&h=650" },
      ],
      tags: [Tags[0], Tags[1]], // Hiver, Tendance2024
      isAccessory: false,
      category: Categories[4], // Veste
    },
    {
      productId: 2,
      title: "Jean Slim Fit Bleu",
      price: 59.99,
      description: "Un jean ajusté en denim pour un look tendance.",
      material: Materials[9], // Denim
      gender: Genders[0], // Male
      size: Sizes[2], // M
      brand: Brands[1], // DC Jeans
      color: Colors[5], // Blue
      images: [
        { imageId: 4, imageSrc: "https://img01.ztat.net/article/spp-media-p1/d156c41177f24649bb390cbb8a2ce20f/059d0145a9d24fafa434e9b88e90ad24.jpg?imwidth=300" },
      ],
      tags: [Tags[1], Tags[2]], // Tendance2024, Football
      isAccessory: false,
      category: Categories[2], // Jean
    },
    {
      productId: 3,
      title: "T-shirt Blanc Basique",
      price: 19.99,
      description: "Un t-shirt blanc confortable et polyvalent.",
      material: Materials[0], // Cotton
      gender: Genders[1], // Female
      size: Sizes[2], // M
      brand: Brands[2], // Shein
      color: Colors[0], // White
      images: [
        { imageId: 7, imageSrc: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAPQMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAwIEBQEHBv/EAC8QAAIBAgQEBAQHAAAAAAAAAAABAgMRBCFBYTFRcbEFBhIjFCIzoSUyNGJjgYL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/APtgAAAAAAAAAAE8RXp4eHrqyUV3KSaim3wR+cjUl4r4tGq2/hsPO0FpKXP+hg7UcS5SXyWjvxLqpF6o0KDvRg3qiyV08rmoLOunK1P5rcXojOM0yEc1sexdmmtGINgBO6BkcjzDjJUaEcPRfvV36Y7LVk/CaEaOCi4LJXa3y4m/jsBTxaTndSSaTT4GtOtHCYaVLENQtBqM9Hl9mXBTDr2qS/YitF+zN9SdLKlF/wAa7GVHLBs0ikPpw3PVwfU8j9OkZRTaduZBSnLQoYQp+nN5szMqHF80r8Mm9brudo43mhX8Ml1XcCz+TC/4S+xWOWDW5HFO1CK5tFn+mguZtFeEaS2KUeMjB5OGyM6P5pE0VABlQ4/mZX8Oe8o9zsGNSnGpH0zSa3A42Oqr1RjfJZm3J2p0YvVGx8HR1pwfVXMpYeE2m4q64FownlKC5orTVpPoeOjFtX4opGNkKPQAQAAAAAAAAAAB/9k=" },
      ],
      tags: [Tags[1]], // Tendance2024
      isAccessory: false,
      category: Categories[5], // T-shirt
    },
    {
      productId: 4,
      title: "Montre en Acier Inoxydable",
      price: 129.99,
      description: "Une montre durable avec un design classique.",
      material: Materials[4], // Polyester
      gender: Genders[0], // Male
      size: null, // Not applicable
      brand: Brands[3], // Nourane
      color: Colors[9], // Gray
      images: [
        { imageId: 10, imageSrc: "https://m.media-amazon.com/images/I/717Xw8VJCPL._AC_SX342_.jpg" },
        { imageId: 11, imageSrc: "https://m.media-amazon.com/images/I/71tgGExqzJL._AC_SX342_.jpg" },
        { imageId: 12, imageSrc: "https://m.media-amazon.com/images/I/61r75QPxbrL._AC_SX342_.jpg" },
      ],
      tags: [Tags[2]], // Football
      isAccessory: true,
      category: Categories[1], // Montre
    },
    {
      productId: 5,
      title: "Chaussures de Sport Rouge",
      price: 89.99,
      description: "Chaussures légères et confortables pour le sport.",
      material: Materials[5], // Nylon
      gender: Genders[3], // Girl
      size: Sizes[15], // 8 Years
      brand: Brands[0], // Adidas
      color: Colors[2], // Red
      images: [
        { imageId: 13, imageSrc: "https://img01.ztat.net/article/spp-media-p1/a5b759502e3a44649aef838d161bf3f1/fe51dd4c528343ec9453a474918a1dfc.jpg?imwidth=1800&filter=packshot" },
      ],
      tags: [Tags[1]], // Tendance2024
      isAccessory: false,
      category: Categories[6], // Chaussures
    },
    {
      productId: 6,
      title: "Pantalon en Lin Beige",
      price: 49.99,
      description: "Pantalon léger et élégant en lin.",
      material: Materials[1], // Linen
      gender: Genders[0], // Male
      size: Sizes[4], // L
      brand: Brands[1], // DC Jeans
      color: Colors[9], // Gray
      images: [
        { imageId: 16, imageSrc: "https://assets.laboutiqueofficielle.com/w_450,q_auto,f_auto/media/products/2024/03/26/lbo_415218_LBO-1070521-1180_20240522T080525_01.jpg" },
      ],
      tags: [Tags[0]], // Hiver
      isAccessory: false,
      category: Categories[0], // Pantalon
    },
    {
      productId: 7,
      title: "Sac à Dos Noir",
      price: 39.99,
      description: "Un sac à dos pratique pour toutes les occasions.",
      material: Materials[6], // Rayon
      gender: Genders[0], // Male
      size: null, // Not applicable
      brand: Brands[2], // Shein
      color: Colors[1], // Black
      images: [
        { imageId: 19, imageSrc: "https://www.mesbagages.com/images/bagages/sac_ordinateur-snowball-800706.jpg" },
        { imageId: 20, imageSrc: "https://www.mesbagages.com/images/bagages/sac_ordinateur-snowball-800709z.jpg" },
        { imageId: 21, imageSrc: "https://www.mesbagages.com/images/bagages/sac_ordinateur-snowball-800707z.jpg" },
      ],
      tags: [Tags[0], Tags[1]], // Hiver, Tendance2024
      isAccessory: true,
      category: Categories[7], // Sac
    },
    {
      productId: 8,
      title: "Manteau Élégant en Laine ",
      price: 69.99,
      description: "Le SOLÈNE est le manteau en laine par excellence pour affronter l'hiver avec élégance et confort.",
      material: Materials[4], // Silk
      gender: Genders[1], // Female
      size: Sizes[3], // L
      brand: Brands[3], // Nourane
      color: Colors[6], // Pink
      images: [
        { imageId: 22, imageSrc: "https://www.luviera-fashion.fr/cdn/shop/files/Brown_ed0f1347-5d4e-41dd-812d-3e6cc634772e.jpg?v=1729612411" },
      ],
      tags: [Tags[1]], // Tendance2024
      isAccessory: false,
      category: Categories[9], // Robe
    },
    {
      productId: 9,
      title: "Short en Coton Vert",
      price: 34.99,
      description: "Un short confortable pour les journées chaudes.",
      material: Materials[0], // Cotton
      gender: Genders[0], // Male
      size: Sizes[3], // L
      brand: Brands[2], // Shein
      color: Colors[4], // Green
      images: [
        { imageId: 25, imageSrc: "https://m.media-amazon.com/images/I/71jB3X1k2WL._AC_SY550_.jpg" },
      ],
      tags: [Tags[2]], // Football
      isAccessory: false,
      category: Categories[8], // Short
    },
    {
      productId: 10,
      title: "Chemise à Rayures",
      price: 44.99,
      description: "Une chemise élégante pour un look professionnel.",
      material: Materials[3], // Wool
      gender: Genders[0], // Male
      size: Sizes[3], // L
      brand: Brands[1], // DC Jeans
      color: Colors[8], // Purple
      images: [
        { imageId: 28, imageSrc: "https://cdn.cafecoton.com/cafecoton_images/produits/11nbls-carly-12-h24-1.jpg" },
      ],
      tags: [Tags[0], Tags[1]], // Hiver, Tendance2024
      isAccessory: false,
      category: Categories[5], // Chemise
    },
  ];
  