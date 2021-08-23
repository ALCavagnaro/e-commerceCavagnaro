import ItemCount from './ItemCount.jsx'


const ItemDetail =  ({ id='', name = '', description='', price= 0, thumbnail = '' , stock = '', photo = ''}) => {
  return (
    <div className="card">
        <img className="Photo" src= {photo} alt={thumbnail}/>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
        <div>{description}</div>
        <ItemCount stock={stock} onAdd = {() => console.log('Agrego al carrito')}/>
    </div>
  );
}

export default ItemDetail


