import * as React from "react";
import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";

import { auth } from "../../../firebase-config";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SettingsContent() {
  const [user, setUser] = React.useState({});

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const updatePassword = async () => {
    try {
      await sendPasswordResetEmail(auth, user.email);
      await handleClickOpen();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        justifyItems: "center",
        gap: "1rem",
      }}
    >
      <Typography variant="h4">Settings</Typography>
      <Card sx={{ padding: 3, display: "grid", gap: "1rem" }}>
        <Typography> Registered Email: {user?.email} </Typography>
        <div sx={{ display: "flex" }}>
          <Button variant="contained" onClick={updatePassword}>
            {" "}
            Send Password Reset Link{" "}
          </Button>
        </div>{" "}
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{"Password reset link set"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Check your inbox at {user?.email} to reset your password.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
