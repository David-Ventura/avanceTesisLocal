import { Router } from "express";
import{
    getData,
    saveTask,
    createTask,
    getAreasTrabajo,
    getEmpleadosUso,
    getEstudiantes,
    getCarreras,
    consultaId,
    create,
    createTask2,
} from "../controllers/Server.Controller.js"


const url = '/sse/v1'

const router = Router();


router.get(url+'/datos',getData)
router.post(url+'/save', saveTask)
router.post(url+'/createTask', createTask)

router.get(url+'/areas',getAreasTrabajo)
router.get(url+'/empleados',getEmpleadosUso)
router.get(url+'/estudiantes',getEstudiantes)
router.get(url+'/carreras',getCarreras)
router.get(url+'/ultimoId', consultaId)
router.get(url+'/createIn', create)
router.post(url+'/createTask2',createTask2)




export default router;