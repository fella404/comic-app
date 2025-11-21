import Comic from "../models/Comic.js";

export const addComic = async (req, res) => {
  const { title, description, coverImage, author, genres } = req.body;

  // input validator
  if (!title || !description || !coverImage || !author) {
    return res
      .status(400)
      .json({ message: "Title, description, and author are required" });
  }

  try {
    // create comic
    const comic = await Comic.create({
      title,
      description,
      coverImage,
      author,
      genres,
    });

    if (!comic) {
      return res.status(400).json({ message: "Failed to create comic" });
    }

    res.status(201).send(comic);
  } catch (error) {
    console.error("Error in addComic controller: " + error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
