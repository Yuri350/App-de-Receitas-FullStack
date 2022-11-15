import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  position: relative;

  > svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    fill: ${({ theme }) => theme['gray-700']};
    font-size: 0.875rem;
    transition: fill 0.2s ease 0s;
  }

  &:focus-within > svg {
    fill: ${({ theme }) => theme['green-500']};
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 50px;
  font-size: 1rem;
  background: ${({ theme }) => theme['gray-900']};
  border-color: ${({ theme }) => theme['gray-900']};
  color: ${({ theme }) => theme.white};
  padding: 0px 1em 0px 2.65em;
  border-radius: 5px;
`;
