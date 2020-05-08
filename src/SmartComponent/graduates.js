import React from "react";
import {ShowGuesser, FieldGuesser, ListGuesser} from "@api-platform/admin";

export const GraduateList = props => (
    <ListGuesser {...props} title={"Graduados"}>
        <FieldGuesser source={"name"} label={"Nombres"}  />
        <FieldGuesser source={"lastName"} label={"Apellidos"} />
        <FieldGuesser source={"dni"} label={"DNI"} />
        <FieldGuesser source={"email"} label={"Email"}/>
    </ListGuesser>
);

export const GraduateShow = props => (
    <ShowGuesser {...props} title={"Ver Graduado"}>

        <FieldGuesser source={"name"} label={"Nombres"} addLabel={true} />
        <FieldGuesser source={"lastName"}  label={"Apellidos"} addLabel={true} />
        <FieldGuesser source={"dni"} label={"DNI"} addLabel={true} />
        <FieldGuesser source={"cuit"} label={"CUIT"} addLabel={true} />
        <FieldGuesser source={"cellPhone"} label={"Celular"} addLabel={true} />
        <FieldGuesser source={"email"} label={"Email"} addLabel={true} />
        <FieldGuesser source={"facebook"} lablel={""} addLabel={true} />
        <FieldGuesser source={"instagram"} lablel={""} addLabel={true} />
        <FieldGuesser source={"twitter"} lablel={""} addLabel={true} />
        <FieldGuesser source={"personalSite"} lablel={""} addLabel={true} />
        <FieldGuesser source={"bornDate"} lablel={"Fecha de nacimiento"} addLabel={true} />
        <FieldGuesser source={"work"} label={"Empresa o institución donde trabaja"} addLabel={true} />
        <FieldGuesser source={"position"} label={"Función o cargo"} addLabel={true} />
        <FieldGuesser source={"continueStuding"} lablel={"¿Te gustaría seguir estudiando?"} addLabel={true} />
        <FieldGuesser source={"interest"} lablel={"¿en qué tema?"} addLabel={true} />
        <FieldGuesser source={"wantToLink"}
                      lablel={
                          "¿Estás interesado que tu empresa o institución se vincule con la UNL a través de convenios" +
                          " de cooperación?"
                      }
                      addLabel={true} />
        <FieldGuesser source={"agreementType"} lablel={"Tipo de acuerdo"} addLabel={true} />
        <FieldGuesser source={"wantToUnderTake"} lablel={"¿Te gustaría emprender y tener tu propia empresa?"}
                      addLabel={true} />
        <FieldGuesser source={"comment"} multiline lablel={"Comentarios, opiniones e ideas"} addLabel={true} />
        <FieldGuesser source={"showEmail"} lablel={"Desea hacer público su email"} addLabel={true} />
        <FieldGuesser source={"professions"} label={"Profesiones"} addLabel={true} />
    </ShowGuesser>
);

