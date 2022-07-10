import React from "react";

import Dropdown from "./index";

export default {
  title: "Design System/Dropdown",
  component: Dropdown,
  parameters: {
    componentSubtitle: "Renders different types of dropdowns",
  },
};

const Template = (args) => <Dropdown {...args} />;

export const DropdownDefault = Template.bind({});
DropdownDefault.args = {
  name: "unit",
  label: "Unit",
  defaultValue: " ",
  values: [" ", "ml", "oz", "fl oz", "kg"],
  placeholder: "Phone Number",
  size: "large",
};
