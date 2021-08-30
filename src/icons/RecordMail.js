import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="8.25" y1="14.25" x2="15.75" y2="14.25" />
    <circle fill="none" cx="8.25" cy="12" r="2.25" />
    <circle fill="none" cx="15.75" cy="12" r="2.25" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="8.25" y1="14.25" x2="15.75" y2="14.25" />
    <circle cx="8.25" cy="12" r="2.25" />
    <circle cx="15.75" cy="12" r="2.25" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="8.25" y1="14.25" x2="15.75" y2="14.25" />
    <circle fillOpacity=".2" cx="8.25" cy="12" r="2.25" />
    <circle fillOpacity=".2" cx="15.75" cy="12" r="2.25" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="8.25" y1="14.25" x2="15.75" y2="14.25" />
    <circle fill={secondaryColor} cx="8.25" cy="12" r="2.25" />
    <circle fill={secondaryColor} cx="15.75" cy="12" r="2.25" />
  </Fragment>
);

const RecordMail = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RecordMail;
