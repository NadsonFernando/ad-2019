import React from "react";

import { Wrapper, Title, WrapperButtonActions } from "./styles";

export default function Header({ title, actions }) {
  return (
    <Wrapper>
      <Title value={title} />
      {actions && <WrapperButtonActions>{actions()}</WrapperButtonActions>}
    </Wrapper>
  );
}
