import Api from "@services/api";
import ResponseUtil from "@utils/ResponseUtil";

const resource = "/raffles";

async function raffle(friends) {
  let response = {};

  try {
    response = await Api.post(resource, friends);
  } catch (error) {
    response = error.response;
  }

  return ResponseUtil.filter(response);
}

export default { raffle };
