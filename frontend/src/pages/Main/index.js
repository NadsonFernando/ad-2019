import React from "react";

import { Wrapper, Content } from "./styles";

import Routes from "@src/routes";

export default function Main() {
  return (
    <Wrapper>
      <Content>
        <Routes />
      </Content>
    </Wrapper>
  );
}
