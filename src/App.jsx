import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import SortableItem from "./SortableItem.jsx";
import "./abc.css";

function App() {
  const [languages, setLanguages] = useState([
    "C",
    "C++",
    "C#",
    "Java",
    "JavaScript",
    "Python",
    "Ruby",
    "PHP",
    "Go",
    "Swift",
  ]);

  const handleDragEnd = (event) => {
    console.log("Drag end called ");
    const { active, over } = event;
    console.log(" Active " + active.id + " Over " + over.id);
    if (active.id !== over.id) {
      console.log("Moving " + active.id + " to " + over.id);
      setLanguages((languages) => {
        const oldIndex = languages.indexOf(active.id);
        const newIndex = languages.indexOf(over.id);
        return arrayMove(languages, oldIndex, newIndex);
      });
    }
  };
  const deleteItem = (id) => {
    setLanguages(languages.filter((language) => language !== id));
  };

  return (
    <>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={(e) => handleDragEnd(e)}
      >
        <div className="sortable-container">
          <SortableContext
            items={languages}
            strategy={horizontalListSortingStrategy}
          >
            {languages.map((language) => (
              <SortableItem
                key={language}
                id={language}
                onDelete={deleteItem}
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </>
  );
}

export default App;
