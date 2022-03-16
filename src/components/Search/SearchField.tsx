import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import _debounce from "lodash/debounce";
import SearchSuggestion from "./SearchSuggestion";
import { useQuery } from "react-query";
import { searchMedia } from "../../http/api";
import { MediaResponse } from "../../models/media";
import { useState } from "react";
import buildMediaData from "../../util/buildMediaData";

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

  const { data, isLoading } = useQuery<{ results: MediaResponse[] }>(
    ["media", searchText],
    () => searchMedia(searchText),
    {
      enabled: !!searchText
    }
  );

  // Prevent consecutive firing of api call
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

  return (
    <>
      <Box className={`search__container ${styles.root}`}>
        <p className="search__title">Go ahead, search a movie or tv show</p>
        <Box className={styles.search}>
          <input
            onChange={onSearch}
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
          <SearchSuggestion
            items={data.results
              .slice(0, 5)
              .map((media) => buildMediaData(media))}
          />
        )}
    </>
  );
};

export default SearchField;
