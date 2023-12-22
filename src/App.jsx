import './index.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout.jsx";A



function App() {

  return (
   <>
     <Routes>
       <Route path="/" element={<div>Home</div>}>
         <Layout/>
       </Route>
     </Routes>
   </>
  )
}

export default App
