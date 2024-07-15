import { useState } from "react"




export default function App(){
  const [show  , setShow] = useState(false);
  const showCart = ()=>{
    setShow(!show)
  } 
  return(
    <>
    
   
    <button onClick={showCart}>show</button>
    {show &&(
   <div>
      <h1>hamid lwa3eer</h1>
      <h2>software engineer</h2>
      <h3>frontend developer</h3>
      <img src="/hamid.webp" width={200}/>
    </div>

  )}
    

    
    </>

  )
}


