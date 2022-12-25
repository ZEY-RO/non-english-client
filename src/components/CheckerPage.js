import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import MainBox from "./MainBox";
import SecondaryBox from "./SecondaryBox";

const CheckerPage = () => {
  const [open, setOpen] = React.useState(false);
  const [nonEnglishWords, setNonEnglishWords] = React.useState([]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <form>
         <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert severity="warning">Numbers are Not allowed!</Alert>
        </Snackbar>
        <MainBox setNonEnglishWords={setNonEnglishWords} setOpen={setOpen} />
      </form>
      <SecondaryBox nonEnglishWords={nonEnglishWords} />
    </>
  );
};

export default CheckerPage;
