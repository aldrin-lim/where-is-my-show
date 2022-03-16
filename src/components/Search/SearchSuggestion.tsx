import React from "react";
import List from "@mui/material/List";
import { Box, ListItemButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchItem, { SearchItemProps } from "./SearchItem";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    position: "absolute",
    top: "130px",
    left: "0px",
  },
}));

type SearchSuggestionProps = {
  items: SearchItemProps[];
};

const SearchSuggestion: React.FC<SearchSuggestionProps> = ({ items }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {items.map((media) => (
          <ListItemButton>
            <SearchItem
              title={media.title}
              thumbnail={media.thumbnail}
              date={media.date}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default SearchSuggestion;
