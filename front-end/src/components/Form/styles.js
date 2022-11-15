import styled from 'styled-components';

const FormContainer = styled.form`
  width: 100%;
  margin-left: 0.5rem;
  max-width: 30rem;
  background: ${({ theme }) => theme['gray-800']};
  border-radius: 5px;
  padding: 4rem;
  display: flex;
  flex-direction: column;
`;

export default FormContainer;
