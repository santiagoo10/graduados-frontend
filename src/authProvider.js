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
        const {email} = params;
        const {password} = params;

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // accept all username/password combinations
        return Promise.resolve();

        // const request = new Request('http://localhost:83/oferta/public/login', {
        //     method: 'POST',
        //     body: JSON.stringify({email, password}),
        //     headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
        // });
        // return fetchHydra(
        //     request,
        //
        //     {
        //     credentials: 'same-origin'
        //     }
        //     )
        //     .then(response => {
        //         acá entra
                // if (response.status < 200 || response.status >= 300) {
                //     console.log(response.statusText);
                //     throw new Error(response.data);
                // }
                // console.log(response.data);
                // return response.json();
            // }).then(
            //     ({token}) => {
            //
            //         console.log("Entra por localstorage.");
            //         localStorage.setItem('token', token);
            //     }
            // );

    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const {status} = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unknown method');
};

export default authProvier;
