import React from "react";
import {
    HydraAdmin,
    ResourceGuesser
} from "@api-platform/admin";
import authProvider from './authProvider';
import MyLoginPage from './MyLoginPage';
import { CountryList } from "./countries";
import { ProvinceList} from "./provinces";
import { CityList} from "./cities";
import { ZoneList} from "./zones";
import {
    StoreCreate,
    StoreList
} from "./stores";

const entrypoint = process.env.REACT_APP_API_ENTRYPOINT;






export default props => (
    <HydraAdmin entrypoint={ entrypoint } authProvider={ authProvider } loginPage = {MyLoginPage}>

        <ResourceGuesser name="users" />
        <ResourceGuesser name="professions" />
        <ResourceGuesser name="academic_units" options={{ label: 'Unidades Académicas' }}/>
        <ResourceGuesser name="sales" options={{ label: 'Beneficios' }} />
        <ResourceGuesser name="sale_types"  options={{ label: 'Categorias de Beneficios' }} />
        <ResourceGuesser name="stores" create={StoreCreate} list={StoreList} options={{ label: 'Patrocinadores' }} />
        <ResourceGuesser name="people" />
        <ResourceGuesser name="addresses" />
        <ResourceGuesser name="zones"  list={ZoneList} options={{ label: 'Zonas' }}/>
        <ResourceGuesser name="cities" list={CityList} options={{ label: 'Ciudades' }}/>
        <ResourceGuesser name="provinces" list={ProvinceList} options={{ label: 'Provincias' }} />
        <ResourceGuesser name="countries" list={CountryList} options={{ label: 'Paises' }} />
    </HydraAdmin>

);


