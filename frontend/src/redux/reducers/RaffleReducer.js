import ActionType from "@redux/actions";
import RaffleService from "@services/http/RaffleService";

const initialState = {
  raffles: [],
};

async function onFindAll({ state, dispatch }) {
  const { isSuccess, data } = await RaffleService.findAll();

  if (isSuccess) {
    dispatch({
      type: ActionType.FETCH_RAFFLES_REDUCER_PERSIST,
      raffles: data,
    });
  }

  return state;
}

async function onRafle({ state, dispatch, friends }) {
  const { isSuccess } = await RaffleService.raffle(friends);

  if (isSuccess) {
  }

  return state;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_RAFFLES:
      return onFindAll({ state, dispatch: action.dispatch });
    case ActionType.RAFFLE:
      return onRafle({
        state,
        dispatch: action.dispatch,
        friends: action.friends,
      });
    case ActionType.FETCH_RAFFLES_REDUCER_PERSIST:
      return { ...state, raffles: action.raffles };
    default:
      return state;
  }
};
