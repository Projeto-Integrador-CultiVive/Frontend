import React from 'react'
import Carousel from 'react-elastic-carousel'           // Não esqueça de instalar a Dependencia

/*
    Para fazer importações de imagens Locais, vc deve ir no arquivo react-app-env.d.ts, que está na Raíz do Projeto
    e add o seguinte código:
    declare module '*.png'
    declare module '*.jpg'
    Esses códigos "tipam" e liberam o uso de imgs quando usamos Typescript
*/

// import arcane from '../../assets/images/arcane.jpg'  // Importação de imagens Locais

import './CarouselComponent.css'

function CarouselComponent() {
  var items = [
    { img: "https://i.imgur.com/tqqpEFK.png" },
    { img: "https://i.imgur.com/ZYU5wVr.png" },
    { img: "https://i.imgur.com/zBeuEXh.png" },



  ]

  return (
    <Carousel isRTL={false}>
      {
        items.map(item => (
          <>
            <img className="Carousel" src={item.img} alt="Item" />
          </>
        ))
      }
    </Carousel>
  )
}



export default CarouselComponent