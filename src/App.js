import React from "react";
import {
    HydraAdmin,
    ResourceGuesser
} from "@api-platform/admin";
import authProvider from './authProvider';
import MyLoginPage from './MyLoginPage';

const entrypoint = process.env.REACT_APP_API_ENTRYPOINT;

export default props => (
    <HydraAdmin entrypoint={ entrypoint } authProvider={ authProvider } loginPage = {MyLoginPage}>

        <ResourceGuesser name="users" />
        <ResourceGuesser name="professions" />
        <ResourceGuesser name="academic_units" />
        <ResourceGuesser name="sales" />
        <ResourceGuesser name="sale_types" />
        <ResourceGuesser name="stores" />
        <ResourceGuesser name="people" />
        <ResourceGuesser name="addresses" />
        <ResourceGuesser name="zones" />
        <ResourceGuesser name="cities" />
        <ResourceGuesser name="provinces" />
        <ResourceGuesser name="countries" />
    </HydraAdmin>

);


