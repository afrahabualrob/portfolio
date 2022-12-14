import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import styles from "./style.module.css";
import MinimizeIcon from "@mui/icons-material/Minimize";


export default function ProjectTechnology({ item }) {
  let subDetails = Object.values(item);

  return (
    <TreeView
      aria-label="multi-select"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
      sx={{
        flexGrow: 1,
        my: 1,
      }}
    >
      <TreeItem
        nodeId="1"
        label=<span className={styles.treeItem}> {Object.keys(item)[0]}</span>
        sx={{ color: "#a16653", fontSize: "30px!important" }}
      >
        <TreeItem
          nodeId="id"
          label={subDetails[0].map((item, index) => (
            <li key={index} className={styles.treeItemSub}>
              <MinimizeIcon fontSize="2" sx={{ color: "#a16653"}} /> {item}
            </li>
          ))}
          sx={{ color: "#202020" }}
        />
      </TreeItem>
    </TreeView>
  );
}
