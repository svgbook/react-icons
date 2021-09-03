import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M16,9.33a2,2,0,0,1,0,4" />
    <path
      fill="none"
      d="M10.67,9.33v7.33a.67.67,0,0,1-.67.67H9.33a.67.67,0,0,1-.66-.67V13.33"
    />
    <path
      fill="none"
      d="M12,9.33h0l3-2.52a.6.6,0,0,1,.84.08.59.59,0,0,1,.14.38v8.11a.6.6,0,0,1-.6.6.57.57,0,0,1-.38-.14l-3-2.51H6.67A.67.67,0,0,1,6,12.66V10a.66.66,0,0,1,.67-.66H12"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M16,9.33a2,2,0,0,1,0,4" />
    <path
      fill="none"
      d="M10.67,9.33v7.33a.67.67,0,0,1-.67.67H9.33a.67.67,0,0,1-.66-.67V13.33"
    />
    <path d="M12,9.33h0l3-2.52a.6.6,0,0,1,.84.08.59.59,0,0,1,.14.38v8.11a.6.6,0,0,1-.6.6.57.57,0,0,1-.38-.14l-3-2.51H6.67A.67.67,0,0,1,6,12.66V10a.66.66,0,0,1,.67-.66H12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M16,9.33a2,2,0,0,1,0,4" />

    <path
      fillOpacity=".2"
      d="M12,9.33h0l3-2.52a.6.6,0,0,1,.84.08.59.59,0,0,1,.14.38v8.11a.6.6,0,0,1-.6.6.57.57,0,0,1-.38-.14l-3-2.51H6.67A.67.67,0,0,1,6,12.66V10a.66.66,0,0,1,.67-.66H12"
    />
    <path
      fill="none"
      d="M10.67,9.33v7.33a.67.67,0,0,1-.67.67H9.33a.67.67,0,0,1-.66-.67V13.33"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M16,9.33a2,2,0,0,1,0,4" />

    <path
      fill={secondaryColor}
      d="M12,9.33h0l3-2.52a.6.6,0,0,1,.84.08.59.59,0,0,1,.14.38v8.11a.6.6,0,0,1-.6.6.57.57,0,0,1-.38-.14l-3-2.51H6.67A.67.67,0,0,1,6,12.66V10a.66.66,0,0,1,.67-.66H12"
    />
    <path
      fill="none"
      d="M10.67,9.33v7.33a.67.67,0,0,1-.67.67H9.33a.67.67,0,0,1-.66-.67V13.33"
    />
  </Fragment>
);

const SpeakerPhone = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SpeakerPhone;
