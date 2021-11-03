import React, { useState, useEffect } from "react";

const Closable = (Component) => ({ ...props }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      onAction(true);
    }, props.config.timeout || 3000);
  });

  const onAction = (value) => {
    setVisible(false);
    props.resolve(value);
  };

  return <Component onAction={onAction} visible={visible} {...props} />;
};

export default Closable;
