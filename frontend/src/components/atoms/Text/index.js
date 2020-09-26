import React from "react";

import { Label } from "./styles";

export default function Text({ value, ...properties }) {
  return <Label {...properties}>{value}</Label>;
}
