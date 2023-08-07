import React from "react";

import { CSS } from "@dnd-kit/utilities";
import { Card, Button } from "react-bootstrap";
import { useSortable } from "@dnd-kit/sortable";
import Chart from "./Chart";



const SortableItem = ({ id, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "fit-content",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Card body className={"m-3"} >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div {...attributes} {...listeners} style={{ cursor: "grab" }}>
            {/* The handle */}
            <span role="img" aria-label="handle">
              🤚
            </span>
          </div>

          {/* The delete button */}
          <Button
            variant="danger"
            onClick={(event) => {
              event.stopPropagation(); // This prevents the drag action from starting
              onDelete(id);
            }}
          >
            X
          </Button>
        </div>

        {/* The item content */}
        <Chart />
      </Card>
    </div>
  );
};

export default SortableItem;
