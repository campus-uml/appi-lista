import { Router } from 'express';
import {
  allController,
  findController,
  createController,
  updateController,
  deleteController
} from '../../controllers/articulos/articulosController.js';

const articulosRouter = Router();

articulosRouter.get('/', allController);
articulosRouter.get('/:id', findController);
articulosRouter.post('/', createController);
articulosRouter.put('/:id', updateController);
articulosRouter.delete('/:id', deleteController);

export default articulosRouter;
