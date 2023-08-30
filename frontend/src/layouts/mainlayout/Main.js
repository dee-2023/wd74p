import { Outlet } from 'react-router-dom'
import './layout.css';

const Main = ( {componentData} ) => {



    return(

       <main className='mtop'>

           <Outlet />
           
       </main>
   
      )
     
   
   }
   
   export default Main;