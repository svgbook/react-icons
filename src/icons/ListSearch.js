import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="13.76" cy="13.06" r="2.82" />
    <path d="M16.24,15.53,18,17.29" />
    <path d="M6,6.71H17.29" />
    <path d="M6,10.94H8.82" />
    <path d="M6,15.18H8.82" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="13.76" cy="13.06" r="2.82" />
    <path d="M16.24,15.53,18,17.29" />
    <path d="M6,6.71H17.29" />
    <path d="M6,10.94H8.82" />
    <path d="M6,15.18H8.82" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="13.76" cy="13.06" r="2.82" />
    <path d="M16.24,15.53,18,17.29" />
    <path d="M6,6.71H17.29" />
    <path d="M6,10.94H8.82" />
    <path d="M6,15.18H8.82" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="13.76" cy="13.06" r="2.82" />
    <path d="M16.24,15.53,18,17.29" />
    <path d="M6,6.71H17.29" />
    <path d="M6,10.94H8.82" />
    <path d="M6,15.18H8.82" />
  </Fragment>
);

const ListSearch = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ListSearch;
