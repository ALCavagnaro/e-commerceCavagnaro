
import React from 'react';
import Bufanda from '../Statics/Images/bufanda.jpg'
import Campera from '../Statics/Images/campera.jpg'
import Jeans from '../Statics/Images/jeans.jpg'
import Vestido from '../Statics/Images/vestido.jpg'

    const Data = [
        {
          id: "1" ,
          name: "Bufanda",
          price: "500",
          photo: <img className="Photo" src={Bufanda} alt="Bufanda"/>,
          stock: "3",
          Categoría: "Mujer",
        },
    
        {
          id: "2",
          name: "Campera",
          price: "1000",
          photo: <img className="Photo" src={Campera} alt="Campera"/>,
          stock: "4",
          Categoría: "Hombre",
        },
    
        {
          id: "3",
          name: "Jeans",
          price: "850",
          photo: <img className="Photo" src={Jeans} alt="Jeans"/>,
          stock: "4",
          Categoría: "Hombre",
        },
    
        {
          id: "4",
          name: "Vestido",
          price: "690",
          photo: <img className="Photo" src={Vestido} alt="Vestido"/>,
          stock: "1",
          Categoría: "Mujer",

        },
      ]; 



export default Data