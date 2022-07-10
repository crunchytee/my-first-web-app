import React from "react";

import Typography from "../Typography";
import Button from "../Button";

import Modal from "./index";

export default {
  title: "Design System/Modal",
  component: Modal,
  parameters: {
    componentSubtime: "Renders a Modal",
  },
};

const Template = (args) => <Modal {...args} />;

export const OpenModal = Template.bind({});
OpenModal.args = {
  isOpen: true,
  children: (
    <div className="flex flex-col items-center">
      <Typography className="w-min my-2" size="medium" type="display" bold>
        Welcome to GatherFresh
      </Typography>
      <Typography className="w-2/3 my-2 text-center" size="medium" type="text">
        See all the new features we’ve added through our tutorial.
      </Typography>
      <Button type="primary" size="large" className="my-2">
        See Tutorial
      </Button>
    </div>
  ),
};
