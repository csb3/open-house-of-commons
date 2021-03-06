import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ChartGrid from "../components/ChartGrid";
;

//๐ This default export determines where your story goes in the story list
export default {
  title: 'ChartGrid',
  component: ChartGrid,
}; 
 
//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <ChartGrid {...args} />;

export const SecondStory = Template.bind({});

SecondStory.args = {
  /*๐ The args you need here will depend on your component */
}; 
