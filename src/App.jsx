import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import SortableItem from "./SortableItem.jsx";
import styled from "styled-components";
import Chart from "./Chart";

const StyledSortableContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-arround; */
  width: 100%;
`;

function App() {
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);

  const handleDragEnd = (event) => {
    setActiveId(null);
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  const deleteItem = (id) => {
    setItems(items.filter((item) => item !== id));
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  return (
    <div>
      <p>{`{}}`}</p>
      <div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
        >
          <StyledSortableContainer>
            <SortableContext items={items} strategy={rectSortingStrategy}>
              {items.map((language) => (
                <SortableItem
                  numberOfGraphs={items.length / 2}
                  key={language}
                  id={language}
                  onDelete={deleteItem}
                />
              ))}
            </SortableContext>
            <DragOverlay>
              {activeId ? (
                <Chart id={"overlay"} numberOfGraphs={5}></Chart>
              ) : null}
            </DragOverlay>
          </StyledSortableContainer>
        </DndContext>
      </div>
      <p>{`{
  "
      },
      "funding": {
     
      }
    }
  }
}
`}</p>
    </div>
  );
}

export default App;
