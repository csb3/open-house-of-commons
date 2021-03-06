import React, { Fragment } from "react";
import Nav from "../components/Nav";

//๐ This default export determines where your story goes in the story list
export default {
  title: 'Nav',
  component: Nav,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Nav {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*๐ The args you need here will depend on your component */
};


