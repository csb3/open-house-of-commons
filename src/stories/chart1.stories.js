import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Chart1 from "../components/Chart1";
;

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Chart1',
  component: Chart1,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Chart1 {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};


