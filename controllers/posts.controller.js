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
    const newPost = { usuario, url, descripcion };
    const posts = await postModel.create(newPost);
    return res.json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

export const updatePosts = async (req, res) => {
  try {
    const id = await postModel.updateOnePost(req.params.id);
    return res.json(id);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};
