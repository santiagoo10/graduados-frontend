import React from "react";
import {
    HydraAdmin,
    ResourceGuesser,
    ListGuesser,
    FieldGuesser
} from "@api-platform/admin";
import authProvider from './authProvider';
import MyLoginPage from './MyLoginPage';

const entrypoint = process.env.REACT_APP_API_ENTRYPOINT;


const CountryList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"code"} />
        <FieldGuesser source={"name"} />
    </ListGuesser>
);

const ProvinceList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"code"} />
        <FieldGuesser source={"name"} />
        <FieldGuesser source={"abbreviation"} />
        <FieldGuesser source={"country"} />
    </ListGuesser>
);


const CityList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"name"} />
        <FieldGuesser source={"createdAt"} />
        <FieldGuesser source={"updatedAt"} />
        <FieldGuesser source={"province"} />
    </ListGuesser>
);

const ZoneList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"code"} />
        <FieldGuesser source={"name"} />
        <FieldGuesser source={"type"} />
        <FieldGuesser source={"city"} />
    </ListGuesser>
);

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
        <ResourceGuesser name="zones"  list={ZoneList}/>
        <ResourceGuesser name="cities" list={CityList} />
        <ResourceGuesser name="provinces" list={ProvinceList} />
        <ResourceGuesser name="countries" list={CountryList}  />
    </HydraAdmin>

);


