import React from "react";
import { ShowGuesser, EditGuesser, CreateGuesser, InputGuesser, FieldGuesser, ListGuesser} from "@api-platform/admin";

export const SaleList = props => (
    <ListGuesser {...props} title={"Beneficios"}>
        <FieldGuesser source={"name"} label={"Nombre"} />
        <FieldGuesser source={"description"} label={"Descripción"} />
        <FieldGuesser source={"price"} label={"Precio"} />
        <FieldGuesser source={"saleType"} label={"Categoria de Beneficio"} />
        <FieldGuesser source={"store"} label={"Patrocinador"} />
    </ListGuesser>
);

export const SaleCreate = props => (
    <CreateGuesser {...props} title={"Crear Beneficio"}>
            <InputGuesser source={"name"} label={"Nombre"}/>
            <InputGuesser source={"description"} multiline label={"Descripción"}/>
            <InputGuesser source={"conditionOfSale"} label={"Condición de venta"} />
            <InputGuesser source={"price"} label={"Precio"}/>
            <InputGuesser source={"discount"} label={"Descuento"} />
            <InputGuesser source={"datePublication"} label={"Fecha de publicación"} />
            <InputGuesser source={"dateExpiration"} label={"Fecha de expiración"} />
            <InputGuesser source={"revised"} label={"Revisado"} />
            <InputGuesser source={"saleType"} label={"Categoria de Beneficio"}/>
            <InputGuesser source={"store"} label={"Patrocinador"}/>
    </CreateGuesser>
);

export const SaleEdit = props => (
    <EditGuesser {...props} title={"Editar Beneficio"}>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"description"} multiline label={"Descripción"}/>
        <InputGuesser source={"conditionOfSale"} label={"Condición de venta"}/>
        <InputGuesser source={"price"} label={"Precio"}/>
        <InputGuesser source={"discount"} label={"Descuento"}/>
        <InputGuesser source={"datePublication"} label={"Fecha de publicación"}/>
        <InputGuesser source={"dateExpiration"} label={"Fecha de expiración"}/>
        <InputGuesser source={"revised"} label={"Revisado"}/>
        <InputGuesser source={"saleType"} label={"Categoria de Beneficio"}/>
        <InputGuesser source={"store"} label={"Patrocinador"}/>
    </EditGuesser>
);

export const SaleShow = props => (
    <ShowGuesser {...props} title={"Ver Beneficio"}>
        <FieldGuesser source={"name"} label={"Nombre"} addLabel={true} />
        <FieldGuesser source={"description"} label={"Descripción"} addLabel={true} />
        <FieldGuesser source={"conditionOfSale"} label={"Condición de venta"} addLabel={true} />
        <FieldGuesser source={"price"} label={"Precio"} addLabel={true} />
        <FieldGuesser source={"discount"} label={"Descuento"} addLabel={true} />
        <FieldGuesser source={"datePublication"} label={"Fecha de publicación"} addLabel={true} />
        <FieldGuesser source={"dateExpiration"} label={"Fecha de expiración"} addLabel={true} />
        <FieldGuesser source={"revised"} label={"Revisado"} addLabel={true} />
        <FieldGuesser source={"saleType"} label={"Categoria de Beneficio"} addLabel={true} />
        <FieldGuesser source={"store"} label={"Patrocinador"} addLabel={true} />
        <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
        <FieldGuesser source={"updatedAt"} label={"Actualizado"} addLabel={true} />
    </ShowGuesser>
);
