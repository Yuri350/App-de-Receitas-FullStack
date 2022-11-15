import PropTypes from 'prop-types';
import ButtonContainer from './styles';

export default function Button({
  title,
  icon,
  types = 'PRIMARY',
  ...rest
}) {
  return (
    <ButtonContainer types={ types } { ...rest }>
      {icon !== undefined && icon }
      {title}
    </ButtonContainer>
  );
}

Button.defaultProps = {
  icon: undefined,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  types: PropTypes.oneOf(['PRIMARY', 'SECONDARY', 'TERTIARY']).isRequired,
};
