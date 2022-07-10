import React from "react";

import Typography from "./index";

export default {
  title: "Design System/Typography",
  component: Typography,
  parameters: {
    componentSubtitle: "Displays typography in different sizes",
  },
};

const Template = (args) => <Typography {...args} />;

export const DisplayLarge = Template.bind({});
DisplayLarge.args = {
  children: "The future is in our hands to shape.",
  type: "display",
  size: "large",
};

export const DisplayLargeBold = Template.bind({});
DisplayLargeBold.args = {
  children: "The future is in our hands to shape.",
  type: "display",
  size: "large",
  bold: true,
};

export const DisplayMedium = Template.bind({});
DisplayMedium.args = {
  children: "The future is in our hands to shape.",
  type: "display",
  size: "medium",
};

export const DisplayMediumBold = Template.bind({});
DisplayMediumBold.args = {
  children: "The future is in our hands to shape.",
  type: "display",
  size: "medium",
  bold: true,
};

export const DisplaySmall = Template.bind({});
DisplaySmall.args = {
  children: "The future is in our hands to shape.",
  type: "display",
  size: "small",
};

export const DisplaySmallBold = Template.bind({});
DisplaySmallBold.args = {
  children: "The future is in our hands to shape.",
  type: "display",
  size: "small",
  bold: true,
};

export const TextLarge = Template.bind({});
TextLarge.args = {
  children: "The future is in our hands to shape.",
  type: "text",
  size: "large",
};

export const LinkLarge = Template.bind({});
LinkLarge.args = {
  children: "The future is in our hands to shape.",
  type: "link",
  size: "large",
};

export const TextMedium = Template.bind({});
TextMedium.args = {
  children: "The future is in our hands to shape.",
  type: "text",
  size: "medium",
};

export const LinkMedium = Template.bind({});
LinkMedium.args = {
  children: "The future is in our hands to shape.",
  type: "link",
  size: "medium",
};

export const TextSmall = Template.bind({});
TextSmall.args = {
  children: "The future is in our hands to shape.",
  type: "text",
  size: "small",
};

export const LinkSmall = Template.bind({});
LinkSmall.args = {
  children: "The future is in our hands to shape.",
  type: "link",
  size: "small",
};

export const TextXSmall = Template.bind({});
TextXSmall.args = {
  children: "The future is in our hands to shape.",
  type: "text",
  size: "x-small",
};

export const LinkXSmall = Template.bind({});
LinkXSmall.args = {
  children: "The future is in our hands to shape.",
  type: "link",
  size: "x-small",
};
