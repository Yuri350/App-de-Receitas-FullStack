import React, { useMemo, useState } from 'react';

import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

function DeliveryContextProvider({ children }) {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tokenVerified, setTokenVerified] = useState('');

  const context = useMemo(() => ({
    role,
    setRole,
    email,
    setEmail,
    password,
    setPassword,
    tokenVerified,
    setTokenVerified,
  }), [
    role,
    setRole,
    email,
    setEmail,
    password,
    setPassword,
    tokenVerified,
    setTokenVerified,
  ]);

  return (
    <DeliveryContext.Provider value={ context }>
      {children}
    </DeliveryContext.Provider>
  );
}

DeliveryContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryContextProvider;
