const express = require("express");
const { body } = require("express-validator");

const modelController = require("../controllers/modelController");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// POST /model/prompt
router.post(
  "/prompt",
  [
    body("chatId").trim().not().isEmpty().withMessage("Please enter a chatId"),
    body("prompt").trim().not().isEmpty().withMessage("Please enter a prompt"),
  ],
  isAuth,
  modelController.prompt
);

// POST /model/promptWithImage
router.post(
  "/promptWithImage",
  [
    body("prompt").trim().not().isEmpty().withMessage("Please enter a prompt"),
    body("image").trim().not().isEmpty().withMessage("Please upload an image"),
  ],
  isAuth,
  modelController.promptWithImage
);

// POST /model/promptWithMaskedImage
router.post(
  "/promptWithMaskedImage",
  [
    body("chatId").trim().not().isEmpty().withMessage("Please enter a chatId"),
    body("prompt").trim().not().isEmpty().withMessage("Please enter a prompt"),
    body("image").trim().not().isEmpty().withMessage("Please upload an image"),
    body("maskedImage").trim().not().isEmpty().withMessage("Please upload a maskedImage"),
  ],
  isAuth,
  modelController.promptWithMaskedImage
);

// POST /model/getSimilarProducts
router.post(
  "/getSimilarProducts",
  [
    body("image").trim().not().isEmpty().withMessage("Please upload an image"),
  ],
  isAuth,
  modelController.getSimilarProducts
);

module.exports = router;
