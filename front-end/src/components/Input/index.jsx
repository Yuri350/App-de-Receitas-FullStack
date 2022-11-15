import PropTypes from 'prop-types';
import { InputContainer, InputField } from './styles';

export default function Input({ icon, ...rest }) {
  return (
    <InputContainer>
      {icon !== undefined && icon }
      <InputField { ...rest } />
    </InputContainer>
  );
}

Input.defaultProps = {
  icon: undefined,
};

Input.propTypes = {
  icon: PropTypes.node,
};
