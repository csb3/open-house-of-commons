import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ChartBar from "../components/ChartBar";
;

//๐ This default export determines where your story goes in the story list
export default {
  title: 'ChartBar',
  component: ChartBar,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <ChartBar {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*๐ The args you need here will depend on your component */
};
