import { ButtonContainer } from "./styleButtonItem";
import { addComment } from "../../../client";

const ButtonItem = ({ children, onClick }) => {



  return (
    // <div>
    <ButtonContainer>
      <button 
        type="submit"
        onClick={onClick}
      >
        {children}
      </button>
    </ButtonContainer>
    // </div>
  );
};

export default ButtonItem;
