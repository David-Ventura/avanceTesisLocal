import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import { Alert } from "react-bootstrap";
import { useState } from "react";
import { BsFillFloppyFill } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";
import useFetchOptionsvariosSelect from "../Hooks/useFetchOptionsVariosSelec";

import ReactSelectComponentVarios from "../Selects/SelectVariasSelections";

import SelectAreas from "../Selects/SelectAreas";
import SelectEmpleadosUso from "../Selects/SelectEmpleadosUso";

import ReactSelectComponentVariosEstudiantes from "../Selects/ReactSelectComponentVariosEstudiantes ";

import SelectCarreras from "../Selects/SelectCarreras";

//test prueba

function RegisTes() {
  //obteniendo el id insertado
  const [id, setId] = useState(null);

  const [validated, setValidated] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [observaciones, setObservaciones] = useState("");
  const [actividadesRealizadas, setActividadesRealizadas] = useState("");
  const [date, setDate] = useState(new Date());

  // Maneja el cambio de selección
  //const [selectedOptionsE, setSelectedOptionsE] = useState([]);
  const handleSelectionChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions || []);
    console.log('Selected options in state:', selectedOptions); // Imp
  };
  
//fin
//Maneja el cambio de selec de areas
const [selectedOptionsA, setSelectedOptionsA] = useState([]);
  const handleSelectionChangeAreas = (selectedOptionsA) => {
    setSelectedOptionsA(selectedOptionsA);
  };
const [errorArea, setErrorArea] = useState("");
//fin
//Maneja el cambio de selec de Empleados
const [selectedOptionsEm, setSelectedOptionsEm] = useState([]);
  const handleSelectionChangeEmpleados = (selectedOptions) => {
    setSelectedOptionsEm(selectedOptions);
  };
const [errorEmpleado, setErrorEmpleado] = useState("");
//fin
//Maneja el cambio de selec de Carreras
const [selectedOptionsCar, setSelectedOptionsCar] = useState([]);
  const handleSelectionChangeCarreras = (selectedOptions) => {
    setSelectedOptionsCar(selectedOptions);
  };
const [errorCarreras, setErrorCarreras] = useState("");
//fin
  //Validando Fechas
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errorDate, setErrorDate] = useState("");

  /*---valindado cajas de*/
  const [M, setM] = useState("");
  const [F, setF] = useState("");
  const [errorGenero, setErrorGenero] = useState({ M: "", F: "" });
  /*--fin--*/


var tests;




  // Estado para almacenar las selecciones
  const [seleccionGrupo1, setSeleccionGrupo1] = useState("");
  const [seleccionGrupo2, setSeleccionGrupo2] = useState("");

  const [error, setError] = useState("");

  // Estado para manejar los valores de los campos de texto y mensajes de error
  const [formData, setFormData] = useState({
  
    nameProyecto: '',
    lugarProyecto: '',
    dateInicio: '',
    endDate:'',
    observaciones:'',
    lugarProyecto:'',
    numEstudent:'',
    numSolicita:'',
    numAnio:'',
    id:''
 
  });
  const [errorForms, setErrorForms] = useState({
    nameProyecto: '',
    lugarProyecto: '',
    dateInicio: '',
    endDate:'',
    observaciones:'',
    lugarProyecto:'',
    numEstudent:'',
    numSolicita:'',
    numAnio:''

  });


  // Validar si todos los campos están llenos
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Verificar cada campo
    for (const [key, value] of Object.entries(formData)) {
      if (!value.trim()) {
        newErrors[key] = 'Este campo es requerido';
        isValid = false;
      }
    }

    setErrorForms(newErrors);
    return isValid;
  };


   /*-----validando las Fechas-----*/


  /*---fin---*/

  /*-----------capturando datos para enviarlos a guardar-----*/
  const [nameProyecto, setNameProyecto] = useState(''); 
  const [lugarProyecto, setLugarProyecto] = useState(''); 
  const [numEstudent, setNumEstudent] = useState(''); 
  const [numSolicita, setNumSolicita] = useState(''); 
  const [numAnio, setNumAnio] = useState(''); 
  
  //const [starDate, setStarDate] = useState(''); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nameProyecto') setNameProyecto(value);
    if (name === 'lugarProyecto') setLugarProyecto(value);
    if(name==='startDate') setStartDate(value)
    if(name==='observaciones') setObservaciones(value)
    if(name==='numEstudent') setNumEstudent(value)
    if(name==='numSolicita') setNumSolicita(value)     
    if(name==='numAnio') setNumAnio(value)  
    if(name==='actividadesRealizadas') setActividadesRealizadas(value)  
    if(name==='idStuden') setId(value)  
  

      

      setErrorForms({
        ...errorForms,
        [name]: ''
      });
  
//    if (name === 'startDate') setStartDate(value);
//    if (name === 'endDate') setEndDate(value);
  };
  /*
  const [formData, setFormData] = useState({
    nameProyecto: '',
    lugarProyecto: '',
    dateInicio: '',
    dateFin: '',
    txtTareas: '',
    rdNo:'',
    numEstudent:'',
    numSolicita:'',
    numAño:'',
    numM:'',
    numF:'',
    txtObservaciones:''
  });
*/
  /*------------fin-------------------*/

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const handleObservacionesChange = (e) => {
    setObservaciones(e.target.value);
  };

  const handleActividadesRealizarChange = (e) => {
    setActividadesRealizadas(e.target.value);
  };

  /*validando envios*/
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    /*---------2 <opciones------------*/
    // Validar si se han seleccionado opciones en ambos grupos
    if (!seleccionGrupo1) {
      setErrorOption("Por favor, selecciona una opción");
    } else {
      setErrorOption("");
      // Aquí puedes manejar el envío de datos del formulario
      console.log("Formulario enviado con éxito");
    }

    /*---------------------------------*/

    if (form.checkValidity() === false) {
      event.stopPropagation();
      if (new Date(endDate) < new Date(startDate)) {
        setError(
          "La fecha de finalización no puede ser anterior a la fecha de inicio"
        );
        return;
      }
    }
    /*
    if (!selectedOption) {
      setErrorOption('Por favor, selecciona una opción.');
    } 
      */
    //validando cajas de genero//
    setErrorGenero({ M: "", F: "" });

    // Validate that at least one of the inputs is filled
    let valid = true;
    const newErrors = { M: "", F: "" };

    if (!M && !F) {
      newErrors.M = "Por favor, ingrese al menos un género.";
      newErrors.F = "Por favor, ingrese al menos un género.";
      valid = false;
    }
    if (valid) {
      // Imprimiendo
      console.log("Género M:", M);
      console.log("Género F:", F);
    } else {
      setErrorGenero(newErrors);
    }

    //validando select de estudiantes
    if (selectedOptions.length === 0 || selectedOptionsA.length === 0 || selectedOptionsEm.length === 0 || selectedOptionsCar.length === 0) {
      setErrorArea('Este campo es obligatorio.');
      return;
    }
    //fin
/*
        //validando select de areas de trabajo
    if (selectedOptionsA.length === 0) {
          setErrorArea('Debes seleccionar al menos una area de trabajo.');
          return;
    }
        //fin

    //validando select de Empleados Uso
    if (selectedOptionsEm.length === 0) {
      setErrorEmpleado('Debes seleccionar al menos una empleado de trabajo.');
      return;
}
    //fin

        //validando select de Empleados Uso
        if (selectedOptionsCar.length === 0) {
          setErrorCarreras('Debes seleccionar al menos una carrera.');
          return;
    }
        //fin
*/
    setValidated(true);
  };

  /*--fin-*/
  /*---mandando a guardar el MultiSelect y demas campos*/
  
 

  const handleSave = async () => {
  //  console.log("selectedOptionsA:", selectedOptionsA);

    try {
      
      const response = await fetch("http://localhost:4000/sse/v1/createTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
       //   selectedOptions: selectedOptions.map((option) => option.value), // Enviar solo valores
     //  selectedOptionA: selectedOptionsA.value, 
       nameProyecto,
       lugarProyecto,
       startDate,
       endDate,
       observaciones,
       numEstudent,
       numSolicita,
       numAnio,
       selectedOptionCar: selectedOptionsCar.value, 
       seleccionGrupo1,
       actividadesRealizadas,
       selectedOptionEm: selectedOptionsEm.value,
        }),
      });
      

      if (!response.ok) {
        throw new Error("Error al guardar los datos");
      }


   // Paso 2: Obtener el ultimo ID insertado
   /*
         const responseLastId = await fetch('http://localhost:4000/sse/v1/ultimoId');

   if (!responseLastId.ok) {
           throw new Error('Error al obtener el último ID');
         }
         const dataLisId = await responseLastId.json();
         console.log('se recibio', dataLisId)
         if (dataLisId && dataLisId.id) {
           setId(dataLisId.id);

         } else {
           setError('No se recibió un ID válido');
         }
*/
         //Guardando en la segunda tabla
      /*   
         try {
      
          const response = await fetch("http://localhost:4000/sse/v1/saveInternas", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
           //   selectedOptions: selectedOptions.map((option) => option.value), // Enviar solo valores
         //  selectedOptionA: selectedOptionsA.value, 
           nameProyecto,
           lugarProyecto,
           startDate,
           endDate,
           observaciones,
           numEstudent,
           numSolicita,
           numAnio,
           selectedOptionCar: selectedOptionsCar.value, 
           seleccionGrupo1,
           actividadesRealizadas,
           selectedOptionEm: selectedOptionsEm.value,
            }),
          });
          
 
          if (!response.ok) {
            throw new Error("Error al guardar los datos");
          }
  */ 
        

      alert("Datos guardados correctamente");

    } catch (error) {
      console.error("Error al guardar los datos:", error);
      setError("Error al guardar los datos. Por favor, intente de nuevo.");
    }
  };

  const handleSaveTest = async () => {
   //  console.log("selectedOptionsA:", selectedOptionsA);
 console.log('el array es',selectedOptions);
   try {
      
    const response = await fetch("http://localhost:4000/sse/v1/createTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
     //   selectedOptions: selectedOptions.map((option) => option.value), // Enviar solo valores
   //  selectedOptionA: selectedOptionsA.value, 
     nameProyecto,
     lugarProyecto,
     startDate,
     endDate,
     observaciones,
     numEstudent,
     numSolicita,
     numAnio,
     selectedOptionCar: selectedOptionsCar.value, 
     seleccionGrupo1,
     actividadesRealizadas,
     selectedOptionEm: selectedOptionsEm.value,
      }),
    });
   

    if (!response.ok) {
      throw new Error("Error al guardar los datos");
    }

    const result = await response.json();
    setId(result.idunidadesInternasUso)
    const test = result.idunidadesInternasUso
  
    console.log("Respuesta del servidor:", test);

    alert(`Datos guardados correctamente. ID del registro: ${result.idunidadesInternasUso}`);


 // Paso 2: Obtener el ultimo ID insertado
 /*
       const responseLastId = await fetch('http://localhost:4000/sse/v1/ultimoId');

 if (!responseLastId.ok) {
         throw new Error('Error al obtener el último ID');
       }
       const dataLisId = await responseLastId.json();
       console.log('se recibio', dataLisId)
       if (dataLisId && dataLisId.id) {
         setId(dataLisId.id);

       } else {
         setError('No se recibió un ID válido');
       }
*/
       //Guardando en la segunda tabla
    /*   
       try {
    */
    //   const selectedValues = Array.isArray(selectedOptionsEm)
    //    ? selectedValues.map(option => option.value)
   //     : []; // Fallback a un array vacío si no es un array

   
    
        const responseI = await fetch("http://localhost:4000/sse/v1/createTask2", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
   
       selectedOptions: selectedOptions.map(option => option.value),
          test,
          }),
        });
        

        if (!responseI.ok) {
          throw new Error("Error al guardar los datos tabla 2");
        }
 
      

    alert("Datos guardados correctamente");

  } catch (error) {
    console.error("Error al guardar los datos:", error);
    setError("Error al guardar los datos. Por favor, intente de nuevo.");
  }
};
  
  

  //seleccion

  const [options, setOptions] = useState([]);


  /*---*/

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    validateDates(e.target.value, endDate);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    validateDates(startDate, e.target.value);
  };

  const validateDates = (start, end) => {
    if (start && end && new Date(start) > new Date(end)) {
      setErrorDate('La fecha de finalización no puede ser menor que la fecha de inicio.');
    } else {
      setErrorDate('');
    }
  };

  /*valindando radiobuttons */

  const [selectedOption, setSelectedOption] = useState("");
  const [errorOption, setErrorOption] = useState("");

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };
  /*---------*/

  return (
    <div>
      <Container className="align-items-center justify-content-center">
        <div className="alert alert-success text-center" role="alert">
          <h4>
            ¡Captura de datos Solicitud de SSE Coordinadores de Carrera!
          </h4>
        </div>
        
          
{/*  <h1>el id recibido es {id}</h1>
   
        <Form.Control
                required
                id="idStuden"
                name="idStuden"
                value={id}
                onChange={handleInputChange}  
                type="text"
                placeholder="Nombre proyecto a realizar"
              />
          */}
        
    
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="shadow-lg p-3 mb-5 bg-body rounded"
        >
          <Form.Label
            as={Col}
            md="12"
            style={{
              backgroundColor: "#F5C451",
              color: "#000000",
              padding: "8px",
              borderRadius: "5px",
            }}
          >
            Datos Generales
          </Form.Label>

          <Row>
          {
            /*
             <Form.Group
              as={Col}
              md="3"
              controlId="validationSeleccione"
              className="mb-3"
            >
              <Form.Label>Seleccione el area de trabajo</Form.Label>

              <SelectAreas 
                 
                 selectedOptionsA={selectedOptionsA}
                 onSelectionChange={handleSelectionChangeAreas}
               />
                  {errorArea && <div style={{ color: 'red' }}>{errorArea}</div>}
            
              
              <Form.Control.Feedback type="invalid">
                Por favor seleccione una opción.
              </Form.Control.Feedback>
            </Form.Group>

            */
          }

            <Form.Group
              as={Col}
              md="5"
              controlId="selectOptions"
              className="mb-3"
            >
              <Form.Label>Selecciona responsable del proyecto</Form.Label>
              <SelectEmpleadosUso
              selectedOptionsEm={selectedOptionsEm}
              onSelectionChange={handleSelectionChangeEmpleados}
              />
             
               {/*errorArea && <div style={{ color: 'red' }}>{errorArea}</div>*/}
             
                {/*  {errorEmpleado && <div style={{ color: 'red' }}>{errorEmpleado}</div>}*/}  
              
              {/*<div>Selected Options: {selectedOptions.map(option => option.label).join(', ')}</div> */}
              <Form.Control.Feedback type="invalid">
                Por favor seleccione una opción.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="7"
   
              className="mb-3"
            >
              <Form.Label>Nombre del proyecto a realizar</Form.Label>
              <Form.Control
                required
                id="nameProyecto"
                name="nameProyecto"
                value={nameProyecto}
                onChange={handleInputChange}  
                type="text"
                placeholder="Nombre proyecto a realizar"
              />
           {/*errorForms.nameProyecto && <span style={{ color: 'red' }}> {errorForms.nameProyecto}</span>*/}
              <Form.Control.Feedback type="invalid">
                Por favor seleccione una opción.
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Form.Group
                as={Col}
                md="6"
             
                className="mb-3"
              >
                <Form.Label>
                  Lugar de ejecucion del proyecto a realizar
                </Form.Label>
                <Form.Control
                id="lugarProyecto"
                name="lugarProyecto"
                value={lugarProyecto}
                onChange={handleInputChange}
                required
                type="text"
                 placeholder="Lugar proyecto a realizar"
                />
                  {/*errorArea && <div style={{ color: 'red' }}>{errorArea}</div>*/}
                <Form.Control.Feedback type="invalid">
                  Por favor seleccione una opción.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="3"
                controlId="startDate"
                className="mb-3"
              >
                <Form.Label>Fecha Inicio</Form.Label>
                <Form.Control
                  required
                  type="date"
                  name="startDate"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
         
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="endDate" className="mb-3">
                <Form.Label>Fecha Fin</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={endDate}
                  onChange={handleEndDateChange}
                  required
                />
        
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            {/* Mostrar el mensaje de error debajo de los dos campos */}
            {errorDate && (
              <Row className="justify-content-end">
                <Col md="6" className="text-end">
                  <div className="text-danger text-center">{errorDate}</div>
                </Col>
              </Row>
            )}
          </Row>
          <Row>
            <Form.Group
              as={Col}
              md="12"
              controlId="descripcion"
              className="mb-3"
            >
              <Form.Label>Descripcion de actividades a realizar</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="actividadesRealizadas"
                value={actividadesRealizadas}
                onChange={handleActividadesRealizarChange}
              />
            
            </Form.Group>
          </Row>

          <Row>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Cuenta con los estudiantes</Form.Label>
              <Col sm={10}>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    name="rdSi"
                    value="Si"
                    checked={seleccionGrupo1  === "Si"}
                    onChange={(e) => setSeleccionGrupo1(e.target.value)}
                    label="Si"
                    className="me-3"
                  />
                  <Form.Check
                    type="radio"
                
                    name="rdNo"
                    value="No"
                    checked={seleccionGrupo1  === "No"}
                    onChange={(e) => setSeleccionGrupo1(e.target.value)}
                    label="No"
                  />
                </div>
              </Col>
              {errorOption && (
                <div className="">
                  <div className="">
                    <div className="text-danger mt-1">{errorOption}</div>
                  </div>
                </div>
              )}
            </Form.Group>

            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Estudiantes que requiere</Form.Label>
              <Col sm={12}>
                <Form.Control
                  required
                  
                  type="number"
                  name="numEstudent"
                  value={numEstudent}
                 onChange={handleInputChange}
                  min="0"
                  placeholder="Cantidad"
                />
               
              </Col>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Estudiantes que solicita</Form.Label>
              <Col sm={12}>
                <Form.Control
                  required
                  type="number"
                  name="numSolicita"
                  value={numSolicita}
                 onChange={handleInputChange}
                  min="0"
                  placeholder="Cantidad"
                />
        
              </Col>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Año de estudiantes</Form.Label>
              <Form.Control 
              required 
              type="number" 
              name="numAnio"
              value={numAnio}
              onChange={handleInputChange}
               min="0" 
               placeholder="Año" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
         
            </Form.Group>

           
          </Row>

          <Row className="mb-3"></Row>

          <Row>
          <Form.Group
              as={Col}
              md="5"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Carrera</Form.Label>
              <SelectCarreras
              selectedOptionsCar={selectedOptionsCar}
              onSelectionChange={handleSelectionChangeCarreras}
              />
                  
   
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
         
              {/* 

                 <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom02"
              className="mb-3"
            >

                  <Form.Label>Genero de los estudiantes</Form.Label>
              <Col sm={10}>
                <div className="d-flex">
                  <Form.Control
                    type="number"
                    placeholder="M"
                    name="numM"
                    min="0"
                    value={M}
                    onChange={(e) => setM(e.target.value)}
                    isInvalid={!!errorGenero.M}
                    className="me-3"
                  />

                  <Form.Control
                    type="number"
                    placeholder="F"
                    name="numF"
                    min="0"
                    value={F}
                    onChange={(e) => setF(e.target.value)}
                    isInvalid={!!errorGenero.F}
                  />
                  <Form.Control.Feedback type="invalid">
                    
                  </Form.Control.Feedback>
                </div>
              </Col>

  <div className='text-danger'>
                 {errorGenero.F}
              </div>
              
            </Form.Group>

              */}
          
              
            

            {/* Select de estudiantes */}

            <Form.Group
              as={Col}
              md="7"
              controlId="validationSeleccione"
              className="mb-3"
            >
              <Form.Label>Seleccione los estudiantes a necesitar</Form.Label>

{
  /*
 <ReactSelectComponentVariosEstudiantes
                selectedOptionsE={selectedOptionsE}
                onSelectionChange={handleSelectionChange}
                value={selectedOptionsE}
              />
  */
}
             
              <ReactSelectComponentVariosEstudiantes
                selectedOptions={selectedOptions}
                onSelectionChange={handleSelectionChange}
                required
              />
              
              {/*<div>Selected Options: {selectedOptions.map(option => option.label).join(', ')}</div> */}
              <Form.Control.Feedback type="invalid">
                Por favor seleccione un estudiante.
              </Form.Control.Feedback>
            </Form.Group>

            {/* ------------------ */}
          </Row>

          <Form.Group as={Col} md="12" controlId="descripcion" className="mb-3">
            <Form.Label>Observaciones</Form.Label>
            <Form.Control
              as="textarea"
              name="observaciones"
              rows={3}
              value={observaciones}
              onChange={handleObservacionesChange}
            />
          </Form.Group>

          <Row></Row>

          <div className="text-center">
            <Button variant="success"  className="mr-2">
              <BsFillFloppyFill /> Enviar
            </Button>{" "}
            <Button variant="danger">
              <BsExclamationCircle /> Cancelar
            </Button>
            <Button variant="primary" type="submit" onClick={handleSaveTest}>
              Save
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default RegisTes;
