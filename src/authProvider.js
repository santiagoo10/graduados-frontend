import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_CHECK,
  AUTH_GET_PERMISSIONS,
} from "react-admin";
import jwt_decode from "jwt-decode";

// Change this to be your own login check route.
const login_uri = process.env.REACT_APP_API_ENTRYPOINT + "/login_check";

export default (type, params) => {
  console.log(login_uri);
  switch (type) {
    case AUTH_LOGIN:
      const { username, password } = params;
      const request = new Request(`${login_uri}`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: new Headers({ "Content-Type": "application/json" }),
      });

      return fetch(request)
        .then((response) => {
          if (response.status < 200 || response.status >= 300)
            throw new Error(response.statusText);

          return response.json();
        })
        .then(({ token }) => {
          localStorage.setItem("token", token); // The JWT token is stored in the browser's local storage
          const decodedToken = jwt_decode(token);
          localStorage.setItem("role", decodedToken.roles); // The Role is stored in the browser's local storage
          window.location.replace("/");
        });

    case AUTH_LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      window.location.replace("/");
      break;

    case AUTH_ERROR:
      if (401 === params.status || 403 === params.status) {
        localStorage.removeItem("token");

        return Promise.reject();
      }
      break;

    case AUTH_CHECK:
      return localStorage.getItem("token")
        ? Promise.resolve()
        : Promise.reject();

    case AUTH_GET_PERMISSIONS:
      return localStorage.getItem("role")
        ? Promise.resolve()
        : Promise.reject();

    default:
      return Promise.resolve();
  }
};
