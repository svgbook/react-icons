import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M8.57,8.57a2.81,2.81,0,0,1,3-2.57h.86a2.8,2.8,0,0,1,3,2.57,2.56,2.56,0,0,1-1.71,2.57A3.56,3.56,0,0,0,12,14.57"
    />
    <line x1="12" y1="17.99" x2="12" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M8.57,8.57a2.81,2.81,0,0,1,3-2.57h.86a2.8,2.8,0,0,1,3,2.57,2.56,2.56,0,0,1-1.71,2.57A3.56,3.56,0,0,0,12,14.57"
    />
    <line x1="12" y1="17.99" x2="12" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M8.57,8.57a2.81,2.81,0,0,1,3-2.57h.86a2.8,2.8,0,0,1,3,2.57,2.56,2.56,0,0,1-1.71,2.57A3.56,3.56,0,0,0,12,14.57"
    />
    <line x1="12" y1="17.99" x2="12" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M8.57,8.57a2.81,2.81,0,0,1,3-2.57h.86a2.8,2.8,0,0,1,3,2.57,2.56,2.56,0,0,1-1.71,2.57A3.56,3.56,0,0,0,12,14.57"
    />
    <line x1="12" y1="17.99" x2="12" y2="18" />
  </Fragment>
);

const QuestionMark = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default QuestionMark;
