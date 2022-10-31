import React, { useMemo, useState } from 'react';

import PropTypes from 'prop-types';
import DeliveryProvider from './DeliveryProvider';

function DeliveryContextProvider({ children }) {
  const [role, setRole] = useState;

  const context = useMemo(() => ({
    role,
    setRole,
  }), [
    role,
    setRole,
  ]);

  return (
    <DeliveryProvider.Provider value={ context }>
      {children}
    </DeliveryProvider.Provider>
  );
}

DeliveryContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryContextProvider;
