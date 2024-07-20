import { useState, useEffect } from "react";
import { Route,Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import logo from './assets/Images/LogoUSO.png'
import './assets/css/Style.css'
import TemplateHeader from "./assets/layaouts/header.jsx";
import Footer from "./assets/layaouts/footer.jsx";
import ListExpedientes from "./components/Pages/ListExpedientes.jsx";
import RegisExpEstuden from "./components/Forms/RegisExpEstudent.jsx";
import ListSolicitudCoorCa from "./components/Pages/ListSolicitudCoorCa.jsx";
import ListSolicitudDecanos from "./components/Pages/ListSolicitudDecanos.jsx";
import Home from './components/Pages/Home.jsx'

import NewExpedient from "./components/Modals/NewExpedient.jsx";

import List from "./components/DateTables/List.jsx";

import MyDataTable from "./components/DateTables/DesignTables.jsx";
import RegisSolicitud from "./components/Forms/RegisSolicitud.jsx";
import RegisSolicitudCoor from "./components/Forms/RegisSolicitudCoor.jsx";
import ListSolicitudInstruc from "./components/Pages/ListSolicitudInstruc.jsx";
import RegisSolicitudInstru from "./components/Forms/RegisSolicitudInstru.jsx";

import RegisSolicitudCoorTest from "./components/pruebas/RegisCoor.jsx";

import RegisTes from "./components/Forms/RegisTes.jsx";

import Ded from "./components/Forms/Ded.jsx";




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App d-flex flex-column min-vh-100">
        {/*Mostrando el Header*/}
        <TemplateHeader />
        <Routes>
        <Route path="/" element={ <Home /> } />
          <Route path="/ListExpedientes" element={<ListExpedientes />} />
          <Route path="/RegisExpEstudent" element={<RegisExpEstuden />} />
          <Route path="/RegisSolicitud" element={<RegisSolicitud />} />
          <Route
            path="/ListSolicitudCoorCa"
            element={<ListSolicitudCoorCa />}
          />
           <Route
            path="/RegisSolicitudCoor"
            element={<RegisSolicitudCoor />}   
          />
              <Route
            path="/ListSolicitudInstruc"
            element={<ListSolicitudInstruc />}   
          />
           <Route
            path="/RegisSolicitudInstru"
            element={<RegisSolicitudInstru />}   
          />

          <Route
            path="/ListSolicitudDecanos"
            element={<ListSolicitudDecanos />}
          />

          <Route
            path="/RegisCoor"
            element={<RegisSolicitudCoorTest />}
          />



          {/*----TestRegis--------*/}

          <Route
            path="/RegisTes"
            element={<RegisTes />}
          />

          {/*-------fin----------*/}

          <Route
            path="/ded"
            element={<Ded />}
          />

       
          <Route path="/NewExpedient" element={<NewExpedient />} />
       {/*  <Route path="/List" element={<List />} />        */ }   
          <Route path="/DesignTables" element={<MyDataTable />} />


        </Routes>


         

        <main className="App-body">
          {/* Contenido principal de la página */}




        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
