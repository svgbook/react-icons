import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9.43,9.43H7.29a1.29,1.29,0,1,0,0,2.57h.85a1.29,1.29,0,1,1,0,2.57H6"
    />
    <path fill="none" d="M12.86,14.57V9.43l2.57,3.43L18,9.43v5.14" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M9.43,9.43H7.29a1.29,1.29,0,1,0,0,2.57h.85a1.29,1.29,0,1,1,0,2.57H6"
    />
    <path fill="none" d="M12.86,14.57V9.43l2.57,3.43L18,9.43v5.14" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9.43,9.43H7.29a1.29,1.29,0,1,0,0,2.57h.85a1.29,1.29,0,1,1,0,2.57H6"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M12.86,14.57V9.43l2.57,3.43L18,9.43v5.14"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M9.43,9.43H7.29a1.29,1.29,0,1,0,0,2.57h.85a1.29,1.29,0,1,1,0,2.57H6"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M12.86,14.57V9.43l2.57,3.43L18,9.43v5.14"
    />
  </Fragment>
);

const ServiceMark = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ServiceMark;
