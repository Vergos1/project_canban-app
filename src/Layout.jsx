import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header.jsx";



const Layout = () => {
  return (
   <>
     <Header/>
     <main>
       <Outlet/>
     </main>
     {/*<Footer/>*/}
   </>
  )
}
export default Layout;