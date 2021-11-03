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
      <div
        className={classNames(
          "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden",
          config.borderClasses || "border-b-2 border-green-400"
        )}
      >
        <div className="p-4">
          <div className="flex items-center">
            <div className="w-0 flex-1 flex justify-between">
              <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                {config.message}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => {
                  onAction();
                }}
              >
                <span className="sr-only">Close</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AlertWrapper>
  );
}

export const canBeClosed = mountComponent(Closable(ClosableAlert));

function Exportable(config) {
  return canBeClosed({ config });
}

export default Exportable;
