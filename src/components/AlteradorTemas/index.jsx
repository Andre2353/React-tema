import { useState } from "react";
import "./Alternador.css"

export default function AltenadorTema(){
   const[isescuro,setIsecuro]= useState(false)
   const[mostrarDica, setMostrarDica] = useState(false)

   function AltenarTema(){
    setIsecuro(anterior => !anterior);
   }
   function AltenarDica(){
    setMostrarDica(anterior => !anterior);
   }
}