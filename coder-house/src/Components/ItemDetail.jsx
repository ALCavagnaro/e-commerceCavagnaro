import ItemCount from './ItemCount.jsx'


const ItemDetail =  ({ id='', name = '', description='', price= 0, thumbnail = '' , stock = ''}) => {
  return (
    <div className="card">
        <img className="Photo" src= {thumbnail} alt={thumbnail}/>
        <div className="name">{name}</div>
        <div className="price">$ {price}</div>
        <div>{description}</div>
        <ItemCount stock={stock} />
        <button className = 'BuyButton'>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail


