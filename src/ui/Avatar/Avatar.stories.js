import React from "react";

import Avatar from "./index";

export default {
  title: "Design System/Avatar",
  component: Avatar,
  parameters: {
    componentSubtitle: "Renders the avatar in the NavBar",
  },
};

const Template = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
  initials: "JD",
  firstname: "John",
  lastname: "Doe",
  email: "john_d@gmail.com",
  children: (
    <div>
      <a href="https://google.com">Logout</a>
    </div>
  ),
};

// TODO account for no props but still render something
