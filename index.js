import express from 'express';

//instancia de express
const app = express();

//queremos tomar el puerto de la pc
app.set('port', process.env.PORT || 4000);

//quiero que mi backend escuche el puerto
app.listen(app.get('port'), () => {
    console.log('Estamos en el puerto ' + app.get('port'));
});
 //middlewares

//rutas

app.get('/',(req,res)=>{
 res.send('primera peticion get')
})