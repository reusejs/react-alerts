import React from "react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import "./tailwind.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AlertWrapper({ visible, config, ...props }) {
  console.log("config", config);

  return (
    <div
      aria-live="assertive"
      className={classNames(
        "fixed px-4 py-6 pointer-events-none sm:p-6",
        config.wrapperClasses || "inset-0 flex items-end sm:items-start"
      )}
    >
      <div
        className={classNames(
          "flex flex-col space-y-4",
          config.alignmentClasses || "w-full items-center sm:items-end"
        )}
      >
        {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
        <Transition
          show={visible}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {props.children}
        </Transition>
      </div>
    </div>
  );
}

export default AlertWrapper;
