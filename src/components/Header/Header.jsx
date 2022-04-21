import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headerStyles: {
    marginBottom: "30px !important",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    fontFamily: "Square Peg",
    fontSize: "60px",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.headerStyles}>Todos List</h1>
    </div>
  );
};

export default Header;
