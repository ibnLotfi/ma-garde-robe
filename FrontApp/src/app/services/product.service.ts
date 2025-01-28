import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {title: "Bonnet", image: "https://www.millet.com/visuels/original/MIV8607_N8057_C4H_0.png?optimize=medium&fit=cover&height=375&width=840&canvas=%3A&format=pjpg&auto=webp&bg-color=f0eeef", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Chemise", image: "https://www.ccvmode.com/148732-mobile_zoom_default/premium-by-jack-jones-chemise-homme-blanc.jpg", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Veste", image: "https://urbansapes.fr/media/catalog/product/cache/47969c47b57255357446b283e5a56cc2/1/3/13310962017_823790914.jpg", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Veste the north face", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KDyxvzCER125muQKvDrdUBWhgCJw-zVkZQ&s", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Manteau bonobo", image: "https://www.bonoboplanet.com/on/demandware.static/-/Sites-Bonobo_master/default/dwfc86ada6/parka-droite-a-capuche-vert-kaki-homme-vue3-36125221970100279.jpg", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Manteau celio", image: "https://www.imajeans.fr/media/catalog/product/cache/d14cbcfa7cc4be5a8455b8d4fba9ac09/t/t/tt-25726-1.jpg", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Manteau", image: "https://urbansapes.fr/media/catalog/product/cache/47969c47b57255357446b283e5a56cc2/m/a/manteau-hiver-matelasse-pour-homme-avec-capuche-a-fourrure-et-poches-larges-c_te-sw8012-09_4_.jpg", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Robe", image: "https://assets.christiandior.com/is/image/diorprod/141R38A2790X9000_E01?$default_GHC_1080$&crop=613,150,774,1572&bfc=on&qlt=85", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Pantalon", image: "https://www.3suisses.fr/media/produits/7095428/pantalon-cargo-homme-vert_3514630-4_1140x1140.jpeg", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Chino", image: "https://www.atelierprive.com/18463-large_default/pantalon-chino-homme-beige.jpg", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Jean", image: "https://t4n2b2z6.rocketcdn.me/wp-content/uploads/2021/06/jean-large-homme-mode-urbaine-b6276..jpg", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Basket", image: "https://www.cdiscount.com/pdt2/2/2/7/4/700x700/mp46126227/rw/basket-homme-nouveau-baskets-leger-decontracte-e.jpg", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Snickers", image: "https://bonnegueule.fr/cdn/shop/articles/sneakers-homme.jpg?v=1719869574", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Crocs", image: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/205392_4CC_ALT140/crocs", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Echarpe verte", image: "https://www.graindemalice.fr/dw/image/v2/BJXR_PRD/on/demandware.static/-/Sites-GDM-FR-master-catalog/default/dw8618a74a/images/852277_7055_1.jpg?sw=1562&sh=1800&sm=fit", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Echarpe grise", image: "https://matiere-noble.fr/7573-large_default/echarpe-femme-rodier-grise-plumes.jpg", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Echarpe noire", image: "https://www.eden-park.com/cdn/shop/files/H24ACTEC0006_NO_b-hd-face.jpg?v=1718355155", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Echarpe rouge", image: "https://www.christine-laure.fr/media/catalog/product/cache/770ae19ac1a618035dd6d1662223a3d1/i/m/image1-23hd6103010.jpg", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Keffieh rouge", image: "https://cdn.military.eu/fr/media/catalog/product/1/0/1045793_Arafatka-chusta-ochronna-MFH-Shemagh-Red-White-glowne.jpg?width=800&height=640&store=military_fr&image-type=image", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
    {title: "Keffieh noir", image: "https://cdn.military.eu/fr/media/catalog/product/1/0/1045789_Arafatka-chusta-ochronna-MFH-Shemagh-Black-White-glowne.jpg?width=800&height=640&store=military_fr&image-type=image", description: "Ceci est une courte description du produit vendu, vous pouvez vous le procurer en cliquant sur le boutton ajouter au panier.", price: 10},
  ]

  constructor(private httpClient: HttpClient) { }

  getProduct(){
    return this.products;
  }
}
