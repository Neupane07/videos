import React from "react";

const Loader = () => {
  return (
    <div>
      <div class="ui segment">
        <div class="ui huge text loader">Loading</div>

        <img
          src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
          class="ui image"
          alt="loading"
        />
      </div>
    </div>
  );
};

export default Loader;
