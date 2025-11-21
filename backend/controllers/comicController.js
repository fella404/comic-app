import Comic from "../models/Comic.js";

export const addComic = async (req, res) => {
  const { title, description, coverImage, author, genres } = req.body;

  // input validator
  if (!title || !description || !coverImage || !author) {
    return res.status(400).json({
      message: "Title, description, coverImage and author are required",
    });
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

    res.status(201).json({ comic, message: "Comic added successfully" });
  } catch (error) {
    console.error("Error in addComic controller: " + error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getComics = async (req, res) => {
  try {
    const comic = await Comic.find();

    if (!comic) {
      return res.status(400).json({ message: "Failed to get comics" });
    }

    res.json({ comic, message: "Comics retrieved successfully" });
  } catch (error) {
    console.error("Error in getComics controller: " + error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getComic = async (req, res) => {
  const { id } = req.params;

  try {
    const comic = await Comic.findById(id);

    if (!comic) {
      return res.status(400).json({ message: "Failed to get comic" });
    }

    res.json({ comic, message: "Comic retrieved successfully" });
  } catch (error) {
    console.error("Error in getComic controller: " + error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateComic = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const comic = await Comic.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!comic) {
      return res.status(400).json({ message: "Failed to update comic" });
    }

    res.json({ comic, message: "Comic updated successfully" });
  } catch (error) {
    console.error("Error in updateComic controller: " + error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteComic = async (req, res) => {
  const { id } = req.params;

  try {
    const comic = Comic.findByIdAndDelete(id);

    if (!comic) {
      return res.status(400).json({ message: "Failed to delete comic" });
    }

    res.json({ message: "Comic deleted successfully" });
  } catch (error) {
    console.error("Error in deleteComic controller: " + error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};
