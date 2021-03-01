import React, {useEffect} from 'react'
import axios from 'axios';
function Logout() {
    
      useEffect(() => {

        const logOut = async () => {
            const res = await axios.get('/logout');
            console.log(res);
          }
          logOut();
      },[])

    return (
        <div>
            
        </div>
    )
}

export default Logout
