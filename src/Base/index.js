import React from "react";
import { mountComponent } from "@reusejs/react-utils";
import { XIcon } from "@heroicons/react/solid";
import Closable from "../closable";
import AlertWrapper from "../alertWrapper";
import "../tailwind.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ClosableAlert({ visible, onAction, config }) {
  return (
    <AlertWrapper visible={visible} config={config}>
      <config.AlertContent
        visible={visible}
        config={config}
        onAction={onAction}
      />
    </AlertWrapper>
  );
}

export const canBeClosed = mountComponent(Closable(ClosableAlert));

function Exportable(config) {
  return canBeClosed({ config });
}

export default Exportable;
