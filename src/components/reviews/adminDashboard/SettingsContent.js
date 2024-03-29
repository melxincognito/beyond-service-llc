import React, { useState, forwardRef } from "react";
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase-config";
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
import { AnimatePresence, motion } from "framer-motion";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SettingsContent() {
  const [user, setUser] = useState({});

  const [open, setOpen] = useState(false);

  // password reset popup modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // grabbing current user info

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
    <AnimatePresence>
      <motion.div
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          display: "grid",
          justifyContent: "center",
          justifyItems: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h4">Settings</Typography>
        <Typography> Manage your Beyond Service Admin account here</Typography>
        <Card
          sx={{
            padding: 3,
            display: "grid",
            gap: "1rem",
            width: "100%",
            justifyItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <Typography variant="h6" color="primary.light">
              Name:{" "}
            </Typography>{" "}
            <Typography>{user?.displayName} </Typography>
          </div>
          <hr size="1" width="90%" color="gray" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <Typography variant="h6" color="primary.light">
              {" "}
              Registered Email:{" "}
            </Typography>{" "}
            <Typography> {user?.email}</Typography>
          </div>
          <hr size="1" width="90%" color="gray" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <Typography variant="h6" color="primary.light">
              Reset Password:{" "}
            </Typography>
            <Button
              id="settingsbtn"
              color="secondary"
              variant="outlined"
              onClick={updatePassword}
            >
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
          <DialogTitle>{"Password reset link sent"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Check your inbox at {user?.email} to reset your password.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>CLOSE</Button>
          </DialogActions>
        </Dialog>
      </motion.div>
    </AnimatePresence>
  );
}
