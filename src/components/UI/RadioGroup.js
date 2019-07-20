import React, { useState } from "react";
import RadioItem from "./RadioItem";

const RadioGroup = props => {
  const renderRadios = props.options.map(el => {
    return (
      <RadioItem
        key={el.value}
        selectedRadio={props.selectedRadio}
        {...props}
        {...el}
      />
    );
  });

  return <form>{renderRadios}</form>;
};

export default RadioGroup;
