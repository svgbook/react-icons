import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.73,8.74,9.54,12.93a1.36,1.36,0,1,0,1.93,1.93l4.19-4.19A2.73,2.73,0,1,0,11.8,6.8L7.6,11a4.11,4.11,0,0,0,5.81,5.81l4.19-4.19"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M13.73,8.74,9.54,12.93a1.36,1.36,0,1,0,1.93,1.93l4.19-4.19A2.73,2.73,0,1,0,11.8,6.8L7.6,11a4.11,4.11,0,0,0,5.81,5.81l4.19-4.19"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.73,8.74,9.54,12.93a1.36,1.36,0,1,0,1.93,1.93l4.19-4.19A2.73,2.73,0,1,0,11.8,6.8L7.6,11a4.11,4.11,0,0,0,5.81,5.81l4.19-4.19"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M13.73,8.74,9.54,12.93a1.36,1.36,0,1,0,1.93,1.93l4.19-4.19A2.73,2.73,0,1,0,11.8,6.8L7.6,11a4.11,4.11,0,0,0,5.81,5.81l4.19-4.19"
    />
  </Fragment>
);

const PaperClip = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PaperClip;
