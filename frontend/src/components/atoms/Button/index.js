import React from "react";

import { Wrapper } from "./styles";

export default function BUtton({ value, ...properties }) {
  return <Wrapper {...properties}>{value}</Wrapper>;
}
