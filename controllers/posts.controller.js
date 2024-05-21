import { postModel } from "../models/posts.model.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.findAllPost();
    return res.json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

export const createPosts = async (req, res) => {
  try {
    const { usuario, url, descripcion } = req.body;
    const post = await postModel.create({ usuario, url, descripcion });
    return res.status(201).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

export const updatePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const { usuario, url, descripcion } = req.body;
    if (!usuario || !url || !descripcion) {
      return res.json({ ok: false, msg: "todos los campos obligatorios" });
    }
    const updatePosts = {
      id,
      usuario,
      url,
      descripcion,
    };
    const posts = await postModel.updateOnePost(updatePosts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};
