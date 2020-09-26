import Api from "@services/api";
import ResponseUtil from "@utils/ResponseUtil";

const resource = "/friends";

async function findAll() {
  let response = {};

  try {
    response = await Api.get(resource);
  } catch (error) {
    response = error.response;
  }

  return ResponseUtil.filter(response);
}

async function save(friend) {
  let response = {};

  try {
    response = await Api.post(resource, friend);
  } catch (error) {
    response = error.response;
  }

  return ResponseUtil.filter(response);
}

export default { findAll, save };
