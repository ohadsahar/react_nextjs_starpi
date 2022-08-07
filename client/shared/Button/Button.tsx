import React from "react";
import { AppButtonWrapper } from "./Styled";

interface AppButtonProps {
  articleTitle: string;
  buttonText: string;
  onPress: (id: string) => void;
}

const AppButton = ({ buttonText, articleTitle, onPress }: AppButtonProps) => {
  return (
    <AppButtonWrapper onClick={() => onPress(articleTitle)}>
      {buttonText}
    </AppButtonWrapper>
  );
};

export default AppButton;
