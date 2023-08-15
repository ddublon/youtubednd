import styled from "styled-components";
import Draggable from "react-draggable"; // The default
import { useRef, useState } from "react";

const Line = styled.div`
  height: 2px;
  background-color: #c720e0 !important;
  border-top: 2px dashed #c720e0 !important;
  width: 80%;
  margin-left: 50px;
  z-index: 2;
  position: absolute;
  top: ${(props) => props.top}px; // use props to adjust the top position
  cursor: grab;
`;

const PurpleLine = ({ maxRange, minRange, LineHeight }) => {
  const nodeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const calculateYValue = (y) => {
    const dragPercentage = (y + 205) / 435;
    const value = maxRange - dragPercentage * (maxRange - minRange);
    return value.toFixed(2);
  };

  const [yValue, setYValue] = useState(calculateYValue(LineHeight));

  const handleDragStop = (e, data) => {
    setIsDragging(false);
  };

  const handleDrag = (e, data) => {
    setYValue(calculateYValue(data.y));
  };
  return (
    <Draggable
      axis="y"
      nodeRef={nodeRef}
      bounds={{ top: -205, bottom: 230 }}
      onStart={() => setIsDragging(true)}
      onStop={(e, data) => handleDragStop(e, data)}
      onDrag={(e, data) => handleDrag(e, data)}
    >
      <Line
        className={`dragedLineToolTip ${isDragging ? "dragging" : ""}`}
        data-tooltip={`Y: ${yValue}`}
        ref={nodeRef}
        top={LineHeight}
        onMouseEnter={() => console.log("hovered")}
      />
    </Draggable>
  );
};

export default PurpleLine;
