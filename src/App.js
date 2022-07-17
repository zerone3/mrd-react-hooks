import React from 'react';
// import "./style.css";
import ToDo from './containers/ToDo.jsx';
import ToDoWithReducer from './containers/ToDoWithReducer.jsx';
import NestedComponent from './containers/NestedComponent.jsx';
import NestedComponentWithContext from './containers/NestedComponentWithContext.jsx';
import NestedComponentWithContextPart2 from './containers/NestedComponentWithContextPart2.jsx';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: 16, flexDirection: 'column' }}>
      {/* TODO: Comment ini supaya tidak muncul 2 component  */}
      <ToDo />

      {/* <NestedComponent /> */}
      {/* <NestedComponentWithContext /> */}
      {/* <NestedComponentWithContextPart2 /> */}

      {/* TODO: Uncomment ini untuk melihat hasil */}
      {/* <ToDoWithReducer /> */}
    </div>
  );
}
