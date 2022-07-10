import React from "react";

import Color from "./index";

export default {
  title: "Design System/Color",
  component: Color,
};

const Template = (args) => <Color {...args} />;

export const Gray800 = Template.bind({});
Gray800.args = {
  color: "gray-800",
  grayscale: true,
};

export const Gray700 = Template.bind({});
Gray700.args = {
  color: "gray-700",
  grayscale: true,
};

export const Gray600 = Template.bind({});
Gray600.args = {
  color: "gray-600",
  grayscale: true,
};

export const Gray500 = Template.bind({});
Gray500.args = {
  color: "gray-500",
  grayscale: true,
};

export const Gray400 = Template.bind({});
Gray400.args = {
  color: "gray-400",
  grayscale: true,
};

export const Gray300 = Template.bind({});
Gray300.args = {
  color: "gray-300",
  grayscale: true,
};

export const Gray200 = Template.bind({});
Gray200.args = {
  color: "gray-200",
  grayscale: true,
};

export const Gray100 = Template.bind({});
Gray100.args = {
  color: "gray-100",
  grayscale: true,
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const Error = Template.bind({});
Error.args = {
  color: "error",
};

export const Accent = Template.bind({});
Accent.args = {
  color: "accent",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
};

export const GradientPrimary = Template.bind({});
GradientPrimary.args = {
  color: "primary",
  gradient: true,
};

export const GradientSecondary = Template.bind({});
GradientSecondary.args = {
  color: "secondary",
  gradient: true,
};

export const GradientAccent = Template.bind({});
GradientAccent.args = {
  color: "accent",
  gradient: true,
};
