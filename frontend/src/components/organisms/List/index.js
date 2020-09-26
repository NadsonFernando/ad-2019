import React from "react";

import { Wrapper, Card, Description } from "./styles";

export default function List({ provider, field }) {
  return (
    <Wrapper>
      {provider &&
        provider.map((item, index) => (
          <Card key={index.toString()}>
            <Description value={item[field]} />
          </Card>
        ))}
    </Wrapper>
  );
}
