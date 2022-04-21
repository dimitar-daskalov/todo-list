import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  buttonStyle: {
    fontSize: "10px !important",
  },

  completedFilter: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    boxShadow: "none !important",
  },
});

const Filter = ({
  showAll,
  showCompleted,
  showNotCompleted,
  deleteAllCompleted,
}) => {
  const classes = useStyles();
  return (
    <ButtonGroup
      className={classes.completedFilter}
      variant="contained"
      aria-label="outlined primary button group"
    >
      <Button className={classes.buttonStyle} onClick={showAll}>
        All
      </Button>
      <Button className={classes.buttonStyle} onClick={showCompleted}>
        Completed
      </Button>
      <Button className={classes.buttonStyle} onClick={showNotCompleted}>
        In Progress
      </Button>
      <Button className={classes.buttonStyle} onClick={deleteAllCompleted}>
        Delete All Completed
      </Button>
    </ButtonGroup>
  );
};

export default Filter;
