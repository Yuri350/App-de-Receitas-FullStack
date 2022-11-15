import PropTypes from 'prop-types';
import TitleContainer from './styles';

export default function Title({ title, styles }) {
  return <TitleContainer styles={ styles }>{title}</TitleContainer>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
};
