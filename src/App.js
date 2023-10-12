import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Item from './item';
import {useState, useEffect} from "react"
 

// Shakti#8
function App() {
  const apiKey = `9152e467331c4f9d9665f947f68e98fc`

  const ZapiKey ='8c99e79f6amsh00b7af7d7f9b34fp193b00jsn849220d457a9'

  
  const cuisines =['','Asian','American','British','Caribbean','Chinese','French','Italian','Indian','Japanese','Korean','Mediterranean','Mexican','Thai','Vietnamese']



  const [data, setData]=useState([])
  const [query,setQuery]= useState( '')
  
  const [recipies, setRecipies]= useState([])
  const[cuisine, setCuisine]=useState('')
  const [cuisineList, setCuisineList]= useState([])
  let example2= `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&cuisine=`
  

  let example ='https://api.spoonacular.com/recipes/random?apiKey=9152e467331c4f9d9665f947f68e98fc'


  const getRecipe =()=>{
   
  axios.get(example)
  .then(res=>{
    console.log("PHO",res.data )

    setData(res.data.recipes[0])
  })
}

  console.log("DATA+++>",data)

  const newRecipe=()=>{

    axios.get(example2)
    .then(res => {
      setRecipies(res.data.results)
      console.log("YO!!",res.data)
    })
  
  }

  const getCuisine =()=>{
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&cuisine=${cuisine}`)
    .then(res=>{
      console.log("CUISINES!!!+++", res.data )
      setCuisineList(res.data.results)
      console.log("HEY MOFO!!", cuisineList)
    })

  }
   


   
   
 console.log("QQ", cuisineList)

  return (
     <div> <p>{query}</p>
       <button onClick ={getRecipe}>getRandom</button>
      <form  
      type ='submit'
      onSubmit={newRecipe}
       
      >

        <input
        placeholder ='enter a recipe'
        name = 'query'
       
      value=  {query}
      onChange={(e)=> setQuery(e.target.value)}
        
        
        /> 
        <button
         type ='submit'>Submit</button>

      </form>

      <button onClick ={newRecipe}>CLICK</button>
      <h1>{data.title}</h1>
     <img src= {data.image}/>
      <p>{data.instructions}</p> 

      <div>
       <h2>{cuisine}</h2>
      <form type="submit" onSubmit={getCuisine}
          
        
        >
          <label htmlFor="set cuisine">
           Select Cuisine
            <select
              id="type"
              value={cuisine}
              onChange={e => setCuisine(e.target.value)}
              onBlur={getCuisine}
            >
               {cuisines.map(c => (
               
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
          <button type ='submit'>CUISINE</button>

          </form>
          <button onClick={getCuisine}>TRY CLICK</button>

        <div className='container'>
          
        </div>
      { recipies.map(e =>
      <> 
      <h1>{e.title}</h1>
        <Item className ='item'
        id ={e.id}
         title = {e.title}
        image ={e.image}
        />
         </>
       )}

     


      </div>

      <div>


      {cuisineList.map(e=>{
       return ( <>
         {e.title}
         <Item className ='item'
        id ={e.id}
         title = {e.title}
        image ={e.image}
        />
         </>)
       })}
      </div>
       
     </div>
  );
}


export default App;
