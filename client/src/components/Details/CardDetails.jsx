import React from 'react';
import style from './CardDetails.module.css'

export default function CardDetails ({id,name, image, type, life, force, defence, velocity, height, weight}){
 return (
     <div>
     <div>
       <div>
         <img src={image} alt="imag not found"/>   
       </div>
     </div>
       <div>
        <div>
         <p>{id} </p> 
        </div>
        <div>
         <p>{name} </p> 
        </div>
       <div>{type ? type.map((types) => <p className={style.p1}>{types}</p>) : null}</div>
       <div>
         <p>{life}</p> 
       
         <p>{force}</p> 
      
         <p>{defence}</p> 
        
         <p>{velocity}</p> 
        </div>
       <div>
         <p>{height}</p> 

         <p>{weight}</p> 
        </div>
     </div>
     </div>
 )
}


