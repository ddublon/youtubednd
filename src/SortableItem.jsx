import React from "react";

import { CSS } from "@dnd-kit/utilities";
import { Card, Button } from "react-bootstrap";
import { useSortable } from "@dnd-kit/sortable";
import Chart from "./Chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";

const SortableItem = ({ id, onDelete, numberOfGraphs }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: (screen.width / numberOfGraphs) * 0.95,
    // height: "500px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Card body className={"m-1 p-1"}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div {...attributes} {...listeners} style={{ cursor: "grab" }}>
            {/* The handle */}
            <span role="img" aria-label="handle">
              <FontAwesomeIcon icon={faGripVertical} />
            </span>
          </div>

          {/* The delete button */}
          <Button
            variant=""
            onClick={(event) => {
              event.stopPropagation(); // This prevents the drag action from starting
              onDelete(id);
            }}
          >
            X
          </Button>
        </div>

        {/* The item content */}
        <Chart id={id} numGraphs={numberOfGraphs} />
      </Card>
    </div>
  );
};

export default SortableItem;
