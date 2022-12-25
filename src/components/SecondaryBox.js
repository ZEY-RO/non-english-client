import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const SecondaryBox = ({nonEnglishWords}) => {
  return (
    <Box className="mainBox secondaryBox">
      <Typography variant="h4" color={"#00A87C"}>
        Non-English Words
      </Typography>
      <Typography variant="h6" color={"#2FF5C0"}>
        {nonEnglishWords.map((word) => {
          return (
            <>
              {word} <br />
            </>
          );
        })}
      </Typography>
    </Box>
  );
};

export default SecondaryBox;
