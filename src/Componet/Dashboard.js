import * as React from 'react';
import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core';
import ImageRectorado from '../Images/Rectorado_1.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  media: {
    height: 400,
  },
});

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <Card variant="outlined">
        <CardMedia className={classes.media}  image={ImageRectorado} title="Rectorado"/>
        <CardHeader title="Bienvenido al panel de administración de la aplicación de beneficios."/>
        <CardContent>Desde aquí podrá administrar su tienda y los beneficios.</CardContent>
      </Card>
    </>
  );
}

