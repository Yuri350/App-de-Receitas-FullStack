import PropTypes from 'prop-types';

import LinkContainer from './styles';

export default function Link({ children, ...rest }) {
  return <LinkContainer { ...rest }>{children}</LinkContainer>;
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
};
