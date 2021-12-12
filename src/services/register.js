const axios = require('axios');


const registration =async (body) => {  
    console.log('inside fxn',body)

    


  const res=await axios.post(
        `https://quiz-app-pc.herokuapp.com/auth/register`,
        body     
               
       
    )
    console.log('response in users',res);
     
    return res;
};


export {registration}