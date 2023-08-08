import styled from "styled-components";
import Draggable from "react-draggable"; // The default
import { useRef } from "react";

const Line = styled.div`
  height: 2px;
  background-color: #c720e0;
  width: 90%;
  margin-left: 50px;
  z-index: 2;
  position: absolute;
  top: ${(props) => props.top}px; // use props to adjust the top position
  cursor: grab;
`;

const PurpleLine = ({ chartHeight, setLineHeight }) => {
  const nodeRef = useRef(null);
  return (
    <Draggable axis="y" nodeRef={nodeRef} bounds={{ top: -204, bottom: 230 }}>
      <Line ref={nodeRef} top={chartHeight} />
    </Draggable>
  );
};

export default PurpleLine;
