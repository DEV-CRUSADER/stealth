import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import useSettings from "../../../hooks/useSettings";


const useThemeDetector = () => {
  
  const getMatchMedia = () => window.matchMedia("(prefers-color-scheme: dark)");
  const [isDarkTheme, setIsDarkTheme] = useState(getMatchMedia().matches);

  const handleChange = (e) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkTheme = getMatchMedia();
    darkTheme.addListener(handleChange);
    return () => darkTheme.removeListener(handleChange);
  }, []);
  return isDarkTheme;
}


const ThemeDialogBlock = ({ open, handleClose }) => {
  const theme = useTheme();
  const { onApplyMode } = useSettings();

  const isDarkTheme = useThemeDetector();
  const [themOptionSelected, setThemOptionSelected] = useState(theme.palette.mode)
  const [themeMode, setThemeMode] = useState(theme.palette.mode);


  const handleRadioChange = (event) => {

    setThemOptionSelected(event.target.value);

    if (event.target.value === "system") {
      setThemeMode(isDarkTheme ? "dark" : "light");
      return;
    }

    setThemeMode(event.target.value);
  };

  const handleApply = () => {

    onApplyMode(themeMode, themOptionSelected);
    handleClose();
  };

  const data = {
    title: "Choose theme",
    action: "Apply",
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{data.title}</DialogTitle>
        <DialogContent
          sx={{
            width: "400px",
          }}
        >
          <FormControl>
            <RadioGroup
              aria-labelledby="theme-radio-button-group-label"
              value={themOptionSelected}
              name="theme-button-group"
              sx={{
                display: "flex",
                padding: "10px",
              }}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="system"
                control={<Radio />}
                label="System Default"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleApply} autoFocus>
            {data.action}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export { ThemeDialogBlock };
