import upload from './upload';
import get_all_resources from './get_all_resources';
import download from './download';

const resources_controller = {
  get_all_resources,
  upload,
  download,
};

export default resources_controller;
