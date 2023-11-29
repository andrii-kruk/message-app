import { BtnStyled } from "./Button.styled";

const Button = ({ type, variant, content, disabled = false }) => {
  return (
    <BtnStyled type={type} className={variant} disabled={disabled}>
      {content}
    </BtnStyled>
  );
};

export default Button;
