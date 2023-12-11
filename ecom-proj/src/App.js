import Products  from "./components/products/products.js";
import Header from "./components/products/Header/header.js"
import SubHeader from  "./components/products/SubHeader/SubHeader.js"


const  App=()=> {

  return(
    <div>
  <Header></Header>
  <SubHeader></SubHeader>
  <Products></Products>
  </div>
  )
}
export default App;
