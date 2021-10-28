import axios from 'axios';

import { successHandler, errorHandler } from './helper';


export const login = ( credentials ) => {
    return axios.post(
                `https://quiz-app-pc.herokuapp.com/auth/login`,
                credentials,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
                .then( successHandler )
                .catch( errorHandler );
};