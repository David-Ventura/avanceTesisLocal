import {pool} from '../Config/db.js'

import express from 'express';



//Test
//Extrayendo datos completos de la tabla
export const getData = async (req, res)=>{
    try{
        const [result] = await pool.query(
                "SELECT * FROM tasks ORDER BY createAt ASC limit 5"
        );
        res.json(result);
        console.log(result)
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

//cargando todas las areas de trabajo de la uso

export const getAreasTrabajo = async (req, res)=>{
  try{
      const [result] = await pool.query(
              "SELECT * FROM areatrabajouso ORDER BY areatrabajouso"
      );
      res.json(result);
      console.log(result)
  }catch(error){
      return res.status(500).json({message:error.message});
  }
}

//----------------------

//cargando todas los empleados de trabajo de la uso

export const getEmpleadosUso = async (req, res)=>{
  try{
      const [result] = await pool.query(
              "SELECT * FROM uso_trabajo ORDER BY nombre"
      );
      res.json(result);
      console.log(result)
  }catch(error){
      return res.status(500).json({message:error.message});
  }
}

//----------------------


//cargando los estudiantes

export const getEstudiantes = async (req, res)=>{
  try{
      const [result] = await pool.query(
              "SELECT es.idestudiantes, concat(es.Nombre,' ', es.Apellido) as Estudiante FROM expedienteestudiantes as es;"
      );
      res.json(result);
      console.log(result)
  }catch(error){
      return res.status(500).json({message:error.message});
  }
}

export const getCarreras = async (req, res)=>{
  try{
      const [result] = await pool.query(
              "SELECT es.iduso_carreras, es.Nombre FROM uso_carreras as es;"
      );
      res.json(result);
      console.log(result)
  }catch(error){
      return res.status(500).json({message:error.message});
  }
}


//----------------------

//guardando datos varios select

export const saveTask = async (req, res) => {
  try {
    const { titles } = req.body;  // Recibimos un array de títulos
    console.log(titles)

    if (!Array.isArray(titles) || titles.length === 0) {
      return res.status(400).json({ message: 'No titles provided' });
    }

    // Preparamos las consultas para insertar múltiples títulos
    const promises = titles.map(title =>
      pool.query("INSERT INTO tasks (title) VALUES (?)", [title])
    );

    // Ejecutamos todas las consultas en paralelo
    await Promise.all(promises);
    console.log(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



export const createTask = async (req, res) => {
  try {
    
    //const { selectedOptionA, nameProyecto, lugarProyecto, startDate,endDate,observaciones,numEstudent,numSolicita,numAnio,selectedOptionCar,seleccionGrupo1,actividadesRealizadas,selectedOptionEm } = req.body;
    const { selectedOptionA, nameProyecto, lugarProyecto, startDate,endDate,numEstudent,numSolicita,numAnio,selectedOptionCar,actividadesRealizadas,selectedOptionEm } = req.body;

    // Imprimir el valor recibido en la consola del servidor
    console.log('Received selectedOptionA:', selectedOptionA);
    console.log('Seleccion de Empleado', selectedOptionEm)
    console.log('carrera', selectedOptionCar)
    console.log('carrera', nameProyecto)
 /*   console.log('name proyecto',nameProyecto)
    console.log('lugar proyecto',lugarProyecto)
    console.log('date inicio', startDate)
    console.log('fecha fin', endDate)
    console.log('Actividades a Realiza', actividadesRealizadas)
    console.log('numestuden', numEstudent)
    console.log('numSolicita', numSolicita)
    console.log('anio', numAnio)
    
    console.log('seleccion estudiantes', seleccionGrupo1)
    console.log('Observaciones', observaciones)
    */

    // Validar la entrada
    /*
    if (!selectedOptionA) {
      return res.status(400).json({ message: 'No options selected' });
    }
*/
    // Si selectedOptionA es un array, usalo como tal
    // Si es un valor único, conviértelo en un array

    //const values = Array.isArray(selectedOptionA) ? selectedOptionA.map(option => [option]) : [[selectedOptionA]];

   

    const query = `INSERT INTO solicitud_unidades_internas_uso (NombreProyecto, 
    direccionEjecucionProyecto,
    FechaInicio, 
    FechaFin,
    descripcionEjecucionProyecto,
    cantEstudiantes,
    cant_estudiantes_proyecto, 
    nivel_academicoEstudiantes, 
    uso_trabajo_iduso_trabajo, 
    uso_carreras_iduso_carreras)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
     
   
    //'INSERT INTO solicitud_unidades_internas_uso (NombreProyecto, uso_trabajo_iduso_trabajo) VALUES (?,?)';
    
    const values = [nameProyecto,lugarProyecto, startDate, endDate, actividadesRealizadas, numEstudent,numSolicita, numAnio, selectedOptionEm, selectedOptionCar ];
    

//    await pool.query(query, [values]);
      
// funciona campos varios
      //await pool.query(query, values);
      const [result] = await pool.query(query, values);

    
        // Enviar respuesta con el ID del registro insertado
    res.status(201).json({
      message: 'Tasks saved successfully',
      idunidadesInternasUso: result.insertId
    });

   // res.status(201).json({ message: 'Tasks saved successfully' });
    
    
  } catch (error) {
    // Registrar el error con más contexto si es necesario
    console.error('Error saving tasks:', error);
     // Enviar respuesta con el mensaje de error solo si no se ha enviado una respuesta anteriormente
     if (!res.headersSent) {
      res.status(500).json({ message: 'Error saving tasks', error: error.message });
    }

   // res.status(500).json({ message: 'Error saving tasks', error: error.message });
  }
};

//Capturando el ultimo id digitado de solicitud de coordinadores
export const consultaId = async (req, res) => {


  try{
    const [result] = await pool.query(
            "SELECT s.idunidadesInternasUso FROM solicitud_unidades_internas_uso s order by idunidadesInternasUso  desc limit 1;");
            if (result.length > 0) {
              const ultimoId = result[0].idunidadesInternasUso;
              res.json({ id: ultimoId });
            } else {
              res.status(404).json({ error: 'No se encontraron registros' });
            }
   
}catch(error){
  console.error('Error al obtener el último ID:', error);
    return res.status(500).json({message:error.message});
}
};

//Guardando estudent en la tabla espedientesEstudentUnidadesInternas


export const create = async (req, res) => {
  try {
    
    //const { selectedOptionA, nameProyecto, lugarProyecto, startDate,endDate,observaciones,numEstudent,numSolicita,numAnio,selectedOptionCar,seleccionGrupo1,actividadesRealizadas,selectedOptionEm } = req.body;
    const { selectedOptionA, nameProyecto, lugarProyecto, startDate,endDate,numEstudent,numSolicita,numAnio,selectedOptionCar,actividadesRealizadas,selectedOptionEm } = req.body;

    // Imprimir el valor recibido en la consola del servidor
    console.log('Received selectedOptionA:', selectedOptionA);
    console.log('Seleccion de Empleado', selectedOptionEm)
    console.log('carrera', selectedOptionCar)
    console.log('carrera', nameProyecto)
 /*   console.log('name proyecto',nameProyecto)
    console.log('lugar proyecto',lugarProyecto)
    console.log('date inicio', startDate)
    console.log('fecha fin', endDate)
    console.log('Actividades a Realiza', actividadesRealizadas)
    console.log('numestuden', numEstudent)
    console.log('numSolicita', numSolicita)
    console.log('anio', numAnio)
    
    console.log('seleccion estudiantes', seleccionGrupo1)
    console.log('Observaciones', observaciones)
    */

    // Validar la entrada
    /*
    if (!selectedOptionA) {
      return res.status(400).json({ message: 'No options selected' });
    }
*/
    // Si selectedOptionA es un array, usalo como tal
    // Si es un valor único, conviértelo en un array

    //const values = Array.isArray(selectedOptionA) ? selectedOptionA.map(option => [option]) : [[selectedOptionA]];

   

    const query = `INSERT INTO solicitud_unidades_internas_uso (NombreProyecto, 
    direccionEjecucionProyecto,
    FechaInicio, 
    FechaFin,
    descripcionEjecucionProyecto,
    cantEstudiantes,
    cant_estudiantes_proyecto, 
    nivel_academicoEstudiantes, 
    uso_trabajo_iduso_trabajo, 
    uso_carreras_iduso_carreras)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
     
   
    //'INSERT INTO solicitud_unidades_internas_uso (NombreProyecto, uso_trabajo_iduso_trabajo) VALUES (?,?)';
    
    const values = [nameProyecto,lugarProyecto, startDate, endDate, actividadesRealizadas, numEstudent,numSolicita, numAnio, selectedOptionEm, selectedOptionCar ];
    

//    await pool.query(query, [values]);
      
// funciona campos varios
      //await pool.query(query, values);
      const [result] = await pool.query(query, values);


 

    res.status(201).json({ message: 'Tasks saved successfully' });
    
  } catch (error) {
    // Registrar el error con más contexto si es necesario
    console.error('Error saving tasks:', error);

    res.status(500).json({ message: 'Error saving tasks', error: error.message });
  }
};


export const createTask2 = async (req, res) => {
  try {
       //const { selectedOptionE, test } = req.body;
       const {selectedOptions, test} = req.body;

       console.log('Received selected options:', selectedOptions);
       console.log('ID:', test);

   // Asegúrate de que selectedOptionsEm es un array
    if (!Array.isArray(selectedOptions)) {
      throw new Error('selectedOptionsEm debe ser un array');
    }

    const values = selectedOptions.map(option => [option, test]);
 
 
       const query = `INSERT INTO expedienteestudiantes_has_solicitud_unidades_internas_uso(expedienteEstudiantes_idestudiantes, Solicitud_Unidades_Internas_Uso_idunidadesInternasUso)   VALUES ?`;

   //   const selectedOptionsStr = selectedOptions.join(',');

  //     const values = [selectedOptionsStr, test];


       const [result] = await pool.query(query, [values]);
/*
    const [result] = await pool.query(
      "INSERT INTO expedienteestudiantes_has_solicitud_unidades_internas_uso(expedienteEstudiantes_idestudiantes, Solicitud_Unidades_Internas_Uso_idunidadesInternasUso) VALUES (?, ?)",
      [selectedOptionEm, test]
    );
    */
    res.json({
      id: result.insertId,
      selectedOptions,
      test,
    });
    console.log(result);
  } catch (error) {
    //return res.status(500).json({ message: error.message });
    if (!res.headersSent) {
      res.status(500).json({ message: 'Error saving data', error: error.message });
    }
  }
};
