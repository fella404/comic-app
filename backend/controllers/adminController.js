import User from "../models/User.js";

// get all user
export const getUsers = async (_, res) => {
  try {
    // find user with specific role(reader)
    const users = await User.find({ role: "reader" });
    res.send(users);
  } catch (error) {
    console.error("Error in getUsers controller: " + error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// get user by id
export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: id, role: "reader" });

    if (user === null) {
      return res
        .status(400)
        .json({ message: "Cannot get this user information(admin)" });
    }

    res.send(user);
  } catch (error) {
    console.error("Error in getUser controller: " + error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// update user data
export const updateUser = async (req, res) => {
  // get user id
  const { id } = req.params;
  // get all the input
  const { body } = req;

  try {
    // get user by id and update the data
    const user = await User.findOneAndUpdate(
      { _id: id, role: "reader" }, // find user by id and filter by reader role only
      body, // new data
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user, message: "User updated successfully" });
  } catch (error) {
    console.error("Error in updateUser controller: " + error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// delete user data
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    /// find user by id and filter by reader role only
    const user = await User.findOneAndDelete({ _id: id, role: "reader" });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error in deleteUser controller: " + error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};
