import ActionType from "@redux/actions";
import RaffleService from "@services/http/RaffleService";

const initialState = {};

async function onRafle({ state, dispatch, friends }) {
  const { isSuccess } = await RaffleService.raffle(friends);

  if (isSuccess) {
  }

  return state;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.RAFFLE:
      return onRafle({
        state,
        dispatch: action.dispatch,
        friends: action.friends,
      });
    default:
      return state;
  }
};
