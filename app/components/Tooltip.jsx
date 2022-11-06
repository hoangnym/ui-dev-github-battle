import * as React from "react";
import PropTypes from "prop-types";
// import withHover from "./withHover";
import Hover from "./Hover";

const container = {
  position: "relative",
  display: "flex",
};

export default function Tooltip({ children, element }) {
  return (
    <Hover>
      {(hovering) => {
        return (
          <div style={container}>
            {hovering === true && element}
            {children}
          </div>
        );
      }}
    </Hover>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.node.isRequired,
};

// class Tooltip extends React.Component {
//   render() {
//     const { children, element, hovering } = this.props;

//     return (
//       <div style={container}>
//         {hovering === true && element}
//         {children}
//       </div>
//     );
//   }
// }

// export default withHover(Tooltip);
