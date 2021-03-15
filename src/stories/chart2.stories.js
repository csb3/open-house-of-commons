import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Chart2 from "../components/Chart2";
;

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Chart2',
  component: Chart2,
}; 
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Chart2 {...args} />;

export const SecondStory = Template.bind({});

SecondStory.args = {
  /*👇 The args you need here will depend on your component */
}; 
