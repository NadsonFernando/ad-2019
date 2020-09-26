import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { Wrapper, WrapperContent } from "./styles";

import ActionType from "@redux/actions";

import Header from "@components/molecules/Header";
import Form from "@components/molecules/Form";

const fields = [
  {
    name: "name",
    placeholder: "Digite o nome",
    required: true,
  },
  {
    name: "email",
    placeholder: "Digite o email",
    type: "email",
    required: true,
  },
];

export default function Friend() {
  const dispatch = useDispatch();

  function onRegisterFriend(values) {
    dispatch({
      type: ActionType.SAVE_FRIEND,
      friend: values,
      dispatch,
    });
  }

  useEffect(() => {
    async function onFetchFrieds() {
      dispatch({
        type: ActionType.FETCH_FRIENDS,
        dispatch,
      });
    }

    onFetchFrieds();
  }, [dispatch]);

  return (
    <Wrapper>
      <Header title="Cadastrar amigo" />
      <WrapperContent>
        <Form
          fields={fields}
          buttonName="Cadastrar"
          onResolve={onRegisterFriend}
        />
      </WrapperContent>
    </Wrapper>
  );
}
