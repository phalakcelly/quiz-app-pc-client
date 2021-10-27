const axios = require('axios');




const getques =async () => {  
    console.log('inside fxn')

  const res=await axios.get(
        `http://localhost:3000`,   
       
    )
    console.log('response in users',res);
     
    return res;
};

const resultsubmitandcheck=async (submitted_result)=>{
    console.log('inside rsac');
    console.log('going to send this data',submitted_result);

const accuired_result=await axios.post(
    `http://localhost:3000/result`,
    submitted_result   
   
)

return accuired_result;

}

export{ getques,resultsubmitandcheck };