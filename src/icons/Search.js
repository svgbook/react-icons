import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="18" y1="18" x2="14" y2="14" />
    <circle fill="none" cx="10.67" cy="10.67" r="4.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="18" y1="18" x2="14" y2="14" />
    <circle cx="10.67" cy="10.67" r="4.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="18" y1="18" x2="14" y2="14" />
    <circle fillOpacity=".2" cx="10.67" cy="10.67" r="4.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="18" y1="18" x2="14" y2="14" />
    <circle fill={secondaryColor} cx="10.67" cy="10.67" r="4.67" />
  </Fragment>
);

const Search = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Search;
