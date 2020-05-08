import React from "react";
<<<<<<< HEAD
import {
    HydraAdmin,
    ResourceGuesser
} from "@api-platform/admin";
import authProvider from './authProvider';
import {CountryCreate, CountryList, CountryShow, CountryEdit} from "./SmartComponent/countries";
import {ProvinceList, ProvinceShow, ProvinceEdit, ProvinceCreate} from "./SmartComponent/provinces";
import {CityCreate, CityEdit, CityList, CityShow} from "./SmartComponent/cities";
import {ZoneList, ZoneEdit, ZoneShow, ZoneCreate} from "./SmartComponent/zones";
import {StoreCreate, StoreList, StoreShow, StoreEdit} from "./SmartComponent/stores";
import {
    AcademicUnitCreate,
    AcademicUnitList,
    AcademicUnitEdit,
    AcademicUnitShow
} from "./SmartComponent/academic_units";
import {UserList, UserCreate, UserShow} from "./SmartComponent/users";
import {ProfessionShow, ProfessionEdit, ProfessionCreate, ProfessionList} from "./SmartComponent/professions";
import {SaleTypeCreate, SaleTypeList, SaleTypeShow, SaleTypeEdit} from "./SmartComponent/sale_types";
import {SaleShow, SaleEdit, SaleCreate, SaleList} from "./SmartComponent/sales";
import {GraduateList, GraduateShow} from "./SmartComponent/graduates";
import {AdminCreate, AdminList, AdminShow, AdminEdit} from "./SmartComponent/admins";
import {OwnerEdit, OwnerList, OwnerShow} from "./SmartComponent/owners";
import MyLoginPage from "./Componet/MyLoginPage";
import UserIcon from '@material-ui/icons/Group';
import PublicIcon from '@material-ui/icons/Public';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import SchoolIcon from '@material-ui/icons/School';
import StoreIcon from '@material-ui/icons/Store';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import CategoryIcon from '@material-ui/icons/Category';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import spanishMessages from '@blackbox-vision/ra-language-spanish';
import MyLayout from "./Componet/MyLayout";


const entrypoint = process.env.REACT_APP_API_ENTRYPOINT;
const i18nProvider = polyglotI18nProvider(() => spanishMessages, 'es');

// eslint-disable-next-line react/display-name
export default props => (
    <HydraAdmin
        layout={MyLayout}
        title={"Aplicación de Beneficios"}
        entrypoint={entrypoint}
        loginPage={MyLoginPage}
        authProvider={authProvider}
        locale={"es"}
        i18nProvider={i18nProvider}
    >


        <ResourceGuesser name={"admins"}
                         edit={AdminEdit}
                         list={AdminList}
                         show={AdminShow}
                         create={AdminCreate}
                         options={{label: 'Administradores'}}
                         icon={SupervisorAccountIcon}
        />
        <ResourceGuesser name={"graduates"} list={GraduateList} show={GraduateShow} options={{label: 'Graduados'}}/>
        <ResourceGuesser name="users" create={UserCreate} list={UserList} show={UserShow} icon={UserIcon}/>
        <ResourceGuesser name="sales"
                         list={SaleList}
                         create={SaleCreate}
                         edit={SaleEdit}
                         show={SaleShow}
                         icon={LoyaltyIcon}
                         options={{label: 'Beneficios'}}
        />
        <ResourceGuesser name="sale_types"
                         icon={CategoryIcon}
                         show={SaleTypeShow}
                         list={SaleTypeList}
                         edit={SaleTypeEdit}
                         create={SaleTypeCreate}
                         options={{label: 'Categorias de Beneficios'}}
        />

        <ResourceGuesser name={"owners"}
                         options={{label: 'Contacto de patrocinadores'}}
                         show={OwnerShow}
                         list={OwnerList}
                         edit={OwnerEdit}
        />
        <ResourceGuesser name="stores"
                         create={StoreCreate}
                         list={StoreList}
                         show={StoreShow}
                         edit={StoreEdit}
                         icon={StoreIcon}
                         options={{label: 'Patrocinadores'}}
        />
        <ResourceGuesser name="professions"
                         list={ProfessionList}
                         create={ProfessionCreate}
                         edit={ProfessionEdit}
                         show={ProfessionShow}
                         options={{label: 'Profesiones'}}
        />
        <ResourceGuesser name="academic_units"
                         show={AcademicUnitShow}
                         list={AcademicUnitList}
                         create={AcademicUnitCreate}
                         edit={AcademicUnitEdit}
                         icon={SchoolIcon}
                         options={{label: 'Unidades Académicas'}}
        />
        <ResourceGuesser name="zones"
                         show={ZoneShow}
                         create={ZoneCreate}
                         list={ZoneList}
                         edit={ZoneEdit}
                         options={{label: 'Zonas'}}
        />
        <ResourceGuesser name="cities"
                         list={CityList}
                         show={CityShow}
                         create={CityCreate}
                         edit={CityEdit}
                         icon={LocationCityIcon}
                         options={{label: 'Ciudades'}}
        />
        <ResourceGuesser name="provinces"
                         create={ProvinceCreate}
                         edit={ProvinceEdit}
                         show={ProvinceShow}
                         list={ProvinceList} options={{label: 'Provincias'}}
        />
        <ResourceGuesser name="countries"
                         create={CountryCreate}
                         list={CountryList}
                         show={CountryShow}
                         edit={CountryEdit}
                         icon={PublicIcon}
                         options={{label: 'Paises'}}
        />
    </HydraAdmin>

);


=======
import { HydraAdmin } from "@api-platform/admin";

// Replace with your own API entrypoint
// For instance if https://example.com/api/books is the path to the collection of book resources, then the entrypoint is https://example.com/api
export default () => (
    // <HydraAdmin entrypoint="https://demo.api-platform.com" />
    <HydraAdmin entrypoint="http://localhost:83/oferta/public/api" />
);
>>>>>>> a86cb4c99d4f3d8e8db79dc9914fc8bc87b9d51f