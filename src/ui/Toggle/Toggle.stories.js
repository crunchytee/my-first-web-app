import React from "react";

import Toggle from "./index";

export default {
  title: "Design System/Toggle",
  component: Toggle,
  parameters: {
    componentSubtitle: "Renders different types of toggles",
  },
};

const Template = (args) => <Toggle {...args} />;

export const OnToggle = Template.bind({});
OnToggle.args = {
  on: true,
  onChange: () => {},
};

export const OnToggleDisabled = Template.bind({});
OnToggleDisabled.args = {
  on: true,
  disabled: true,
  onChange: () => {},
};

export const OffToggle = Template.bind({});
OffToggle.args = {
  on: false,
  onChange: () => {},
};

export const OffToggleDisabled = Template.bind({});
OffToggleDisabled.args = {
  on: false,
  disabled: true,
  onChange: () => {},
};
