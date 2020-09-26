import ActionType from "@redux/actions";
import FriendService from "@services/http/FriendService";

const initialState = {
  friends: [],
};

async function onFindAll({ state, dispatch }) {
  const { isSuccess, data } = await FriendService.findAll();

  if (isSuccess) {
    dispatch({
      type: ActionType.FETCH_FRIENDS_REDUCER_PERSIST,
      friends: data,
    });
  }

  return state;
}

async function onSave({ state, friend, dispatch }) {
  const { isSuccess } = await FriendService.save(friend);

  if (isSuccess) {
    alert("Amigo salvo com sucesso");
    window.location.href = "/raffle";
  }

  return state;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_FRIENDS:
      return onFindAll({ state, dispatch: action.dispatch });
    case ActionType.SAVE_FRIEND:
      return onSave({
        state,
        dispatch: action.dispatch,
        friend: action.friend,
      });
    case ActionType.FETCH_FRIENDS_REDUCER_PERSIST:
      return { ...state, friends: action.friends };
    default:
      return state;
  }
};
