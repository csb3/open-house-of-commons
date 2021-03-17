import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ChartGrid from "../components/ChartGrid";
;

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ChartGrid',
  component: ChartGrid,
}; 
 
//👇 We create a “template” of how args map to rendering
const Template = (args) => <ChartGrid {...args} />;

export const SecondStory = Template.bind({});

SecondStory.args = {
  /*👇 The args you need here will depend on your component */
}; 
