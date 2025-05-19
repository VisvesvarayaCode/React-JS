import React from "react";
import styled from 'styled-components';
function Home(){
       const Hello=styled.h1`
         color:blue;
         font-size:45px
         background-color:red;       
       `;

       const Card=styled.div`
           height: 300px;
           width: 150px;
           background-color:rgb(147, 211, 161);
           border: 1px solid #ccc;
           border-radius: 10px;
           display:flex;
           align-items:center;
           margin: 10px;
           padding:10px;
       `

    return(
        <>
        <Card>
          <Hello>Hello World! </Hello>
       </Card>
        </>
    )
}
export default Home;
