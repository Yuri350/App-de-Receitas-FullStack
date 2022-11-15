import PropTypes from 'prop-types';
import FormContainer from './styles';

export default function Form({ children, ...rest }) {
  return <FormContainer { ...rest }>{children}</FormContainer>;
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
};
