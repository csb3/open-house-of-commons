import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ChartBar from "../components/ChartBar";
;

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ChartBar',
  component: ChartBar,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ChartBar {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
