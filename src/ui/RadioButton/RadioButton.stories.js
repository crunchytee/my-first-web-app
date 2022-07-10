import React from "react";

import RadioButton from "./index";

export default {
  title: "Design System/Radio Button",
  component: RadioButton,
  parameters: {
    componentSubtitle: "Renders types of checkboxes",
  },
};

const Template = (args) => <RadioButton {...args} />;

export const SelectedRadioButton = Template.bind({});
SelectedRadioButton.args = {
  checked: true,
};

export const SelectedRadioButtonDisabled = Template.bind({});
SelectedRadioButtonDisabled.args = {
  checked: true,
  disabled: true,
};

export const UnselectedRadioButton = Template.bind({});
UnselectedRadioButton.args = {
  checked: false,
};

export const UnselectedRadioButtonDisabled = Template.bind({});
UnselectedRadioButtonDisabled.args = {
  checked: false,
  disabled: true,
};
