const axios = require('axios');



const viewResult = async (email)=>{
    console.log('view result',email);
    let obj={email:email};
    console.log(obj);
    const res=await axios.post(
        `http://localhost:3000/resultforuser`,  
        obj 
       
    )
    console.log('response in usersforresult',res);
     
    return res;
}

export default viewResult;