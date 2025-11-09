import React, { useState } from "react";
import { FormStyles, Input, Button } from "./styled";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(newTaskContent.trim() ===""){
      return;
    }
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <FormStyles onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormStyles>
  );
};

export default Form;
