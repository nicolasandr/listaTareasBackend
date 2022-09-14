import Tarea from '../models/tarea';

export const crearTarea = async (req, res) => {
    try {
        console.log(req.body);
        //validacion
        //crear un objeto para guardar en la BD
        const tareaNueva = new Tarea({
            nombreTarea: req.body.nombreTarea,
            detalleTarea: req.body.detalleTarea
        });
        //guardar efectivamente en la BD
        await tareaNueva.save();

        //enviar respuesta al frontend
         res.status(201).json({
             mensaje: 'La tarea fue creada exitosamente',
         });

        //si algo falla tambien enviar una respuesta
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'la Tarea enviada no pudo ser creada',
        });
    }
};

export const listarTarea = (req, res) => {
    res.send('enviar lista de tareas');
};

export const obtenerTarea = (req, res) => {
    res.send('aqui obtengo la tarea');
};

export const editarTarea = (req, res) => {
    res.send('aqui editamos la tarea');
};
export const borrarrTarea = (req, res) => {
    res.send('aqui borramos la tarea');
};