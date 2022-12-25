import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import checkerService from "../Services/CheckerService";
import React from "react";

const MainBox = ({ setNonEnglishWords, setOpen }) => {
   const [text, setText] = React.useState("");
  return (
    <Box className="mainBox">
      <Typography variant="h3" color={"darkorange"}>
        English Checker
      </Typography>
      <Typography variant="h6" color={"orange"}>
        Your English is not good? Don't worry, we will help you!
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Enter Text To check"
        fullWidth
        multiline
        color="warning"
        rows={4}
        margin="normal"
        value={text}
        onChange={(e) => {
          if (/[0-9]/.test(e.target.value)) {
            setOpen(true);
            return;
          }
          setText(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        color="warning"
        onClick={() => {
          checkerService.check(text).then((res) => {
            setNonEnglishWords(res["words"]);
          });
        }}
      >
        Check
      </Button>
    </Box>
  );
};

export default MainBox;
