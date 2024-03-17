import express from "express";
const router = express.Router();
import path from "path";

import multer from "multer";
import resources_controller from "../../controllers/resources";
import auth_controller from "../../controllers/auth";

const upload_path = path.join(__dirname, "../../public/uploads");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, upload_path);
  },
  filename: (_req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadStorage = multer({ storage: storage });

router.get(
  "/",
  auth_controller.protect,
  resources_controller.get_all_resources,
);
router.post(
  "/upload",
  auth_controller.protect,
  uploadStorage.single("file"),
  resources_controller.upload,
);
router.get(
  "/download/:filename",
  auth_controller.protect,
  resources_controller.download,
);

export default router;
