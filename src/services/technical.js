const axios = require('axios');




const getques =async () => {  
    console.log('inside fxn')

  const res=await axios.get(
        `https://quiz-app-pc.herokuapp.com//test/technical`,   
       
    )
    console.log('response in users',res);
     
    return res;
};

const resultsubmitandcheck=async (submitted_result)=>{
    console.log('inside rsac');
    console.log('going to send this data',submitted_result);

const accuired_result=await axios.post(
    `https://quiz-app-pc.herokuapp.com/test/technical/result`,
    submitted_result   
   
)

return accuired_result;

}

export{ getques,resultsubmitandcheck };