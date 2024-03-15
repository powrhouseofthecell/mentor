import express from 'express';
const router = express.Router();
import path from 'path';

import multer from 'multer';
import resources_controller from '../../controllers/resources';

const upload_path = path.join(__dirname, '../../public/uploads');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, upload_path);
  },
  filename: (_req, file, cb) => {
    cb(null, file.originalname);
  },
});

router.get('/', resources_controller.get_all_resources);

const uploadStorage = multer({ storage: storage });

router.post('/upload', uploadStorage.single('file'), resources_controller.upload);

router.get('/download/:filename', resources_controller.download);

export default router;
