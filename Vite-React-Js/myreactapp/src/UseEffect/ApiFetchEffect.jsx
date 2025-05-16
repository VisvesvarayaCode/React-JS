import React, {useState, useEffect} from "react";
function AppFetchEffect(){
    const [data, setData] = useState([]);
    useEffect(()=>{
         fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((datas)=>{
            setData(datas);
            console.log(datas);
            
         }).catch((error)=>{
            console.error("Something went wrong", error);
         })
         
    },[])

    return(
        <div>
            <h1>Product List</h1>
             {
                data.length===0?(<p>Loading...</p>):(
                    data.map((item)=>(
                        <div key={item.id} style={{border:"1px solid black", padding:"10px", borderRadius:"10px"}}>
    
                           <h2>{item.title}</h2>
                           <img src={item.image} width="150" alt={item.title} />
                           <p>Price: {item.price}</p>
                        </div>
                    ))
                )
             }
        </div>
    )
}
export default AppFetchEffect;