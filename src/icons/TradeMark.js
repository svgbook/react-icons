import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,9.52h4.14m-2.07,0v5" />
    <path fill="none" d="M13,14.48v-5l2.49,3.31L18,9.52v5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,9.52h4.14m-2.07,0v5" />
    <path fill="none" d="M13,14.48v-5l2.49,3.31L18,9.52v5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,9.52h4.14m-2.07,0v5" />
    <path fill="none" strokeOpacity=".2" d="M13,14.48v-5l2.49,3.31L18,9.52v5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" stroke={secondaryColor} d="M6,9.52h4.14m-2.07,0v5" />
    <path fill="none" d="M13,14.48v-5l2.49,3.31L18,9.52v5" />
  </Fragment>
);

const TradeMark = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TradeMark;
