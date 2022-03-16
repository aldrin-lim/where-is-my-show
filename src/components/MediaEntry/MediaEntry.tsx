import { Box } from "@mui/system";
import TopMovieList from "./MediaList";
import { makeStyles } from '@mui/styles';
import colors from '../../style/color';
import { FormControlLabel, FormGroup, Switch, Theme } from "@mui/material";

type MediaEntryProps = {
  label: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: colors.white,
    overflowX: 'scroll',
    paddingBottom: theme.spacing(2)
  },
  title: {
    display: 'inline-block'
  }
}))

const MediaEntry: React.FC<MediaEntryProps> = ({ label }) => {
  const styles = useStyles();

  return (
    <Box className={styles.root} m={2}>
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <h2 className={styles.title}>
          { label }
        </h2>
        <FormGroup>
          <FormControlLabel control={<Switch {...label} defaultChecked />} label="Available for you" />
        </FormGroup>
      </Box>
      <Box pt={2}>
        <TopMovieList />
      </Box>
    </Box>
  )
}

export default MediaEntry;