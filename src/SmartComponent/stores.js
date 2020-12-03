import React from "react";
import {
  InputGuesser,
  FieldGuesser,
  ListGuesser,
  ShowGuesser,
  EditGuesser, CreateGuesser
} from '@api-platform/admin';
import {
    BooleanInput,
    AutocompleteInput,
    Create,
    FormTab,
    NumberInput,
    ReferenceInput,
    TabbedForm,
    TextInput,
    PasswordInput, ReferenceField, TextField,
} from "react-admin";


 export const StoreCreate = props => (
     <Create{...props} title={"Crear Patrocinador"}>
         <TabbedForm
             variant={"standard"}
             margin={"normal"}
         >
             <FormTab label={"Patrocinador"}>
                 <InputGuesser source={"name"} label={"Razón Social"}/>
                 <InputGuesser source={"description"} label={"Descripción"}/>
                 <InputGuesser source={"email"} label={"Email"}/>
                 <InputGuesser source={"phone"} label={"Teléfono"}/>

               <ReferenceInput
                 source="owner"
                 reference="owners"
                 label="Responsable"
                 filterToQuery={(searchText) => ({ name: searchText })}
               >
                 <AutocompleteInput optionText="name" />
               </ReferenceInput>



             </FormTab>

             <FormTab label={"Domicilio"}>
                 <TextInput source="address.name" label={"Nombre"}/>
                 <TextInput source="address.street" label={"Calle"}/>
                 <NumberInput source="address.number" label={"Número"}/>
                 <TextInput
                     source="address.phoneNumber"
                     label="Número de teléfono"/>
             </FormTab>



         </TabbedForm>
     </Create>
 );

export const StoreList = props => (
    <ListGuesser {...props} title={"Patrocinadores"}>
        <FieldGuesser source={"name"} label={"Razón Social"}/>
        <FieldGuesser source={"phone"} label={"Teléfono"}/>
        <ReferenceField label="Contacto" source="owner" reference="owners">
            <TextField source="username" />
        </ReferenceField>
    </ListGuesser>
);

export const StoreShow = props => (
    <ShowGuesser {...props} title={"Ver Patrocinador"}>
        <FieldGuesser source={"name"} addLabel={true} label={"Razón Social"}/>
        <FieldGuesser source={"description"} addLabel={true} label={"Descripción"}/>
        <FieldGuesser source={"email"} addLabel={true} label={"Email"}/>
        <FieldGuesser source={"phone"} addLabel={true} label={"Teléfono"}/>
        <FieldGuesser source={"address"} addLabel={true} label={"Domicilio"}/>
        <FieldGuesser source={"owner"} addLabel={true} label={"Contacto"}/>
        <FieldGuesser source={"createdAt"} addLabel={true} label={"Creado"}/>
        <FieldGuesser source={"updatedAt"} addLabel={true} label={"Actualizado"}/>
    </ShowGuesser>
);

export const StoreEdit = props => (
    <EditGuesser {...props} title={"Editar Patrocinador"}>
        <InputGuesser source={"name"} label={"Razón Social"}/>
        <InputGuesser source={"description"} label={"Descripción"}/>
        <InputGuesser source={"email"} label={"Email"}/>
        <InputGuesser source={"phone"} label={"Teléfono"}/>
    </EditGuesser>
);
