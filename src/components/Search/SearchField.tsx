import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import _debounce from "lodash/debounce";
import SearchSuggestion from "./SearchSuggestion";
import { useQuery } from "react-query";
import { searchMedia } from "../../http/api";
import { Media } from "../../models/media";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
  search: {
    margin: 0,
    position: "relative",
  },
  loadingIcon: {
    position: "absolute",
    top: 12,
    right: -10,
  },
}));

const SearchField = () => {
  const styles = useStyles();

  const [showIcon, setShowIcon] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { data, isLoading, } = useQuery<{ results: Media[] }>(
    ["media", searchText],
    () => searchMedia(searchText)
  );

  const onSearch = (event: any) => {
    const value = event.target.value;
    
    if (value) {
      _debounce(() => {
        setShowIcon(true);
        _debounce(() => {
          setSearchText(value);
          setShowSuggestion(true);
          setShowIcon(false);
        }, 500)();
      }, 500)();
    } else if (value === "") {
      setShowSuggestion(false);
      setShowIcon(false);
    }
  };

  const onBlur = () => {
    setShowIcon(false);
    setShowSuggestion(false);
  };

  const buildMediaData = (mediaData: Media[]) => {
   
    return mediaData.map((media) => {
      const date = media.first_air_date || media.release_date
      const title = media.title || media.name || media.original_title || media.original_name || ''
      return {
        title: title,
        thumbnail: media.poster_path,
        date: date
          ? new Date(date).toLocaleDateString()
          : ""
      }
    }).slice(0,5);
  };

  return (
    <>
      <Box className={`search__container ${styles.root}`}>
        <p className="search__title">Go ahead, search a movie or tv show</p>
        <Box className={styles.search}>
          <input
            onChange={onSearch}
            onBlur={onBlur}
            className="search__input"
            type="text"
            placeholder="breaking bad, The office, westworld, etc ..."
          />
          {showIcon && (
            <CircularProgress size={20} className={styles.loadingIcon} />
          )}
        </Box>
      </Box>
      {!isLoading &&
        data &&
        data.results &&
        data.results.length > 0 &&
        showSuggestion && (
          <SearchSuggestion items={buildMediaData(data.results)} />
        )}
    </>
  );
};

export default SearchField;
