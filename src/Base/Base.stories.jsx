import React from "react";
import Base from "./index";
import { XIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import AlertContent from "./alertContent"

export default {
  title: "Alerts/Base",
  component: Base,
};



const ClickMeButton = ({ openAlert }) => {
  return <div className="bg-gray-50 min-h-screen w-full flex justify-center items-center">
    <button
      className="p-2 bg-blue-600 hover:bg-gray-700 text-white"
      onClick={() => {
        openAlert()
      }}>Click me</button>
  </div>
}


const Template = (args) => {

  console.log("args", args)

  const openAlert = () => {
    Base({ message: args.message, timeout: 1000, borderClasses: args.borderClasses, alignmentClasses: args.alignmentClasses, wrapperClasses: args.wrapperClasses, AlertContent: AlertContent })
  };

  return (<ClickMeButton openAlert={openAlert} />
  )
};

export const SuccessAlert = Template.bind({});

SuccessAlert.args = {
  message: "Everything went fine",
  borderClasses: "border-b-2 border-green-400"
}

export const ErrorAlert = Template.bind({});

ErrorAlert.args = {
  message: "Something went wrong",
  borderClasses: "border-b-2 border-red-400",
  wrapperClasses: "inset-0 flex items-end sm:items-start",
  alignmentClasses: "w-full items-center sm:items-end",
}

export const LeftAlert = Template.bind({});

LeftAlert.args = {
  message: "Something went wrong",
  borderClasses: "border-b-2 border-red-400",
  wrapperClasses: "left-0 top-0 flex items-start w-full",
  alignmentClasses: "w-full",
}


export const LeftBottomAlert = Template.bind({});

LeftBottomAlert.args = {
  message: "Something went wrong",
  borderClasses: "border-b-2 border-red-400",
  wrapperClasses: "left-0 bottom-0 w-full",
  alignmentClasses: "w-full",
}

export const RightBottomAlert = Template.bind({});

RightBottomAlert.args = {
  message: "Something went wrong",
  borderClasses: "border-b-2 border-red-400",
  wrapperClasses: "right-0 bottom-0 flex items-end sm:items-start w-full",
  alignmentClasses: "w-full items-center sm:items-end",
}

export const CenterBottomAlert = Template.bind({});

CenterBottomAlert.args = {
  message: "Something went wrong",
  borderClasses: "border-b-2 border-red-400",
  wrapperClasses: "inset-x-0 bottom-0 flex w-full",
  alignmentClasses: "w-full items-center",
}


export const CenterTopAlert = Template.bind({});

CenterTopAlert.args = {
  message: "Something went wrong",
  borderClasses: "border-b-2 border-red-400",
  wrapperClasses: "inset-x-0 top-0 flex w-full",
  alignmentClasses: "w-full items-center",
}


export const CenterAlert = Template.bind({});

CenterAlert.args = {
  message: "Something went wrong",
  borderClasses: "border-b-2 border-red-400",
  wrapperClasses: "inset-0 flex w-full",
  alignmentClasses: "w-full items-center justify-center",
}