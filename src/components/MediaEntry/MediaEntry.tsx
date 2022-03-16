import { Box } from "@mui/system";
import MediaList from "./MediaList";
import { makeStyles } from "@mui/styles";
import colors from "../../style/color";
import {
  FormControlLabel,
  FormGroup,
  Switch,
  Theme,
} from "@mui/material";
import { Media } from "../../models/media";
import Skeleton from "react-loading-skeleton";

type MediaEntryProps = {
  label: string;
  isLoading: boolean;
  entries?: Media[];
  error: any;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: colors.white,
    overflowX: "auto",
    paddingBottom: theme.spacing(2),
  },
  title: {
    display: "inline-block",
  },
  loader: {
    margin: "auto auto",
    display: "block",
  },
}));

const LoadingSkeleton = () => {
  return (
    <Box display="flex" flexDirection="row" gap={5} marginBottom="16px">
      {Array.from(Array(4)).map(() => (
        <Box>
          <Skeleton width={200} height={300} />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box mt={2}>
              <Skeleton width={200} height={19} />
              <Box height={5} />
              <Skeleton width={200} height={15} />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const MediaEntry: React.FC<MediaEntryProps> = ({ label, isLoading, entries }) => {
  const styles = useStyles();

  return (
    <Box className={`custom-scroll ${styles.root}`} m={2}>
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <h2 className={styles.title}>{label}</h2>
        <FormGroup>
          <FormControlLabel
            control={<Switch {...label} defaultChecked />}
            label="Available for you"
          />
        </FormGroup>
      </Box>
      <Box pt={2}>{isLoading ? <LoadingSkeleton /> : <MediaList entries={entries? entries : []} />}</Box>
    </Box>
  );
};

export default MediaEntry;
