const axios = require('axios');



const viewResult = async (email)=>{
    console.log('view result',email);
    let obj={email:email};
    console.log(obj);
    const res=await axios.post(
        `https://quiz-app-pc.herokuapp.com/resultforuser`,  
        obj ,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem( 'token' )
            }
        }  
       
    )
    console.log('response in usersforresult',res);
     
    return res;
}

export default viewResult;