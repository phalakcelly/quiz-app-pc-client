const axios = require('axios');

const userSearch = async ()=>{
    console.log('before');
    const res=await axios.get(
        `https://quiz-app-pc.herokuapp.com/admin/getusers`,   
       
    )
    console.log('response in users',res);
     
    return res;

}

const deleteUser = async (id)=>{
    const res=await axios.post(
        `https://quiz-app-pc.herokuapp.com/admin/deleteuser`,  
        {id:id} 
       
    )
    console.log('response in users',res);
     
    return res;
}

export {userSearch,deleteUser};