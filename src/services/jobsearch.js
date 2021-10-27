const axios = require('axios');

const jobsearch =async () => {  
    console.log('inside fxn')

  
    const options = {
        method: 'GET',
        url: 'https://job-search4.p.rapidapi.com/linkedin/search',
        params: {query: 'Software Engineer', page: '1'},
        headers: {
          'x-rapidapi-host': 'job-search4.p.rapidapi.com',
          'x-rapidapi-key': 'dd1a406295msh9c4a0e30ba45ee7p1026b1jsnc49e0b061c6d'
        }
      };
      const res=await axios.request(options);
      return res.data;
      
};



export{ jobsearch };