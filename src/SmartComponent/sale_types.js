import React from "react";
import {
    InputGuesser,
    FieldGuesser,
    ListGuesser,
    ShowGuesser,
    EditGuesser,
    CreateGuesser
} from "@api-platform/admin";
import {
    // ReferenceInput,
    // SelectInput,
    ImageInput,
    ImageField
} from "react-admin";

export const SaleTypeList = props => (
    <ListGuesser {...props} title={"Categorias de beneficios"}>
        <FieldGuesser source={"name"} label={"Nombre"}/>
        <FieldGuesser source={"description"} label={"Descripción"} />
    </ListGuesser>
);

export const SaleTypeShow = props => (
    <ShowGuesser {...props}>
        <FieldGuesser source={"name"} addLabel={true} label={"Nombre"}/>
        <FieldGuesser source={"description"} addLabel={true} label={"Descripción"}/>
        <ImageField source="image" title="Imágen" />
        <FieldGuesser source={"createdAt"} addLabel={true} label={"Creado"} />
        <FieldGuesser source={"updatedAt"} addLabel={true} label={"Actualizado"}/>
    </ShowGuesser>
);

export const SaleTypeEdit = props => (
    <EditGuesser {...props}>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"description"} label={"Descripción"}/>
    </EditGuesser>
);


export const SaleTypeCreate = props => (
    <CreateGuesser {...props}>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"description"} label={"Descripción"}/>
        <ImageInput source="media_objects" label="Imagen" accept="image/*">
            <ImageField source="image" title="title" />
        </ImageInput>

    </CreateGuesser>
);

