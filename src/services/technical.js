const axios = require('axios');




const getques =async () => {  
    console.log('inside fxn')

  const res=await axios.get(
        `https://quiz-app-pc.herokuapp.com/test/technical`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem( 'token' )
            }
        }    
       
    )
    console.log('response in users',res);
     
    return res;
};

const resultsubmitandcheck=async (submitted_result)=>{
    console.log('inside rsac');
    console.log('going to send this data technical',submitted_result);

const accuired_result=await axios.post(
    `https://quiz-app-pc.herokuapp.com/test/technical/result`,
    submitted_result   ,
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem( 'token' )
        }
    }  
   
)

return accuired_result;

}

export{ getques,resultsubmitandcheck };