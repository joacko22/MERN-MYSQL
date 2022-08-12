import { pool } from "./../server/db.js";
export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);

    res.json(result[0]);
    if (result.length === 0) {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body; // extraigo los datos del body
    const [result] = await pool.query(
      "INSERT INTO tasks (title, description) VALUES (?,?)",
      [title, description]
    );
    res.setHeader("Location", `${req.originalUrl}/${result.insertId}`);
    res.json({
      message: "Task created",
      task: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "UPDATE tasks SET title = ?, description = ? WHERE id = ?",
      [title, description, req.params.id]
    );
    res.json({
      message: "Task updated",
      task: req.params.id,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]); // es lo mismo que hacer const {id} = req.params;

    res.json({
      result: result.affectedRows,
      msg: "Task deleted",
    });
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "Task not found" });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
