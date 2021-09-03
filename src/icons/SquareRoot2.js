import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.06,12h.7c.71,0,.71.71,1.43,2.49s.69,2.45,1.4,2.45h.7"
    />
    <path
      fill="none"
      d="M12.35,16.94c1.06,0,2.12-1.41,2.83-2.47S16.94,12,18,12"
    />
    <path fill="none" d="M6,12h.71l2.11,5.65,2.12-11.3H18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M13.06,12h.7c.71,0,.71.71,1.43,2.49s.69,2.45,1.4,2.45h.7"
    />
    <path
      fill="none"
      d="M12.35,16.94c1.06,0,2.12-1.41,2.83-2.47S16.94,12,18,12"
    />
    <path fill="none" d="M6,12h.71l2.11,5.65,2.12-11.3H18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M13.06,12h.7c.71,0,.71.71,1.43,2.49s.69,2.45,1.4,2.45h.7"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M12.35,16.94c1.06,0,2.12-1.41,2.83-2.47S16.94,12,18,12"
    />
    <path fill="none" d="M6,12h.71l2.11,5.65,2.12-11.3H18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M13.06,12h.7c.71,0,.71.71,1.43,2.49s.69,2.45,1.4,2.45h.7"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M12.35,16.94c1.06,0,2.12-1.41,2.83-2.47S16.94,12,18,12"
    />
    <path fill="none" d="M6,12h.71l2.11,5.65,2.12-11.3H18" />
  </Fragment>
);

const SquareRoot2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SquareRoot2;
