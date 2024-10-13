import React from 'react';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const products = [
  { id: 1, name: 'Broccoli', price: 50, weight: '500g', image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg' },
  { id: 2, name: 'Carrot', price: 30, weight: '1000g', image: 'https://as1.ftcdn.net/v2/jpg/02/34/50/46/1000_F_234504686_3gHrlyTUHfsyTQlM1PgbRBryfGYrHACB.jpg' },
  { id: 3, name: 'Tomato', price: 25, weight: '500g', image: 'https://as1.ftcdn.net/v2/jpg/05/46/01/18/1000_F_546011872_4HPNRWBMKNXkulEsM7fPNNirdsd3czxq.jpg' },
  { id: 4, name: 'Spinach', price: 20, weight: '250g', image: 'https://t4.ftcdn.net/jpg/02/49/93/33/240_F_249933303_rB82fjbNuZdT3444cZfutFG1Wau0T1VA.jpg' },
  { id: 5, name: 'Capsicum', price: 40, weight: '500g', image: 'https://t3.ftcdn.net/jpg/06/15/97/78/240_F_615977805_TMDrMgdINllbkvO5pxk7oI09aqPJxnmQ.jpg' },
  { id: 6, name: 'Potato', price: 20, weight: '1000g', image: 'https://as1.ftcdn.net/v2/jpg/05/38/93/56/1000_F_538935626_O0J2Q1vyvP32TH2baPNsbBnznHjZkVaP.jpg' },
  { id: 7, name: 'Onion', price: 35, weight: '1000g', image: 'https://t3.ftcdn.net/jpg/01/81/23/98/240_F_181239892_A86XRkWIDSlSPGmnVYTSeAREpwwkJmPJ.jpg' },
  { id: 8, name: 'Cucumber', price: 15, weight: '500g', image: 'https://t3.ftcdn.net/jpg/08/30/37/38/240_F_830373888_2zyr6MFe1kDiwChwLtTvGh7ZUzOoVhpS.jpg' },
  { id: 9, name: 'Pumpkin', price: 30, weight: '1000g', image: 'https://as2.ftcdn.net/v2/jpg/05/42/25/53/1000_F_542255315_6xIosu7sKllJdj1PPh64UErgE6IpgTRh.jpg' },
  { id: 10, name: 'Beetroot', price: 35, weight: '500g', image: 'https://t4.ftcdn.net/jpg/00/88/85/95/240_F_88859571_SJzMHfSYldkuNQasHEfkXuVn6HzTWYBp.jpg' },
  { id: 11, name: 'Cauliflower', price: 45, weight: '750g', image: 'https://as2.ftcdn.net/v2/jpg/00/74/22/49/1000_F_74224945_w2gL8LGSB9mc8sm7kSq0epcZrM2uhY6T.jpg' },
  { id: 12, name: 'Garlic', price: 100, weight: '250g', image: 'https://t3.ftcdn.net/jpg/00/72/40/68/240_F_72406874_8X9qSgxBYmu7TrGjOt887BsZYriB1zEz.jpg' },
  { id: 13, name: 'Ginger', price: 90, weight: '250g', image: 'https://t3.ftcdn.net/jpg/02/76/97/90/240_F_276979013_VixAnzzAmShrq7j83Iv8IATlpKkuZhSu.jpg' },
  { id: 14, name: 'Cabbage', price: 25, weight: '1000g', image: 'https://t4.ftcdn.net/jpg/00/32/09/57/360_F_32095781_CsyOETUW3ksonb7MxH4PzYfu2SPw6Lv8.jpg'},
  { id: 15, name: 'Radish', price: 20, weight: '500g', image: 'https://as2.ftcdn.net/v2/jpg/06/39/18/19/1000_F_639181938_jDrnciObx2FmA2YWB1y1t8wmEUAB3Ahi.jpg' },
  { id: 16, name: 'Brinjal', price: 35, weight: '750g', image: 'https://purepng.com/public/uploads/large/purepng.com-brinjalvegetables-brinjal-eggplant-melongene-garden-egg-guinea-squash-941524725891tf1xf.png' },
  { id: 17, name: 'Ladyfinger', price: 30, weight: '500g', image: 'https://as1.ftcdn.net/v2/jpg/00/93/87/58/1000_F_93875869_4wljHkFnHyygyHaXVeKILo600rpPIhVC.jpg' },
  { id: 18, name: 'Bitter Gourd', price: 40, weight: '500g', image: 'https://as1.ftcdn.net/v2/jpg/04/00/52/56/1000_F_400525650_gyr1dOYWl7V35kVjO0EcLpkbBFTfCLHj.jpg' },
  { id: 19, name: 'Mushroom', price: 120, weight: '250g', image: 'https://as2.ftcdn.net/v2/jpg/01/34/29/51/1000_F_134295177_fPWBhjQ6HqI5tJhQW88W6lUXKRW6sHhO.jpg' },
  { id: 20, name: 'Chili', price: 50, weight: '100g', image: 'https://t3.ftcdn.net/jpg/01/71/05/12/240_F_171051280_G0vWhu6NCKLtffByZpHoQ2je3y8LLOvR.jpg' }
];

function Shop({ addToCart }) {
  return (
    <div className="shop">
      <h2>Shop Vegetables</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Weight: {product.weight}</p>
            <button
              className="add-to-cart"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
