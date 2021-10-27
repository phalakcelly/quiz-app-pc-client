const axios = require('axios');

const userSearch = async ()=>{
    console.log('before');
    const res=await axios.get(
        `http://localhost:3000/admin/getusers`,   
       
    )
    console.log('response in users',res);
     
    return res;

}

const deleteUser = async (id)=>{
    const res=await axios.post(
        `http://localhost:3000/admin/deleteuser`,  
        {id:id} 
       
    )
    console.log('response in users',res);
     
    return res;
}

export {userSearch,deleteUser};