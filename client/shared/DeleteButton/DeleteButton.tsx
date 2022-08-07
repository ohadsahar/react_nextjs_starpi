import React from "react";
import { AppButtonWrapper } from "./Styled";

interface DeleteButtonProps {
  id: string;
  buttonText: string;
  onDelete: (id: string) => void;
}

const DeleteButton = ({ buttonText, id, onDelete }: DeleteButtonProps) => {
  return (
    <AppButtonWrapper onClick={() => onDelete(id)}>
      {buttonText}
    </AppButtonWrapper>
  );
};

export default DeleteButton;
