import React from "react";
import {
    HydraAdmin,
    ResourceGuesser
} from "@api-platform/admin";
import authProvider from './authProvider';
import MyLoginPage from './MyLoginPage';
import { CountryCreate, CountryList, CountryShow, CountryEdit } from "./Components/countries";
import { ProvinceList, ProvinceShow, ProvinceEdit, ProvinceCreate} from "./Components/provinces";
import { CityCreate, CityEdit, CityList, CityShow} from "./Components/cities";
import { ZoneList, ZoneEdit, ZoneShow, ZoneCreate} from "./Components/zones";
import { StoreCreate, StoreList } from "./Components/stores";
import { AcademicUnitCreate, AcademicUnitList, AcademicUnitEdit, AcademicUnitShow } from "./Components/academic_units";
import { UserList, UserCreate, UserShow } from "./Components/users";
import { AddressList, AddressCreate, AddressShow, AddressEdit} from "./Components/addresses";
import { PersonEdit, PersonList } from "./Components/people";
import { ProfessionShow, ProfessionEdit, ProfessionCreate, ProfessionList} from "./Components/professions";
import UserIcon from '@material-ui/icons/Group';
import PublicIcon from '@material-ui/icons/Public';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import SchoolIcon from '@material-ui/icons/School';
import StoreIcon from '@material-ui/icons/Store';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import CategoryIcon from '@material-ui/icons/Category';









const entrypoint = process.env.REACT_APP_API_ENTRYPOINT;


// eslint-disable-next-line react/display-name
export default props => (
    <HydraAdmin  entrypoint={ entrypoint } authProvider={ authProvider } loginPage = {MyLoginPage}>
        <ResourceGuesser name="addresses"
                         show={AddressShow}
                         edit={AddressEdit}
                         list={AddressList}
                         create={AddressCreate} />
        <ResourceGuesser name="people" list={PersonList} edit={PersonEdit} />


        <ResourceGuesser name="users" create={UserCreate} list={UserList} show={UserShow} icon={UserIcon}/>
        <ResourceGuesser name="sales" icon={LoyaltyIcon} options={{ label: 'Beneficios' }} />
        <ResourceGuesser name="sale_types" icon={CategoryIcon} options={{ label: 'Categorias de Beneficios' }} />
        <ResourceGuesser name="stores"
                         create={StoreCreate}
                         list={StoreList}
                         icon={StoreIcon}
                         options={{ label: 'Patrocinadores' }} />

        <ResourceGuesser name="professions"
                         list={ ProfessionList }
                         create={ProfessionCreate}
                         edit={ProfessionEdit}
                         show={ProfessionShow}
                         options={{ label: 'Profesiones'}}/>
        <ResourceGuesser name="academic_units"
                         show={AcademicUnitShow}
                         list={AcademicUnitList}
                         create={AcademicUnitCreate}
                         edit={AcademicUnitEdit}
                         icon={SchoolIcon}
                         options={{ label: 'Unidades Académicas' }}/>
        <ResourceGuesser name="zones"
                         show={ZoneShow}
                         create={ZoneCreate}
                         list={ZoneList}
                         edit={ZoneEdit} options={{ label: 'Zonas' }}/>
        <ResourceGuesser name="cities"
                         list={CityList}
                         show={CityShow}
                         create={CityCreate}
                         edit={CityEdit}
                         icon={LocationCityIcon}
                         options={{ label: 'Ciudades' }}/>
        <ResourceGuesser name="provinces"
                         create={ProvinceCreate}
                         edit={ProvinceEdit}
                         show={ProvinceShow}
                         list={ProvinceList} options={{ label: 'Provincias' }} />
        <ResourceGuesser name="countries"
                         create={CountryCreate}
                         list={CountryList}
                         show={CountryShow}
                         edit={CountryEdit}
                         icon={PublicIcon}
                         options={{ label: 'Paises' }} />
    </HydraAdmin>

);


