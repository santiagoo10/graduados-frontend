// import decodeJwt from 'jwt-decode';
//
//
// const authProvider = {
//     login: ({ username, password }) =>  {
//         const request = new Request('http://localhost:83/oferta/public/login', {
//             method: 'POST',
//             body: JSON.stringify({ username, password }),
//             headers: new Headers({ 'Content-Type': 'application/json' }),
//         });
//         return fetch(request)
//             .then(response => {
//                 if (response.status < 200 || response.status >= 300) {
//                     throw new Error(response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(({ token }) => {
//                 localStorage.setItem('token', token);
//             });
//     },
//     logout: () => {
//         localStorage.removeItem('token');
//         return Promise.resolve();
//     },
//     checkAuth: () => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             const decodedToken = decodeJwt(token);
//             const tokenExpired =
//                 new Date().setUTCSeconds(decodedToken.exp) < new Date();
//             tokenExpired
//                 ? Promise.reject({ redirectTo: '/login' })
//                 : Promise.resolve();
//         } else {
//             return Promise.reject();
//         }
//     },
//     checkError: error => Promise.resolve(),
//     getPermissions: params => Promise.resolve(),
//     ...
// };

// export default authProvider;





import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_ERROR,
    AUTH_CHECK
} from 'react-admin';
import fetchHydra from "@api-platform/admin/lib/hydra/fetchHydra";

const authProvier = (type, params) => {

    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const {username} = params;
        const {password} = params;

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // accept all username/password combinations
        // return Promise.resolve();

        const loginUrl = process.env.REACT_APP_API_LOGIN;
        const request = new Request(loginUrl, {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
            // headers: new Headers({'Content-Type': 'application/json'})
        });
        return fetchHydra(
            request,
            {
            credentials: 'same-origin'
            }
            )
            .then(response => {
                // acá entra
                if (response.status < 200 || response.status >= 300) {
                    console.log("Credenciales invpalidas");
                    console.log(response.statusText);
                    throw new Error(response.statusText);
                }
                console.log("Credenciales válidas");
                console.log('====');
                let location = response.headers.get('Location');
                console.log(response.headers.location);
                console.log('====');
                console.log(location);
                console.log('====');
                console.log('====');
                return response.headers;
            }).then(
                ({token}) => {
                    // puede ir por acà el problema!!!
                    console.log("Entra por localstorage.");

                    console.log('este es el toquen');
                    console.log(token);
                    localStorage.setItem('username', username);
                    localStorage.setItem('token', token);
                    // window.location.replace('/');

                }
            );
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        // const status  = params.message.status;
        const {status} = params;
        if (status === 401 || status === 403) {
            console.log("Ocurrio un error");
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {

         // return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();


         return localStorage.getItem('username')
             ? Promise.resolve()
             : Promise.reject();
    }
    return Promise.reject('Unknown method');
};

export default authProvier;