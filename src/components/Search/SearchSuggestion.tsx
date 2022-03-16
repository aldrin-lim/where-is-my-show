import React from "react";
import List from "@mui/material/List";
import { Box, ListItemButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchItem from "./SearchItem";
import { Media } from "../../models/media";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    position: "absolute",
    top: "130px",
    left: "0px",
  },
}));

type SearchSuggestionProps = {
  items: Media[];
};

const SearchSuggestion: React.FC<SearchSuggestionProps> = ({ items }) => {
  const styles = useStyles();
  const history = useHistory();

  const onSearchItemClick = (media: Media) => {
    history.push(`/media/${media.id}`, { mediaType: media.mediaType })
  }
  
  return (
    <Box className={styles.root}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {items.map((media) => (
          <ListItemButton onClick={() => onSearchItemClick(media)}>
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
