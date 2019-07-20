import React, { useState } from "react";
import Toast from "./Toast";
import RadioGroup from "../UI/RadioGroup";

const Ringtones = props => {
  const [selected, setSelected] = useState({ work: null, break: null });
  const [toasts] = useState([{ title: "work" }, { title: "break" }]);
  const options = [
    { label: "none", value: "none", link: "" },
    { label: "default", value: "default", link: "" },
    { label: "alarm", value: "alarm", link: "" },
    { label: "alert", value: "alert", link: "" },
    { label: "beep", value: "beep", link: "" },
    { label: "bell", value: "bell", link: "" },
    { label: "bird", value: "bird", link: "" },
    { label: "bugle", value: "bugle", link: "" },
    { label: "digital", value: "digital", link: "" },
    { label: "drop", value: "drop", link: "" },
    { label: "horn", value: "horn", link: "" },
    { label: "music", value: "music", link: "" },
    { label: "ring", value: "ring", link: "" },
    { label: "warning", value: "warning", link: "" },
    { label: "whistle", value: "whistle", link: "" }
  ];

  const selectChangeHandler = (name, value) => {
    setSelected(preV => {
      return { ...preV, [name]: value };
    });
  };

  const toastsRender = toasts.map(el => {
    return (
      <div key={el.title}>
        <Toast {...el} key={el.title} />
        <RadioGroup
          options={options}
          name={el.title}
          radioChanged={selectChangeHandler}
          selectedRadio={selected[el.title]}
        />
      </div>
    );
  });

  return <div className="ringtones">{toastsRender}</div>;
};

export default Ringtones;
