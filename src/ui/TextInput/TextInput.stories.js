import React from "react";

import TextInput from "./index";

export default {
  title: "Design System/Text Input",
  component: TextInput,
  parameters: {
    componentSubtitle: "Renders different types of text input fields",
  },
};

const Template = (args) => <TextInput {...args} />;

export const LargeTextInputStandard = Template.bind({});
LargeTextInputStandard.args = {
  size: "large",
  placeholder: "Phone Number",
};

export const LargeTextInputIcon = Template.bind({});
LargeTextInputIcon.args = {
  size: "large",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Search">
        <g id="Search">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                id="Clip 2"
                clipRule="evenodd"
                d="M2 2H21.4768V21.477H2V2Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                clipRule="evenodd"
                d="M11.7388 3.5C7.19582 3.5 3.49982 7.195 3.49982 11.738C3.49982 16.281 7.19582 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36882 21.477 1.99982 17.108 1.99982 11.738C1.99982 6.368 6.36882 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="17"
              y="17"
              width="6"
              height="6"
            >
              <path
                id="Clip 5"
                clipRule="evenodd"
                d="M17.2399 17.7069H22.264V22.7217H17.2399V17.7069Z"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                clipRule="evenodd"
                d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  placeholder: "Phone Number",
};

export const LargeTextInputStandardWithLabel = Template.bind({});
LargeTextInputStandardWithLabel.args = {
  size: "large",
  label: "Please enter your phone number",
  placeholder: "Phone Number",
};

export const LargeTextInputIconWithLabel = Template.bind({});
LargeTextInputIconWithLabel.args = {
  size: "large",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Search">
        <g id="Search">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                id="Clip 2"
                clipRule="evenodd"
                d="M2 2H21.4768V21.477H2V2Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                clipRule="evenodd"
                d="M11.7388 3.5C7.19582 3.5 3.49982 7.195 3.49982 11.738C3.49982 16.281 7.19582 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36882 21.477 1.99982 17.108 1.99982 11.738C1.99982 6.368 6.36882 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="17"
              y="17"
              width="6"
              height="6"
            >
              <path
                id="Clip 5"
                clipRule="evenodd"
                d="M17.2399 17.7069H22.264V22.7217H17.2399V17.7069Z"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                clipRule="evenodd"
                d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  label: "Please enter your phone number",
  placeholder: "Phone Number",
};

export const LargeTextInputStandardDisabled = Template.bind({});
LargeTextInputStandardDisabled.args = {
  size: "large",
  placeholder: "Phone Number",
  disabled: true,
};

export const LargeTextInputIconDisabled = Template.bind({});
LargeTextInputIconDisabled.args = {
  size: "large",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Search">
        <g id="Search">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2H21.4768V21.477H2V2Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                clipRule="evenodd"
                d="M11.7388 3.5C7.19582 3.5 3.49982 7.195 3.49982 11.738C3.49982 16.281 7.19582 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36882 21.477 1.99982 17.108 1.99982 11.738C1.99982 6.368 6.36882 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="17"
              y="17"
              width="6"
              height="6"
            >
              <path
                id="Clip 5"
                clipRule="evenodd"
                d="M17.2399 17.7069H22.264V22.7217H17.2399V17.7069Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                clipRule="evenodd"
                d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  placeholder: "Phone Number",
  disabled: true,
};

export const LargeTextInputStandardDisabledWithLabel = Template.bind({});
LargeTextInputStandardDisabledWithLabel.args = {
  size: "large",
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  disabled: true,
};

export const LargeTextInputIconDisabledWithLabel = Template.bind({});
LargeTextInputIconDisabledWithLabel.args = {
  size: "large",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Search">
        <g id="Search">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2H21.4768V21.477H2V2Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                clipRule="evenodd"
                d="M11.7388 3.5C7.19582 3.5 3.49982 7.195 3.49982 11.738C3.49982 16.281 7.19582 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36882 21.477 1.99982 17.108 1.99982 11.738C1.99982 6.368 6.36882 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="17"
              y="17"
              width="6"
              height="6"
            >
              <path
                id="Clip 5"
                clipRule="evenodd"
                d="M17.2399 17.7069H22.264V22.7217H17.2399V17.7069Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                clipRule="evenodd"
                d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  disabled: true,
};
export const LargeTextInputStandardCaption = Template.bind({});
LargeTextInputStandardCaption.args = {
  size: "large",
  placeholder: "Phone Number",
  caption: "Here’s a hint that might help you.",
};

export const LargeTextInputIconCaption = Template.bind({});
LargeTextInputIconCaption.args = {
  size: "large",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Search">
        <g id="Search">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2H21.4768V21.477H2V2Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                clipRule="evenodd"
                d="M11.7388 3.5C7.19582 3.5 3.49982 7.195 3.49982 11.738C3.49982 16.281 7.19582 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36882 21.477 1.99982 17.108 1.99982 11.738C1.99982 6.368 6.36882 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="17"
              y="17"
              width="6"
              height="6"
            >
              <path
                id="Clip 5"
                clipRule="evenodd"
                d="M17.2399 17.7069H22.264V22.7217H17.2399V17.7069Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                clipRule="evenodd"
                d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  placeholder: "Phone Number",
  caption: "Here’s a hint that might help you.",
};

export const LargeTextInputIconCaptionWithLabel = Template.bind({});
LargeTextInputIconCaptionWithLabel.args = {
  size: "large",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Search">
        <g id="Search">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2H21.4768V21.477H2V2Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                clipRule="evenodd"
                d="M11.7388 3.5C7.19582 3.5 3.49982 7.195 3.49982 11.738C3.49982 16.281 7.19582 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36882 21.477 1.99982 17.108 1.99982 11.738C1.99982 6.368 6.36882 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="17"
              y="17"
              width="6"
              height="6"
            >
              <path
                id="Clip 5"
                clipRule="evenodd"
                d="M17.2399 17.7069H22.264V22.7217H17.2399V17.7069Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                clipRule="evenodd"
                d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  caption: "Here’s a hint that might help you.",
};
export const LargeTextInputStandardCaptionWithLabel = Template.bind({});
LargeTextInputStandardCaptionWithLabel.args = {
  size: "large",
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  caption: "Here’s a hint that might help you.",
};

export const LargeTextInputStandardSuccess = Template.bind({});
LargeTextInputStandardSuccess.args = {
  size: "large",
  placeholder: "Phone Number",
  caption: "Success message!",
  value: "999-999-999",
  state: "success",
};

export const LargeTextInputIconSuccess = Template.bind({});
LargeTextInputIconSuccess.args = {
  size: "large",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Profile">
        <g id="Profile">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="14"
              width="16"
              height="8"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 14.4961H19.8399V21.8701H4V14.4961Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 15.9961C7.6599 15.9961 5.4999 16.7281 5.4999 18.1731C5.4999 19.6311 7.6599 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.9619 21.8701 3.9999 21.8701 3.9999 18.1731C3.9999 14.8771 8.5209 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="6"
              y="2"
              width="12"
              height="11"
            >
              <path
                id="Clip 5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.60987 2.0001H17.2299V12.6187H6.60987V2.0001Z"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 3.4277C9.7799 3.4277 8.0379 5.1687 8.0379 7.3097C8.0309 9.4437 9.7599 11.1837 11.8919 11.1917L11.9209 11.9057V11.1917C14.0609 11.1917 15.8019 9.4497 15.8019 7.3097C15.8019 5.1687 14.0609 3.4277 11.9209 3.4277ZM11.9209 12.6187H11.8889C8.9669 12.6097 6.5999 10.2267 6.6099 7.3067C6.6099 4.3817 8.9919 1.9997 11.9209 1.9997C14.8489 1.9997 17.2299 4.3817 17.2299 7.3097C17.2299 10.2377 14.8489 12.6187 11.9209 12.6187Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  placeholder: "Phone Number",
  caption: "Success message!",
  value: "999-999-999",
  state: "success",
};

export const LargeTextInputStandardSuccessWithLabel = Template.bind({});
LargeTextInputStandardSuccessWithLabel.args = {
  size: "large",
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  caption: "Success message!",
  value: "999-999-999",
  state: "success",
};

export const LargeTextInputIconSuccessWithLabel = Template.bind({});
LargeTextInputIconSuccessWithLabel.args = {
  size: "large",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Profile">
        <g id="Profile">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="14"
              width="16"
              height="8"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 14.4961H19.8399V21.8701H4V14.4961Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 15.9961C7.6599 15.9961 5.4999 16.7281 5.4999 18.1731C5.4999 19.6311 7.6599 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.9619 21.8701 3.9999 21.8701 3.9999 18.1731C3.9999 14.8771 8.5209 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="6"
              y="2"
              width="12"
              height="11"
            >
              <path
                id="Clip 5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.60987 2.0001H17.2299V12.6187H6.60987V2.0001Z"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 3.4277C9.7799 3.4277 8.0379 5.1687 8.0379 7.3097C8.0309 9.4437 9.7599 11.1837 11.8919 11.1917L11.9209 11.9057V11.1917C14.0609 11.1917 15.8019 9.4497 15.8019 7.3097C15.8019 5.1687 14.0609 3.4277 11.9209 3.4277ZM11.9209 12.6187H11.8889C8.9669 12.6097 6.5999 10.2267 6.6099 7.3067C6.6099 4.3817 8.9919 1.9997 11.9209 1.9997C14.8489 1.9997 17.2299 4.3817 17.2299 7.3097C17.2299 10.2377 14.8489 12.6187 11.9209 12.6187Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  caption: "Success message!",
  value: "999-999-999",
  state: "success",
};

export const LargeTextInputStandardError = Template.bind({});
LargeTextInputStandardError.args = {
  size: "large",
  placeholder: "Phone Number",
  caption: "Error message!",
  value: "999-999-999",
  state: "error",
};

export const LargeTextInputIconError = Template.bind({});
LargeTextInputIconError.args = {
  size: "large",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Profile">
        <g id="Profile">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="14"
              width="16"
              height="8"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 14.4961H19.8399V21.8701H4V14.4961Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 15.9961C7.6599 15.9961 5.4999 16.7281 5.4999 18.1731C5.4999 19.6311 7.6599 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.9619 21.8701 3.9999 21.8701 3.9999 18.1731C3.9999 14.8771 8.5209 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="6"
              y="2"
              width="12"
              height="11"
            >
              <path
                id="Clip 5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.60987 2.0001H17.2299V12.6187H6.60987V2.0001Z"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 3.4277C9.7799 3.4277 8.0379 5.1687 8.0379 7.3097C8.0309 9.4437 9.7599 11.1837 11.8919 11.1917L11.9209 11.9057V11.1917C14.0609 11.1917 15.8019 9.4497 15.8019 7.3097C15.8019 5.1687 14.0609 3.4277 11.9209 3.4277ZM11.9209 12.6187H11.8889C8.9669 12.6097 6.5999 10.2267 6.6099 7.3067C6.6099 4.3817 8.9919 1.9997 11.9209 1.9997C14.8489 1.9997 17.2299 4.3817 17.2299 7.3097C17.2299 10.2377 14.8489 12.6187 11.9209 12.6187Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  placeholder: "Phone Number",
  caption: "Error message!",
  value: "999-999-999",
  state: "error",
};

export const LargeTextInputStandardErrorWithLabel = Template.bind({});
LargeTextInputStandardErrorWithLabel.args = {
  size: "large",
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  caption: "Error message!",
  value: "999-999-999",
  state: "error",
};

export const LargeTextInputIconErrorWithLabel = Template.bind({});
LargeTextInputIconErrorWithLabel.args = {
  size: "large",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Profile">
        <g id="Profile">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="14"
              width="16"
              height="8"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 14.4961H19.8399V21.8701H4V14.4961Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 15.9961C7.6599 15.9961 5.4999 16.7281 5.4999 18.1731C5.4999 19.6311 7.6599 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.9619 21.8701 3.9999 21.8701 3.9999 18.1731C3.9999 14.8771 8.5209 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="6"
              y="2"
              width="12"
              height="11"
            >
              <path
                id="Clip 5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.60987 2.0001H17.2299V12.6187H6.60987V2.0001Z"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 3.4277C9.7799 3.4277 8.0379 5.1687 8.0379 7.3097C8.0309 9.4437 9.7599 11.1837 11.8919 11.1917L11.9209 11.9057V11.1917C14.0609 11.1917 15.8019 9.4497 15.8019 7.3097C15.8019 5.1687 14.0609 3.4277 11.9209 3.4277ZM11.9209 12.6187H11.8889C8.9669 12.6097 6.5999 10.2267 6.6099 7.3067C6.6099 4.3817 8.9919 1.9997 11.9209 1.9997C14.8489 1.9997 17.2299 4.3817 17.2299 7.3097C17.2299 10.2377 14.8489 12.6187 11.9209 12.6187Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  caption: "Error message!",
  value: "999-999-999",
  state: "error",
};

export const SmallTextInputStandard = Template.bind({});
SmallTextInputStandard.args = {
  size: "small",
  placeholder: "Phone Number",
};

export const SmallTextInputIcon = Template.bind({});
SmallTextInputIcon.args = {
  size: "small",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Search">
        <g id="Search">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2H21.4768V21.477H2V2Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                clipRule="evenodd"
                d="M11.7388 3.5C7.19582 3.5 3.49982 7.195 3.49982 11.738C3.49982 16.281 7.19582 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36882 21.477 1.99982 17.108 1.99982 11.738C1.99982 6.368 6.36882 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="17"
              y="17"
              width="6"
              height="6"
            >
              <path
                id="Clip 5"
                clipRule="evenodd"
                d="M17.2399 17.7069H22.264V22.7217H17.2399V17.7069Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                clipRule="evenodd"
                d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  placeholder: "Phone Number",
};

export const SmallTextInputStandardWithLabel = Template.bind({});
SmallTextInputStandardWithLabel.args = {
  size: "small",
  label: "Please enter your phone number",
  placeholder: "Phone Number",
};

export const SmallTextInputIconWithLabel = Template.bind({});
SmallTextInputIconWithLabel.args = {
  size: "small",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Search">
        <g id="Search">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2H21.4768V21.477H2V2Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                clipRule="evenodd"
                d="M11.7388 3.5C7.19582 3.5 3.49982 7.195 3.49982 11.738C3.49982 16.281 7.19582 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36882 21.477 1.99982 17.108 1.99982 11.738C1.99982 6.368 6.36882 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="17"
              y="17"
              width="6"
              height="6"
            >
              <path
                id="Clip 5"
                clipRule="evenodd"
                d="M17.2399 17.7069H22.264V22.7217H17.2399V17.7069Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                clipRule="evenodd"
                d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  label: "Please enter your phone number",
  placeholder: "Phone Number",
};

export const SmallTextInputStandardDisabled = Template.bind({});
SmallTextInputStandardDisabled.args = {
  size: "small",
  placeholder: "Phone Number",
  disabled: true,
};

export const SmallTextInputIconDisabled = Template.bind({});
SmallTextInputIconDisabled.args = {
  size: "small",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Search">
        <g id="Search">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2H21.4768V21.477H2V2Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                clipRule="evenodd"
                d="M11.7388 3.5C7.19582 3.5 3.49982 7.195 3.49982 11.738C3.49982 16.281 7.19582 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36882 21.477 1.99982 17.108 1.99982 11.738C1.99982 6.368 6.36882 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="17"
              y="17"
              width="6"
              height="6"
            >
              <path
                id="Clip 5"
                clipRule="evenodd"
                d="M17.2399 17.7069H22.264V22.7217H17.2399V17.7069Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                clipRule="evenodd"
                d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  placeholder: "Phone Number",
  disabled: true,
};

export const SmallTextInputStandardDisabledWithLabel = Template.bind({});
SmallTextInputStandardDisabledWithLabel.args = {
  size: "small",
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  disabled: true,
};

export const SmallTextInputIconDisabledWithLabel = Template.bind({});
SmallTextInputIconDisabledWithLabel.args = {
  size: "small",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Search">
        <g id="Search">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2H21.4768V21.477H2V2Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                clipRule="evenodd"
                d="M11.7388 3.5C7.19582 3.5 3.49982 7.195 3.49982 11.738C3.49982 16.281 7.19582 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36882 21.477 1.99982 17.108 1.99982 11.738C1.99982 6.368 6.36882 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="17"
              y="17"
              width="6"
              height="6"
            >
              <path
                id="Clip 5"
                clipRule="evenodd"
                d="M17.2399 17.7069H22.264V22.7217H17.2399V17.7069Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                clipRule="evenodd"
                d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  disabled: true,
};

export const SmallTextInputStandardCaption = Template.bind({});
SmallTextInputStandardCaption.args = {
  size: "small",
  placeholder: "Phone Number",
  caption: "Here’s a hint that might help you.",
};

export const SmallTextInputIconCaption = Template.bind({});
SmallTextInputIconCaption.args = {
  size: "small",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Search">
        <g id="Search">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2H21.4768V21.477H2V2Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                clipRule="evenodd"
                d="M11.7388 3.5C7.19582 3.5 3.49982 7.195 3.49982 11.738C3.49982 16.281 7.19582 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36882 21.477 1.99982 17.108 1.99982 11.738C1.99982 6.368 6.36882 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="17"
              y="17"
              width="6"
              height="6"
            >
              <path
                id="Clip 5"
                clipRule="evenodd"
                d="M17.2399 17.7069H22.264V22.7217H17.2399V17.7069Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                clipRule="evenodd"
                d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  placeholder: "Phone Number",
  caption: "Here’s a hint that might help you.",
};

export const SmallTextInputStandardCaptionWithLabel = Template.bind({});
SmallTextInputStandardCaptionWithLabel.args = {
  size: "small",
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  caption: "Here’s a hint that might help you.",
};

export const SmallTextInputIconCaptionWithLabel = Template.bind({});
SmallTextInputIconCaptionWithLabel.args = {
  size: "small",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Search">
        <g id="Search">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2H21.4768V21.477H2V2Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                clipRule="evenodd"
                d="M11.7388 3.5C7.19582 3.5 3.49982 7.195 3.49982 11.738C3.49982 16.281 7.19582 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36882 21.477 1.99982 17.108 1.99982 11.738C1.99982 6.368 6.36882 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="17"
              y="17"
              width="6"
              height="6"
            >
              <path
                id="Clip 5"
                clipRule="evenodd"
                d="M17.2399 17.7069H22.264V22.7217H17.2399V17.7069Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                clipRule="evenodd"
                d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  caption: "Here’s a hint that might help you.",
};

export const SmallTextInputStandardSuccess = Template.bind({});
SmallTextInputStandardSuccess.args = {
  size: "small",
  placeholder: "Phone Number",
  caption: "Success message!",
  value: "999-999-999",
  state: "success",
};

export const SmallTextInputIconSuccess = Template.bind({});
SmallTextInputIconSuccess.args = {
  size: "small",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Profile">
        <g id="Profile">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="14"
              width="16"
              height="8"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 14.4961H19.8399V21.8701H4V14.4961Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 15.9961C7.6599 15.9961 5.4999 16.7281 5.4999 18.1731C5.4999 19.6311 7.6599 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.9619 21.8701 3.9999 21.8701 3.9999 18.1731C3.9999 14.8771 8.5209 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="6"
              y="2"
              width="12"
              height="11"
            >
              <path
                id="Clip 5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.60987 2.0001H17.2299V12.6187H6.60987V2.0001Z"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 3.4277C9.7799 3.4277 8.0379 5.1687 8.0379 7.3097C8.0309 9.4437 9.7599 11.1837 11.8919 11.1917L11.9209 11.9057V11.1917C14.0609 11.1917 15.8019 9.4497 15.8019 7.3097C15.8019 5.1687 14.0609 3.4277 11.9209 3.4277ZM11.9209 12.6187H11.8889C8.9669 12.6097 6.5999 10.2267 6.6099 7.3067C6.6099 4.3817 8.9919 1.9997 11.9209 1.9997C14.8489 1.9997 17.2299 4.3817 17.2299 7.3097C17.2299 10.2377 14.8489 12.6187 11.9209 12.6187Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  placeholder: "Phone Number",
  caption: "Success message!",
  value: "999-999-999",
  state: "success",
};

export const SmallTextInputStandardSuccessWithLabel = Template.bind({});
SmallTextInputStandardSuccessWithLabel.args = {
  size: "small",
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  caption: "Success message!",
  value: "999-999-999",
  state: "success",
};

export const SmallTextInputIconSuccessWithLabel = Template.bind({});
SmallTextInputIconSuccessWithLabel.args = {
  size: "small",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Profile">
        <g id="Profile">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="14"
              width="16"
              height="8"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 14.4961H19.8399V21.8701H4V14.4961Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 15.9961C7.6599 15.9961 5.4999 16.7281 5.4999 18.1731C5.4999 19.6311 7.6599 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.9619 21.8701 3.9999 21.8701 3.9999 18.1731C3.9999 14.8771 8.5209 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="6"
              y="2"
              width="12"
              height="11"
            >
              <path
                id="Clip 5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.60987 2.0001H17.2299V12.6187H6.60987V2.0001Z"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 3.4277C9.7799 3.4277 8.0379 5.1687 8.0379 7.3097C8.0309 9.4437 9.7599 11.1837 11.8919 11.1917L11.9209 11.9057V11.1917C14.0609 11.1917 15.8019 9.4497 15.8019 7.3097C15.8019 5.1687 14.0609 3.4277 11.9209 3.4277ZM11.9209 12.6187H11.8889C8.9669 12.6097 6.5999 10.2267 6.6099 7.3067C6.6099 4.3817 8.9919 1.9997 11.9209 1.9997C14.8489 1.9997 17.2299 4.3817 17.2299 7.3097C17.2299 10.2377 14.8489 12.6187 11.9209 12.6187Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  caption: "Success message!",
  value: "999-999-999",
  state: "success",
};

export const SmallTextInputStandardError = Template.bind({});
SmallTextInputStandardError.args = {
  size: "small",
  placeholder: "Phone Number",
  caption: "Error message!",
  value: "999-999-999",
  state: "error",
};

export const SmallTextInputIconError = Template.bind({});
SmallTextInputIconError.args = {
  size: "small",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Profile">
        <g id="Profile">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="14"
              width="16"
              height="8"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 14.4961H19.8399V21.8701H4V14.4961Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 15.9961C7.6599 15.9961 5.4999 16.7281 5.4999 18.1731C5.4999 19.6311 7.6599 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.9619 21.8701 3.9999 21.8701 3.9999 18.1731C3.9999 14.8771 8.5209 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="6"
              y="2"
              width="12"
              height="11"
            >
              <path
                id="Clip 5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.60987 2.0001H17.2299V12.6187H6.60987V2.0001Z"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 3.4277C9.7799 3.4277 8.0379 5.1687 8.0379 7.3097C8.0309 9.4437 9.7599 11.1837 11.8919 11.1917L11.9209 11.9057V11.1917C14.0609 11.1917 15.8019 9.4497 15.8019 7.3097C15.8019 5.1687 14.0609 3.4277 11.9209 3.4277ZM11.9209 12.6187H11.8889C8.9669 12.6097 6.5999 10.2267 6.6099 7.3067C6.6099 4.3817 8.9919 1.9997 11.9209 1.9997C14.8489 1.9997 17.2299 4.3817 17.2299 7.3097C17.2299 10.2377 14.8489 12.6187 11.9209 12.6187Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  placeholder: "Phone Number",
  caption: "Error message!",
  value: "999-999-999",
  state: "error",
};

export const SmallTextInputStandardErrorWithLabel = Template.bind({});
SmallTextInputStandardErrorWithLabel.args = {
  size: "small",
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  caption: "Error message!",
  value: "999-999-999",
  state: "error",
};

export const SmallTextInputIconErrorWithLabel = Template.bind({});
SmallTextInputIconErrorWithLabel.args = {
  size: "small",
  icon: (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <g id="Iconly/Light-Outline/Profile">
        <g id="Profile">
          <g id="Group 3">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="14"
              width="16"
              height="8"
            >
              <path
                id="Clip 2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 14.4961H19.8399V21.8701H4V14.4961Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                id="Fill 1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 15.9961C7.6599 15.9961 5.4999 16.7281 5.4999 18.1731C5.4999 19.6311 7.6599 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.9619 21.8701 3.9999 21.8701 3.9999 18.1731C3.9999 14.8771 8.5209 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z"
              />
            </g>
          </g>
          <g id="Group 6">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="6"
              y="2"
              width="12"
              height="11"
            >
              <path
                id="Clip 5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.60987 2.0001H17.2299V12.6187H6.60987V2.0001Z"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="Fill 4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9209 3.4277C9.7799 3.4277 8.0379 5.1687 8.0379 7.3097C8.0309 9.4437 9.7599 11.1837 11.8919 11.1917L11.9209 11.9057V11.1917C14.0609 11.1917 15.8019 9.4497 15.8019 7.3097C15.8019 5.1687 14.0609 3.4277 11.9209 3.4277ZM11.9209 12.6187H11.8889C8.9669 12.6097 6.5999 10.2267 6.6099 7.3067C6.6099 4.3817 8.9919 1.9997 11.9209 1.9997C14.8489 1.9997 17.2299 4.3817 17.2299 7.3097C17.2299 10.2377 14.8489 12.6187 11.9209 12.6187Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  label: "Please enter your phone number",
  placeholder: "Phone Number",
  caption: "Error message!",
  value: "999-999-999",
  state: "error",
};
