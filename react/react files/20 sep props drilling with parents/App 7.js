import { createContext } from "react";
import  CompA from "./CompA";
export const context=createContext()
function App(){
  
  let uid="Mouri Tech"
 return(
  <>
  <context.Provider value={uid}>
 <CompA/>
</context.Provider>
  </>
 )
}
export default App
