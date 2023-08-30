import MemberHeader from './MemberHeader'
import MemberContent from './MemberContent'
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const MemberLayout = () =>{
  const navigate = useNavigate();
 
    useEffect( ()=> {
        let checkLog = localStorage.getItem('isLog');
        if (checkLog ==='false'){
          navigate('/login')
        }
      }, []);


    return(
        <div className="member-main">
          
          <MemberHeader /> 
          

          <MemberContent />
          
        
          
        </div>
    )
}

export default MemberLayout
