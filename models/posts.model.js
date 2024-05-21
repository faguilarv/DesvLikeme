import { pool } from "../database/connection.js";

const findAllPost = async () => {
  const query = {
    text: "SELECT * FROM POSTS ORDER BY LIKES DESC",
  };
  const { rows } = await pool.query(query);
  return rows;
};

const create = async ({ usuario, url, descripcion }) => {
  const query = {
    text: `
        INSERT INTO POSTS (usuario, url, descripcion) VALUES ($1, $2, $3)
        RETURNING *
        `,
    values: [usuario, url, descripcion],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

const updateOnePost = async (id) => {
  const query = {
    text: `
        UPDATE POSTS
        SET likes = likes + 1
        WHERE id = $1
        RETURNING *
        `,
    values: [id],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

export const postModel = {
  create,
  findAllPost,
  updateOnePost,
};
