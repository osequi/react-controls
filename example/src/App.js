import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

/**
 * Imports other components and hooks
 */
import Controls, { ControlsPropTypes } from "../../src/Controls";

/**
 * Defines the prop types
 */
const propTypes = {
  controls: PropTypes.shape(ControlsPropTypes),
};

/**
 * Defines the default props
 */
const defaultProps = {
  controls: {
    title: "Controls demo",
    items: [
      { id: shortid.generate(), type: "text", label: "Text", value: "text" },
      {
        id: shortid.generate(),
        type: "checkbox",
        label: "Checkbox Test",
        value: true,
      },
      {
        id: shortid.generate(),
        type: "radio",
        label: "Radio",
        value: "Y",
        items: [
          {
            id: shortid.generate(),
            label: "X",
            value: "X",
          },
          {
            id: shortid.generate(),
            label: "Y",
            value: "Y",
          },
          {
            id: shortid.generate(),
            label: "Z",
            value: "Z",
          },
        ],
      },
    ],
  },
};

const App = (props) => {
  const { controls } = props;

  return <Controls {...controls} />;
};

export default App;
