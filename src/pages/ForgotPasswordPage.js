import * as React from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ForgotPasswordPage() {
  // popup modal state
  const [open, setOpen] = React.useState(false);
  // email input state
  const [forgotPasswordEmail, setForgotPasswordEmail] = React.useState("");

  const openPopupModal = () => {
    setOpen(true);
    console.log(forgotPasswordEmail);
  };

  const closePopupModal = () => {
    setOpen(false);
  };

  const cardStyles = {
    padding: 1,
    borderRadius: 2,
    bgcolor: "secondary.light",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    display: "grid",
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
    width: "38%",
    gap: "1rem",
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
    >
      <Card sx={cardStyles}>
        <CardContent>
          <Typography variant="h4"> Forgot password</Typography>
        </CardContent>
        <hr size="1" width="90%" color="gray" />
        <CardContent>
          <label>
            {" "}
            Enter your account email and we'll send you a link to reset your
            password
          </label>
        </CardContent>
        <hr size="1" width="90%" color="gray" />

        <CardContent>
          <form style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <TextField
              label="Email"
              placeholder="user@gmail.com"
              onChange={(e) => setForgotPasswordEmail(e.target.value)}
              fullWidth
            />
            <Button variant="contained" onClick={openPopupModal} fullWidth>
              {" "}
              Reset Password
            </Button>
          </form>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={closePopupModal}
      >
        <DialogTitle>{"Password reset link set"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Check your inbox for a password reset link.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closePopupModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
