import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Мы находимся по адресу: г. Москва, поселение Рязановское, ул. Логинова, д.7
          <div 
          style={{
            position:'relative',
            overflow:'hidden',
            }}>
                <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" 
                style={{
                    color:'#eee',
                    fontSize:'12px',
                    position:'absolute',
                    top:'0px'
                    }}>
                        Москва</a>
                        <a href="https://yandex.ru/maps/213/moscow/house/ulitsa_loginova_7k1/Z04YcwZjTU0CQFtvfXh4dH5mZQ==/?ll=37.515543%2C55.495737&utm_medium=mapframe&utm_source=maps&z=15.73" 
                        style={{
                            color:'#eee',
                            fontSize:'12px',
                            position:'absolute',
                            top:'14px'
                            }}>
                                Улица Логинова, 7к1 — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?ll=37.515543%2C55.495737&mode=whatshere&whatshere%5Bpoint%5D=37.513114%2C55.494963&whatshere%5Bzoom%5D=17&z=15.73" width="560" height="400" frameborder="1" allowfullscreen="true" 
                                style={{
                                    position:'relative'
                                    }}>
                                        </iframe>
                                        </div>
     
        </p>
      </div>
    </Layout>
  );
}