import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import _debounce from "lodash/debounce";
import SearchSuggestion from "./SearchSuggestion";

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

  const onSearch = (event: any) => {
    const value = event.target.value;
    setSearchText(value);
    if (value) {
      _debounce(() => {
        setShowIcon(true);
        _debounce(() => {
          setShowSuggestion(true);
          setShowIcon(false);
        }, 500)();
      }, 500)();
    } else if (value === ''){
      setShowSuggestion(false);
      setShowIcon(false);
    }
  };

  const onBlur = () => {
    setShowIcon(false);
    setShowSuggestion(false);
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
      {showSuggestion && <SearchSuggestion />}
    </>
  );
};

export default SearchField;
