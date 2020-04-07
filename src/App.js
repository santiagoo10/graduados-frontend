import React from "react";
import {
    HydraAdmin,
    ResourceGuesser
} from "@api-platform/admin";
import authProvider from './authProvider';
import MyLoginPage from './MyLoginPage';
import { CountryCreate, CountryList, CountryShow, CountryEdit } from "./Controller/countries";
import { ProvinceList, ProvinceShow, ProvinceEdit, ProvinceCreate} from "./Controller/provinces";
import { CityCreate, CityEdit, CityList, CityShow} from "./Controller/cities";
import { ZoneList, ZoneEdit, ZoneShow} from "./Controller/zones";
import { StoreCreate, StoreList } from "./Controller/stores";
import { AcademicUnitCreate, AcademicUnitList } from "./Controller/academic_units";
import { UserList, UserCreate } from "./Controller/users";
import { AddressList, AddressCreate, AddressShow, AddressEdit} from "./Controller/addresses";


const entrypoint = process.env.REACT_APP_API_ENTRYPOINT;


// eslint-disable-next-line react/display-name
export default props => (
    <HydraAdmin entrypoint={ entrypoint } authProvider={ authProvider } loginPage = {MyLoginPage}>

        <ResourceGuesser name="users" create={UserCreate} list={UserList} />
        <ResourceGuesser name="professions" />
        <ResourceGuesser name="sales" options={{ label: 'Beneficios' }} />
        <ResourceGuesser name="sale_types"  options={{ label: 'Categorias de Beneficios' }} />
        <ResourceGuesser name="stores" create={StoreCreate} list={StoreList} options={{ label: 'Patrocinadores' }} />
        <ResourceGuesser name="people" />
        <ResourceGuesser name="addresses" show={AddressShow} edit={AddressEdit} list={AddressList} create={AddressCreate} />
        <ResourceGuesser name="academic_units"
                         list={AcademicUnitList}
                         create={AcademicUnitCreate} options={{ label: 'Unidades Académicas' }}/>
        <ResourceGuesser name="zones"  show={ZoneShow} list={ZoneList} edit={ZoneEdit} options={{ label: 'Zonas' }}/>
        <ResourceGuesser name="cities"
                         list={CityList}
                         show={CityShow}
                         create={CityCreate}
                         edit={CityEdit} options={{ label: 'Ciudades' }}/>
        <ResourceGuesser name="provinces"
                         create={ProvinceCreate}
                         edit={ProvinceEdit}
                         show={ProvinceShow}
                         list={ProvinceList} options={{ label: 'Provincias' }} />
        <ResourceGuesser name="countries"
                         create={CountryCreate}
                         list={CountryList}
                         show={CountryShow}
                         edit={CountryEdit} options={{ label: 'Paises' }} />
    </HydraAdmin>

);


