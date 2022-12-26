import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  wrapper: {
    backgroundColor: "#1f1f1f",
    padding: "30px 0",
  },
  icon: {
    color: "#fff",

    "&:hover ": {
      color: "#202020 ",
      backgroundColor: "#fff",
    },
  },
});

export default useStyles;
