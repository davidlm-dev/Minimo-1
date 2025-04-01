import { Request, Response } from 'express';
import { createTag, getAllTags, getTagById, deleteTag, updateTag } from '../service/tag_services.js';

export const createTagHandler = async (req: Request, res: Response) => {
    try {
        const tagData = req.body;
        const newTag = await createTag(tagData); // Corregido aquí
        res.status(201).json(newTag);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllTagsHandler = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const tags = await getAllTags(page, limit); // Corregido aquí
        res.status(200).json(tags);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getTagByIdHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tag = await getTagById(id); // Corregido aquí
        if (tag) {
            res.status(200).json(tag);
        } else {
            res.status(404).json({ message: 'Etiqueta no encontrada' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTagHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tagData = req.body;
        const updatedTag = await updateTag(id, tagData); // Corregido aquí
        if (updatedTag) {
            res.status(200).json(updatedTag);
        } else {
            res.status(404).json({ message: 'Etiqueta no encontrada' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteTagHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedTag = await deleteTag(id); // Corregido aquí
        if (deletedTag) {
            res.status(200).json({ message: 'Etiqueta eliminada correctamente' });
        } else {
            res.status(404).json({ message: 'Etiqueta no encontrada' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
