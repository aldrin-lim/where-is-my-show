import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormControlLabel, FormGroup, Theme } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import colors from "../style/color";
import Logo from "../assets/where is my show-logos_transparent.png";
import { useQuery } from "react-query";
import { signIn } from "../http/api";
import { useState } from "react";
const useStlye = makeStyles((theme: Theme) => ({
  root: {
    color: colors.white,
    backgroundColor: "#333",
    height: "100%",
    padding: theme.spacing(2),
    fontWeight: "normal",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  logo: {
    margin: "0 auto",
    width: "255px",
    display: "block",
    marginTop: theme.spacing(1),
  },
  error: {
    color: 'red',
  }
}));

const CssTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& label": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const SignIn = () => {
  const styles = useStlye();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { data, refetch, isError, isLoading } = useQuery(
    "user",
    () => signIn(email, password),
    {
      refetchOnWindowFocus: false,
      enabled: false, // turned off by default, manual refetch is needed
    }
  );

  const onSubmit = (event: any) => {
    event.preventDefault();
    refetch();
  };

  const error = !isLoading && data && data.message;

  return (
    <Box
      className={styles.root}
      component="form"
      width="300px"
      noValidate
      autoComplete="off"
    >
      <Box>
        <img className={styles.logo} src={Logo} height="40" alt="logo" />
        <h2>Sign In</h2>
        <FormGroup onSubmit={onSubmit}>
          <Box className={styles.input}>
            <CssTextField
              fullWidth
              color="secondary"
              name="email"
              id="email"
              variant="outlined"
              label="Email"
              placeholder="your@email.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box className={styles.input}>
            <CssTextField
              fullWidth
              color="secondary"
              name="password"
              id="password"
              variant="outlined"
              label="Password"
              type="password"
              placeholder="Password "
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <span className={styles.error}>
            { data && data.message }
          </span>
          <Box className={styles.input}>
            <Button
              onClick={onSubmit}
              type="submit"
              size="large"
              fullWidth
              variant="contained"
            >
              Sign In
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </Box>
  );
};

export default SignIn;
