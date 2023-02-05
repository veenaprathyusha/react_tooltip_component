import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import ToolTip from "./ToolTip";

const Container = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%"
});

const App = () => (
  <Container>
    <ToolTip toolTipText="This is tooltip content">
      Click here for tooltip
    </ToolTip>
  </Container>
);

render(<App />, document.getElementById("root"));
