import { Router } from "express";
import veiculoController from "./controllers/VeiculoController";

const routes = Router();

routes.get('/veiculos', veiculoController.index);
routes.get('/veiculos/:id', veiculoController.show);
routes.post('/veiculos', veiculoController.create);
routes.put('/veiculos/:id', veiculoController.update);
routes.delete('/veiculos/:id', veiculoController.delete);

export default routes;
