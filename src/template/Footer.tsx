import { Container, Theme, Toolbar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub"
import IGIcon from "@mui/icons-material/Instagram"

import { Box } from "@mui/system";
import colors from "../style/color";

const useStyles = makeStyles((theme: Theme) => {
  return ({
    root: {
      marginTop: theme.spacing(4),
      color: colors.white
    },
    footer: {
      borderTop: `solid 1px rgba(255,255,255,.2)`,
      fontSize: 10,
      textAlign: 'center',
    },
    icons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 100,
      margin: '0 auto'
    }
  })
});


const Footer = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
     <Toolbar>
       <Container maxWidth="lg">
          <Box className={styles.footer} py={2}>
            <p>Made By: Aldrin Lim - 2022</p>
            <Box className={styles.icons}>
              <LinkedInIcon />
              <GithubIcon />
              <IGIcon />
            </Box>
          </Box>
       </Container>
     </Toolbar>
    </Box>
  );
};

export default Footer;
