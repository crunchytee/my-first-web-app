import React from "react";

import Toast from "./index";

export default {
  title: "Design System/Toast",
  component: Toast,
  parameters: {
    componentSubtitle: "Renders different types of Toasts",
  },
};

const Template = (args) => <Toast {...args} />;

export const ErrorToast = Template.bind({});
ErrorToast.args = {
  appearance: "error",
  children: "Error",
  autoDismiss: true,
};

export const ErrorToastDismissable = Template.bind({});
ErrorToastDismissable.args = {
  appearance: "error",
  children: "Error",
  autoDismiss: false,
};

export const SuccessToast = Template.bind({});
SuccessToast.args = {
  appearance: "success",
  children: "Success",
  autoDismiss: true,
};

export const SuccessToastDismissable = Template.bind({});
SuccessToastDismissable.args = {
  appearance: "success",
  children: "Success",
  autoDismiss: false,
};

export const InfoToast = Template.bind({});
InfoToast.args = {
  appearance: "info",
  children: "Info",
  autoDismiss: true,
};

export const InfoToastDismissable = Template.bind({});
InfoToastDismissable.args = {
  appearance: "info",
  children: "Info",
  autoDismiss: false,
};
