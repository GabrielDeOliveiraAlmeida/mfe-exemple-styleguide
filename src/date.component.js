import React from "react";

import { useInternationalization } from "@progress/kendo-react-intl";


const DateFormatter = (props) => {
  const intl = useInternationalization();

  return (
    <div>
      <span>{intl.formatDate(props.date, "EEEE, d.MM.y")}</span>
    </div>
  );
};

export default DateFormatter