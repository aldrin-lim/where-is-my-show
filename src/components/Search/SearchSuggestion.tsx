import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Box, ListItemButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Search } from "@mui/icons-material";
import SearchItem from "./SearchItem";

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    position: 'absolute',
    top: '130px',
    left: '0px'
  },
}));

const SearchSuggestion = () => {
  const styles = useStyles()
  return (
    <Box className={styles.root}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItemButton>
        <SearchItem />
      </ListItemButton>
      
    </List>
    </Box>
  );
}

export default SearchSuggestion;