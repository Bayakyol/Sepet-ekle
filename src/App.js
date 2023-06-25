import { useState } from 'react';
import './App.css';
import Card from './components/card/Card';

function App({ title, image, info }) {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: 'MSI Anakart',
      image: 'https://picsum.photos/id/0/5000/3333',
      info: "3.0 GHZ 3*USB 2.0",
      adet: 1,
    },
    {
      id: 2,
      title: 'RAM',
      image: 'https://picsum.photos/id/7/4728/3168',
      info: "16 GB Kingston",
      adet: 1,
    },
    {
      id: 3,
      title: 'Ekran Kartı',
      image: "https://picsum.photos/id/17/2500/1667",
      info: "Nvdia Geforce 1050",
      adet: 1,
    },
    {
      id: 4,
      title: 'Monitör',
      image: "https://picsum.photos/id/5/5000/3334",
      info: "17' Monitör",
      adet: 1,
    },
  ]);


  const [basket, setBasket] = useState([]);
  return (
    <div className='App'>
    <h1>REACT SEPET UYGULAMASI</h1>
    <h2>Listelenen Ürünler</h2>
    <div className="urunler">
    {product.map((eleman,index) => {
      return (
        <Card 
        onClick={() => {
          const arr=[...basket];
          if (
            arr.findIndex((ind) => {
        return eleman.id === ind.id;
            }) === -1
          ) { 
          arr.push(eleman);
          setBasket(arr);
          } else {
            arr.map((item) => {
              if (item.id === eleman.id) {
                return (eleman.adet += 1);
              }
              setBasket(arr);
            });
          }
          console.log(basket);
        }}
        key={index}
        title={eleman.title}
        image={eleman.image}
        info={eleman.info}
      />
      );
    })}
    </div>
    <div className="sepet"> 
    <h2>SEPETİMİZ</h2>
    <ul className="sepet">
    {basket.map((eleman, index) => {
      return (
        <li>
        {eleman.title + "---->" + eleman.info + "Adet:"}{" "} 
      <b style={{ fontSize: "24px", color: "black"}}>
      {eleman.adet}
      </b>
      </li>
      );
    })}
    </ul>
    {basket.length > 0 ? (
      <button
      onClick={() => {
        setBasket([]);

      }}>Sepeti Temizle</button>
    ) : (
     <h2>Sepetinizde Ürün Bulunmamaktadır.</h2>
    )}
    </div>
    </div>
  );
}

export default App;
