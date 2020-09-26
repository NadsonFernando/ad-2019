import React, { useState } from "react";

import { Wrapper, WrapperFields } from "./styles";

import Input from "@components/atoms/Input";
import Button from "@components/atoms/Button";

export default function Form({ fields = [], buttonName, onResolve }) {
  const [values, setValues] = useState({});

  function onChange(evt) {
    const { id, value } = evt.target;

    let newValues = { ...values };

    newValues[id] = value;

    setValues(newValues);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    onResolve && onResolve(values);
  }

  return (
    <Wrapper onSubmit={onSubmit}>
      <WrapperFields>
        {fields.map((field, index) => (
          <Input
            key={index.toString()}
            id={field.name}
            onChange={onChange}
            placeholder={field.placeholder}
            style={{ marginRight: 10 }}
            {...field}
          />
        ))}
      </WrapperFields>
      <Button type="submit" value={buttonName} />
    </Wrapper>
  );
}
