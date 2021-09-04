import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="18" x2="18" y2="6" />
    <line x1="7.88" y1="12.38" x2="11.63" y2="16.13" />
    <path fill="none" d="M12.75,6H18v5.25" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="18" x2="18" y2="6" />
    <line x1="7.88" y1="12.38" x2="11.63" y2="16.13" />
    <path fill="none" d="M12.75,6H18v5.25" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="6" y1="18" x2="18" y2="6" />
    <line x1="7.88" y1="12.38" x2="11.63" y2="16.13" />
    <path fill="none" d="M12.75,6H18v5.25" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="6" y1="18" x2="18" y2="6" />
    <line stroke={secondaryColor} x1="7.88" y1="12.38" x2="11.63" y2="16.13" />
    <path fill="none" stroke={secondaryColor} d="M12.75,6H18v5.25" />
  </Fragment>
);

const ZodiacSagittarius = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ZodiacSagittarius;
