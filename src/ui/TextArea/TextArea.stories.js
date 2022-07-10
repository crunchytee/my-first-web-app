import React from "react";

import TextArea from "./index";

export default {
  title: "Design System/Text Area",
  component: TextArea,
  parameters: {
    componentSubtitle: "Renders the text area",
  },
};

const Template = (args) => <TextArea {...args} />;

export const DefaultTextArea = Template.bind({});
DefaultTextArea.args = {
  label: "Description",
  placeholder: "Write Something",
};
