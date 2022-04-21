import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  buttonStyle: {
    fontSize: "10px !important",
    margin: "2.5px !important",
  },

  buttonsDivStyle: {
    minWidth: "50%",
  },

  spanStyle: {
    fontFamily: "Square Peg !important",
    fontSize: "40px !important",
    marginRight: "5px !important",
  },

  innerSpanStyle: {
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    fontFamily: "Square Peg !important",
    fontSize: "40px !important",
  },

  displayStyle: {
    display: "flex !important",
    width: "100% !important",
    maxWidth: "465px !important",
    justifyContent: "space-between !important",
    alignItems: "center !important",
    margin: "10px auto !important",
    padding: "10px !important",
    border: "1px solid black !important",
  },

  innerDivStyle: {
    overflow: "hidden",
    minWidth: "50%",
    paddingRight: "5px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

const TodosList = ({
  todos,
  handleCompleteTodo,
  handleEditTodo,
  handleDeleteTodo,
}) => {
  const classes = useStyles();

  return (
    <div>
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} className={classes.displayStyle}>
            <div className={classes.innerDivStyle}>
              <span className={classes.spanStyle}>{todo.name}</span>
            </div>
            <div className={classes.buttonsDivStyle}>
              <Button
                className={classes.buttonStyle}
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => handleCompleteTodo(todo)}
              >
                Complete
              </Button>
              <Button
                className={classes.buttonStyle}
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => handleEditTodo(todo)}
              >
                Edit
              </Button>
              <Button
                className={classes.buttonStyle}
                variant="contained"
                color="error"
                size="small"
                onClick={() => handleDeleteTodo(todo)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))
      ) : (
        <span className={classes.innerSpanStyle}>No todos!</span>
      )}
    </div>
  );
};

export default TodosList;
