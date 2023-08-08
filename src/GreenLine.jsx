import styled from "styled-components";
import Draggable from "react-draggable"; // The default
import { useRef } from "react";

const Line = styled.div`
  height: 2px;
  border-top: 2px dashed #26e020; // Make the line green and dashed
  width: 90%;
  margin-left: 50px;
  z-index: 2;
  position: absolute;
  top: ${(props) => props.top}px; // use props to adjust the top position
  cursor: grab;
`;

const GreenLine = ({ chartHeight, setLineHeight }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable axis="y" nodeRef={nodeRef} bounds={{ top: -254, bottom: 180 }}>
      <Line
        ref={nodeRef}
        top={chartHeight}
        onMouseEnter={() => console.log("hovered")}
      />
    </Draggable>
  );
};

export default GreenLine;
