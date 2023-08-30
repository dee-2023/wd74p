import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './layout.css';

const RootLayout = () =>{

    return(
        <div className="root-main">
          
          <Header>
           
          </Header>  
           

          <Main />
    
          <Footer></Footer>
          
        </div>
    )
}

export default RootLayout
