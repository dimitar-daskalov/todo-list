import React from "react";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  formStyles: {
    margin: "10px",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
  },

  submitButton: {
    margin: "10px",
    fontSize: "10px !important",
  },
});

const Form = ({ input, setInput, isEditMode, handleAddTodo }) => {
  const classes = useStyles();

  const getInputValue = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className={classes.formStyles} onSubmit={handleAddTodo}>
      <TextField
        id="standard-basic"
        placeholder="Create todo..."
        variant="standard"
        onChange={getInputValue}
        value={input}
        required
      />
      <Button
        className={classes.submitButton}
        type="submit"
        variant="contained"
        color="success"
        size="small"
      >
        {isEditMode ? "OK" : "Add todo"}
      </Button>
    </form>
  );
};

export default Form;
