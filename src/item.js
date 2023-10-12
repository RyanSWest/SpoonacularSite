
import './App.css';





const Item =({title, image,id} )=>{


return(
  <div className='item'> 
    <h1>ITEM</h1>
 <h1>{title}</h1>
  <h2>{id}</h2>
 <img src = {image}/>
 </div>
)



}

export default Item;