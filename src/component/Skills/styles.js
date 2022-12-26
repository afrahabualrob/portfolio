import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    padding: "50px 0",
    backgroundColor: "#a27565",
  },
  skillCard: {
    transition: "transform 0.5s ease-in-out !important" /* Animation */,
    textTransform:"capitalize",

    "&:hover": {
      transform: " scale(1.1)",
      background: "#efe1bd !important",
      border: "#202020 1px dashed !important",
    },
  },
  skill: {
    fontSize: "18px",
    fontFamily: "monospace",
    fontWeight:"500"
  }
});

export default useStyles;
