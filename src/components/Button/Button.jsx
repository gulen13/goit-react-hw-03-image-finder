import PropTypes from 'prop-types';
import { ButtonStd } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <>
      <ButtonStd type="button" onClick={onClick}>
        Load more
      </ButtonStd>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
