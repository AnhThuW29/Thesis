const express = require("express");
const router = express.Router();
const User = require("../models/user");
const {
    createUser,
    userSignIn,
    getUser,
    getUsers,
} = require("../controllers/UserController");
const {
    validateUserSignUp,
    validateUserSignIn,
    userValidation,
} = require("../middlewares/validation/user");

router.post("/create-user", validateUserSignUp, userValidation, createUser);

router.post("/sign-in", validateUserSignIn, userValidation, userSignIn);

router.get("/:id", getUser);

router.get("/get-all/users", async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
