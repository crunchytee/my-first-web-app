import React from "react";

import Checkbox from "./index";

export default {
  title: "Design System/Checkbox",
  component: Checkbox,
  parameters: {
    componentSubtitle: "Renders different types of checkboxes",
  },
};

const Template = (args) => <Checkbox {...args} />;

export const CheckedCheckbox = Template.bind({});
CheckedCheckbox.args = {
  checked: true,
};

export const CheckedCheckboxDisabled = Template.bind({});
CheckedCheckboxDisabled.args = {
  checked: true,
  disabled: true,
};

export const UncheckedCheckbox = Template.bind({});
UncheckedCheckbox.args = {
  checked: false,
};

export const UncheckedCheckboxDisabled = Template.bind({});
UncheckedCheckboxDisabled.args = {
  checked: false,
  disabled: true,
};
