import styled from 'styled-components';

const Logo = () => {
  return (
    <Wrapper>
      <span>La</span>Fleur
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  font-family: 'Rosaline', cursive;
  font-weight: 400;
  margin-bottom: 0;
  letter-spacing: 2px;
  color: var(--clr-grey-1);
  span {
    color: var(--clr-primary-5);
  }
`;

export default Logo;
