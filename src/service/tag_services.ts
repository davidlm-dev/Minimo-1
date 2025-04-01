import Tag, { ITag } from '../models/tag_models.js';

// Crear una nueva etiqueta
export const createTag = async (tagData: ITag) => {
    const tag = new Tag(tagData);
    return await tag.save();
};

// Obtener todas las etiquetas con paginación
export const getAllTags = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;
    return await Tag.find().skip(skip).limit(limit);
};

// Obtener una etiqueta por su ID
export const getTagById = async (id: string) => {
    return await Tag.findById(id);
};

// Actualizar una etiqueta
export const updateTag = async (id: string, updateData: Partial<ITag>) => {
    return await Tag.updateOne({ _id: id }, { $set: updateData });
};

// Eliminar una etiqueta
export const deleteTag = async (id: string) => {
    return await Tag.deleteOne({ _id: id });
};
