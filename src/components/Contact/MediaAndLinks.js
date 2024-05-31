import React, { useState } from "react";

import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography } from "@mui/material";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


const MediaAndLinks = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab 
          label="MEDIA"
          sx={{
            flexGrow: 1
          }}
        />
        <Tab 
          label="LINKS" 
          sx={{
            flexGrow: 1
          }}
        />
        <Tab 
          label="DOCS"
          sx={{
            flexGrow: 1
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        Images
      </TabPanel>
      <TabPanel value={value} index={1}>
        Links
      </TabPanel>
      <TabPanel value={value} index={2}>
        Documents
      </TabPanel>
    </>
  );
};


export default MediaAndLinks;
