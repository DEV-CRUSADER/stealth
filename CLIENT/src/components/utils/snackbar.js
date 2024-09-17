import { Snackbar, Alert } from "@mui/material";

import { CloseSnackBar } from "../../redux/slices/app";
import { useDispatch, useSelector } from "react-redux";

const vertical = "top";
const horizontal = "right";

function SnackBar() {
  const dispatch = useDispatch();
  const { open, severity, message } = useSelector(
    (state) => state.app.snackbar
  );

  return (
    <>
      {(message && open) ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={5000}
          key={vertical + horizontal}
          onClose={() => dispatch(CloseSnackBar())}
        >
          <Alert
            onClose={() => dispatch(CloseSnackBar())}
            severity={severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      ) :         <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={5000}
      key={vertical + horizontal}
      onClose={() => dispatch(CloseSnackBar())}
    >
      <Alert
        onClose={() => dispatch(CloseSnackBar())}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Something went wrong
      </Alert>
    </Snackbar>}
    </>
  );
}

export default SnackBar;
