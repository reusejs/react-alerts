import React from "react";
import { XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AlertContent = React.forwardRef(({ visible, onAction, config }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden",
        config.borderClasses || "border-b-2 border-green-400"
      )}
    >
      <p className="block text-sm font-medium text-gray-900 p-2">
        My special Alert
      </p>
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
  );
});

export default AlertContent;
