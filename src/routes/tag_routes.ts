import express from 'express';
import { createTagHandler, deleteTagHandler, getAllTagsHandler, getTagByIdHandler, updateTagHandler } from '../controllers/tag_controller.js';

const router = express.Router();

/**
 * @swagger
 * /api/tags/create:
 *   post:
 *     summary: Crear una nueva etiqueta
 *     tags: [Etiquetas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - number
 *               - idUsuario
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre de la etiqueta
 *               description:
 *                 type: string
 *                 description: Descripción de la etiqueta
 *               number:
 *                 type: integer
 *                 description: Número único de la etiqueta
 *               idUsuario:
 *                 type: string
 *                 description: ID del usuario asociado a la etiqueta
 *     responses:
 *       201:
 *         description: Etiqueta creada exitosamente
 */
router.post('/tags/create', createTagHandler);

/**
 * @swagger
 * /api/tags:
 *   get:
 *     summary: Obtener todas las etiquetas con paginación y filtrado
 *     tags: [Etiquetas]
 *     parameters:
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: search
 *         required: false
 *         schema:
 *           type: string
 *           description: Filtrar las etiquetas por nombre
 *     responses:
 *       200:
 *         description: Lista de etiquetas
 */
router.get('/tags', getAllTagsHandler);

/**
 * @swagger
 * /api/tags/{id}:
 *   get:
 *     summary: Obtener detalles de una etiqueta específica
 *     tags: [Etiquetas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos de la etiqueta
 *       404:
 *         description: Etiqueta no encontrada
 */
router.get('/tags/:id', getTagByIdHandler);

/**
 * @swagger
 * /api/tags/update/{id}:
 *   put:
 *     summary: Actualizar una etiqueta por su ID
 *     tags: [Etiquetas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - number
 *               - idUsuario
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre de la etiqueta
 *               description:
 *                 type: string
 *                 description: Descripción de la etiqueta
 *               number:
 *                 type: integer
 *                 description: Número único de la etiqueta
 *               idUsuario:
 *                 type: string
 *                 description: ID del usuario asociado a la etiqueta
 *     responses:
 *       200:
 *         description: Etiqueta actualizada exitosamente
 *       404:
 *         description: Etiqueta no encontrada
 */
router.put('/tags/update/:id', updateTagHandler);

/**
 * @swagger
 * /api/tags/delete/{id}:
 *   delete:
 *     summary: Eliminar una etiqueta por su ID
 *     tags: [Etiquetas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Etiqueta eliminada exitosamente
 *       404:
 *         description: Etiqueta no encontrada
 */
router.delete('/tags/delete/:id', deleteTagHandler);

export default router;
