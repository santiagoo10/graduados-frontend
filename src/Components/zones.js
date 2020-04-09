import React from "react";
import { FieldGuesser,
         ListGuesser,
         ShowGuesser,
         InputGuesser,
         CreateGuesser,
         EditGuesser} from "@api-platform/admin";

export const ZoneList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"code"} label={"Código"}/>
        <FieldGuesser source={"name"} label={"Nombre"}/>
        <FieldGuesser source={"type"} label={"Tipo"}/>
        <FieldGuesser source={"city"} label={"Ciudad"}/>
    </ListGuesser>
);


export const ZoneEdit = props => (
    <EditGuesser {...props}>
        <InputGuesser source={"code"} label={"Código"}/>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"type"} label={"Tipo"}/>
        <InputGuesser source={"city"} label={"Ciudad"}/>
    </EditGuesser>
);

export const ZoneShow = props => (
    <ShowGuesser {...props}>
        <FieldGuesser source={"code"} label={"Código"} addLabel={true} />
        <FieldGuesser source={"name"} label={"Nombre"} addLabel={true} />
        <FieldGuesser source={"type"} label={"Tipo"} addLabel={true} />
        <FieldGuesser source={"city"} label={"Ciudad"} addLabel={true} />
        <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
        <FieldGuesser source={"updatedAt"} label={"Actualizado"} addLabel={true} />
    </ShowGuesser>
);

export const ZoneCreate = props => (
    <CreateGuesser {...props}>
        <InputGuesser source={"code"} label={"Código"}/>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"type"} label={"Tipo"} />
        <InputGuesser source={"city"} label={"Ciudad"}/>
    </CreateGuesser>
);
