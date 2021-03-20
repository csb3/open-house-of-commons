import React from "react";

export default function YourMP(props) {
  console.log(props.data)
  if (props.data) {
    return (
      <div class="your-mp">
        <div><h2>Your MP</h2></div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    )
  } else {
    return (
      <div><h4>LOADING...</h4></div>
    )
  }
}