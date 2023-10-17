import { useRef, useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

const Line = styled.div`
  height: 1px;
  border-top: 2px solid #c720e0 !important;
  width: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  cursor: grab;
`;

const PurpleLine = ({ maxRange, minRange }) => {
  const defaultPosition = 150;

  const nodeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const calculateYValue = (y) => {
    const dragPercentage = y / 500;
    const value = maxRange - dragPercentage * (maxRange - minRange);
    return value.toFixed(5);
  };

  const [yValue, setYValue] = useState(calculateYValue(defaultPosition));

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
      bounds="parent"
      defaultPosition={{ x: 0, y: defaultPosition }}
      onStart={() => setIsDragging(true)}
      onStop={(e, data) => handleDragStop(e, data)}
      onDrag={(e, data) => handleDrag(e, data)}
    >
      <Line
        className={`dragedLineToolTip purple ${isDragging ? "dragging" : ""}`}
        data-tooltip={`Y: ${yValue}`}
        ref={nodeRef}
        onMouseEnter={() => console.log("hovered")}
      />
    </Draggable>
  );
};

export default PurpleLine;
