import React from "react";

import Button from "./index";

export default {
  title: "Design System/Button",
  component: Button,
  parameters: {
    componentSubtitle: "Renders different kinds of buttons",
  },
};

const Template = (args) => <Button {...args} />;

export const LargePrimaryButton = Template.bind({});
LargePrimaryButton.args = {
  kind: "primary",
  size: "large",
  children: "Button",
};

export const LargeSecondaryButton = Template.bind({});
LargeSecondaryButton.args = {
  kind: "secondary",
  size: "large",
  children: "Button",
};

export const LargeSubtleButton = Template.bind({});
LargeSubtleButton.args = {
  kind: "subtle",
  size: "large",
  children: "Button",
};

export const LargeTextButton = Template.bind({});
LargeTextButton.args = {
  kind: "text",
  size: "large",
  children: "Button",
};

export const LargePrimaryButtonDisabled = Template.bind({});
LargePrimaryButtonDisabled.args = {
  kind: "primary",
  size: "large",
  children: "Button",
  disabled: true,
};

export const LargeSecondaryButtonDisabled = Template.bind({});
LargeSecondaryButtonDisabled.args = {
  kind: "secondary",
  size: "large",
  children: "Button",
  disabled: true,
};

export const LargeSubtleButtonDisabled = Template.bind({});
LargeSubtleButtonDisabled.args = {
  kind: "subtle",
  size: "large",
  children: "Button",
  disabled: true,
};

export const LargeTextButtonDisabled = Template.bind({});
LargeTextButtonDisabled.args = {
  kind: "text",
  size: "large",
  children: "Button",
  disabled: true,
};

export const LargePrimaryButtonLoading = Template.bind({});
LargePrimaryButtonLoading.args = {
  kind: "primary",
  size: "large",
  children: "Button",
  loading: true,
};

export const LargeSecondaryButtonLoading = Template.bind({});
LargeSecondaryButtonLoading.args = {
  kind: "secondary",
  size: "large",
  children: "Button",
  loading: true,
};

export const LargeSubtleButtonLoading = Template.bind({});
LargeSubtleButtonLoading.args = {
  kind: "subtle",
  size: "large",
  children: "Button",
  loading: true,
};

export const LargeTextButtonLoading = Template.bind({});
LargeTextButtonLoading.args = {
  kind: "text",
  size: "large",
  children: "Button",
  loading: true,
};

export const MediumPrimaryButton = Template.bind({});
MediumPrimaryButton.args = {
  kind: "primary",
  size: "medium",
  children: "Button",
};

export const MediumSecondaryButton = Template.bind({});
MediumSecondaryButton.args = {
  kind: "secondary",
  size: "medium",
  children: "Button",
};

export const MediumSubtleButton = Template.bind({});
MediumSubtleButton.args = {
  kind: "subtle",
  size: "medium",
  children: "Button",
};

export const MediumTextButton = Template.bind({});
MediumTextButton.args = {
  kind: "text",
  size: "medium",
  children: "Button",
};

export const MediumPrimaryButtonDisabled = Template.bind({});
MediumPrimaryButtonDisabled.args = {
  kind: "primary",
  size: "medium",
  children: "Button",
  disabled: true,
};

export const MediumSecondaryButtonDisabled = Template.bind({});
MediumSecondaryButtonDisabled.args = {
  kind: "secondary",
  size: "medium",
  children: "Button",
  disabled: true,
};

export const MediumSubtleButtonDisabled = Template.bind({});
MediumSubtleButtonDisabled.args = {
  kind: "subtle",
  size: "medium",
  children: "Button",
  disabled: true,
};

export const MediumTextButtonDisabled = Template.bind({});
MediumTextButtonDisabled.args = {
  kind: "text",
  size: "medium",
  children: "Button",
  disabled: true,
};

export const MediumPrimaryButtonLoading = Template.bind({});
MediumPrimaryButtonLoading.args = {
  kind: "primary",
  size: "medium",
  children: "Button",
  loading: true,
};

export const MediumSecondaryButtonLoading = Template.bind({});
MediumSecondaryButtonLoading.args = {
  kind: "secondary",
  size: "medium",
  children: "Button",
  loading: true,
};

export const MediumSubtleButtonLoading = Template.bind({});
MediumSubtleButtonLoading.args = {
  kind: "subtle",
  size: "medium",
  children: "Button",
  loading: true,
};

export const MediumTextButtonLoading = Template.bind({});
MediumTextButtonLoading.args = {
  kind: "text",
  size: "medium",
  children: "Button",
  loading: true,
};

export const SmallPrimaryButton = Template.bind({});
SmallPrimaryButton.args = {
  kind: "primary",
  size: "small",
  children: "Button",
};

export const SmallSecondaryButton = Template.bind({});
SmallSecondaryButton.args = {
  kind: "secondary",
  size: "small",
  children: "Button",
};

export const SmallSubtleButton = Template.bind({});
SmallSubtleButton.args = {
  kind: "subtle",
  size: "small",
  children: "Button",
};

export const SmallTextButton = Template.bind({});
SmallTextButton.args = {
  kind: "text",
  size: "small",
  children: "Button",
};

export const SmallPrimaryButtonDisabled = Template.bind({});
SmallPrimaryButtonDisabled.args = {
  kind: "primary",
  size: "small",
  children: "Button",
  disabled: true,
};

export const SmallSecondaryButtonDisabled = Template.bind({});
SmallSecondaryButtonDisabled.args = {
  kind: "secondary",
  size: "small",
  children: "Button",
  disabled: true,
};

export const SmallSubtleButtonDisabled = Template.bind({});
SmallSubtleButtonDisabled.args = {
  kind: "subtle",
  size: "small",
  children: "Button",
  disabled: true,
};
export const SmallTextButtonDisabled = Template.bind({});
SmallTextButtonDisabled.args = {
  kind: "text",
  size: "small",
  children: "Button",
  disabled: true,
};

export const SmallPrimaryButtonLoading = Template.bind({});
SmallPrimaryButtonLoading.args = {
  kind: "primary",
  size: "small",
  children: "Button",
  loading: true,
};

export const SmallSecondaryButtonLoading = Template.bind({});
SmallSecondaryButtonLoading.args = {
  kind: "secondary",
  size: "small",
  children: "Button",
  loading: true,
};

export const SmallSubtleButtonLoading = Template.bind({});
SmallSubtleButtonLoading.args = {
  kind: "subtle",
  size: "small",
  children: "Button",
  loading: true,
};

export const SmallTextButtonLoading = Template.bind({});
SmallTextButtonLoading.args = {
  kind: "text",
  size: "small",
  children: "Button",
  loading: true,
};
export const IconPrimaryButton = Template.bind({});
IconPrimaryButton.args = {
  kind: "primary",
  size: "icon",
  children: (
    <svg
      className="m-auto fill-current text-gray-200"
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="Iconly/Light-Outline/Arrow - Right 2">
        <g id="Arrow - Right 2">
          <path
            id="Stroke 1"
            d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
          />
        </g>
      </g>
    </svg>
  ),
};

export const IconSecondaryButton = Template.bind({});
IconSecondaryButton.args = {
  kind: "secondary",
  size: "icon",
  children: (
    <svg
      className="m-auto fill-current text-primary group-hover:text-primary-dark"
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="Iconly/Light-Outline/Arrow - Right 2">
        <g id="Arrow - Right 2">
          <path
            id="Stroke 1"
            d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
          />
        </g>
      </g>
    </svg>
  ),
};

export const IconPrimaryButtonDisabled = Template.bind({});
IconPrimaryButtonDisabled.args = {
  kind: "primary",
  size: "icon",
  children: (
    <svg
      className="m-auto fill-current text-gray-200"
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="Iconly/Light-Outline/Arrow - Right 2">
        <g id="Arrow - Right 2">
          <path
            id="Stroke 1"
            d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
          />
        </g>
      </g>
    </svg>
  ),
  disabled: true,
};

export const IconSecondaryButtonDisabled = Template.bind({});
IconSecondaryButtonDisabled.args = {
  kind: "secondary",
  size: "icon",
  children: (
    <svg
      className="m-auto fill-current text-primary-light"
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="Iconly/Light-Outline/Arrow - Right 2">
        <g id="Arrow - Right 2">
          <path
            id="Stroke 1"
            d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
          />
        </g>
      </g>
    </svg>
  ),
  disabled: true,
};

export const IconPrimaryButtonLoading = Template.bind({});
IconPrimaryButtonLoading.args = {
  kind: "primary",
  size: "icon",
  children: (
    <svg
      className="m-auto fill-current text-gray-200"
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="Iconly/Light-Outline/Arrow - Right 2">
        <g id="Arrow - Right 2">
          <path
            id="Stroke 1"
            d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
          />
        </g>
      </g>
    </svg>
  ),
  loading: true,
};

export const IconSecondaryButtonLoading = Template.bind({});
IconSecondaryButtonLoading.args = {
  kind: "secondary",
  size: "icon",
  children: (
    <svg
      className="m-auto fill-current text-primary"
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="Iconly/Light-Outline/Arrow - Right 2">
        <g id="Arrow - Right 2">
          <path
            id="Stroke 1"
            d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
          />
        </g>
      </g>
    </svg>
  ),
  loading: true,
};
