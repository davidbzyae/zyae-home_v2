import React, { useState } from "react";

import { Dialog } from "@mui/material";

interface DialogElementProps
  extends Omit<React.ComponentProps<typeof Dialog>, "open"> {
  isOpen: boolean;
  onOpen: any;
  onClose: any;
}
const DialogElement: React.FC<DialogElementProps> = (props) => {
  const { isOpen, onOpen, onClose, ...other } = props;

  return (
    <Dialog {...other} open={isOpen} onClose={onClose}>
      {props.children}
    </Dialog>
  );
};

export const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  return {
    Element: DialogElement,
    elementProps: { isOpen, onClose, onOpen },
    isOpen,
    open: onOpen,
    close: onClose,
  };
};
