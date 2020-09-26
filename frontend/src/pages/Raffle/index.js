import React, { useEffect } from "react";

import _ from "underscore";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, WrapperActions } from "./styles";

import ActionType from "@redux/actions";

import Button from "@components/atoms/Button";
import Header from "@components/molecules/Header";
import List from "@components/organisms/List";

export default function Raffle() {
  const dispatch = useDispatch();

  const { friends } = useSelector((state) => state.friend);

  function Actions() {
    function onNewFriend() {
      window.location.href = "/friend";
    }

    function onRaffle() {
      dispatch({
        type: ActionType.RAFFLE,
        friends: _.pluck(friends, "_id"),
        dispatch,
      });

      alert("Amigo secreto sorteado");
    }

    return (
      <WrapperActions>
        <Button value="Novo Amigo" onClick={onNewFriend} />
        <Button
          value="Sortear"
          onClick={onRaffle}
          style={{
            marginLeft: 10,
            background: "red",
            border: "none",
            height: 25,
            borderRadius: 4,
            color: "#fff",
            width: 100,
          }}
        />
      </WrapperActions>
    );
  }

  useEffect(() => {
    async function onFetchFriends() {
      dispatch({
        type: ActionType.FETCH_FRIENDS,
        dispatch,
      });
    }

    onFetchFriends();
  }, [dispatch]);

  return (
    <Wrapper>
      <Header title="Sorteio" actions={Actions} />
      <List provider={friends} field="name" />
    </Wrapper>
  );
}
