import MemberHeader from './MemberHeader'
import MemberContent from './MemberContent'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


const MemberLayout = () =>{
    const navigate = useNavigate();

    useEffect( ()=> {
        let authLogin = localStorage.getItem('isLog');  
        console.log(authLogin);

        if ( authLogin === 'false') {
        //    localStorage.setItem('errorInLogin', 'You need to login');
            navigate('/login'); 
        } else {
            let token = localStorage.getItem('token');
        }
    })


    return(
        <div className="member-main">
          
          <MemberHeader />  

          <MemberContent />
          
        
          
        </div>
    )
}

export default MemberLayout
