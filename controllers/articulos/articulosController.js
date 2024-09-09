import {
  queryAll,
  queryFind,
  queryCreate,
  queryUpdate,
  queryDelete
} from "../../db/articulos/articulosQueries.js";

const allController = async (req, res) => {
  try {
    const articulos = await queryAll();
    res.json(articulos);
  } catch (error) {
    res.status(500).send(error);
  }
};

const findController = async (req, res) => { 
  try {
    const articulo = await queryFind(req.params.id);
    res.json(articulo);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createController = async (req, res) => {
  try {
    const data = req.body;
    const result = await queryCreate(data);
    res.json({ message: 'Artículo creado con éxito', id: result.insertId });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateController = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await queryUpdate(id, data);
    if (result.affectedRows > 0) {
      res.json({ message: 'Artículo actualizado con éxito', article: result });
    } else {
      res.status(404).json({ message: 'Artículo no encontrado' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteController = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await queryDelete(id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Artículo eliminado con éxito' });
    } else {
      res.status(404).json({ message: 'Artículo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el artículo', error: error.message });
  }
};

export {
  allController,
  findController,
  createController,
  updateController,
  deleteController
};
