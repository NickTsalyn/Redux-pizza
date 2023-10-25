import { CartButton, Form, FormContainer, HeaderContainer, Input, LogoContainer } from './Header.styled';

const Header = () => {
  return (
    <header className='section'>
      <HeaderContainer>
        <LogoContainer>
            <div className='logo'>
            </div>
          <div>
            <h2>REACT PIZZA</h2>
            <p>the most delicious pizza in the universe</p>
          </div>
        </LogoContainer>
        <FormContainer>
          <Form>
            <Input type="text" />
          </Form>
          <CartButton>
            <span>Price   /</span>
            <span>  Quantity</span>
          </CartButton>
        </FormContainer>
      </HeaderContainer>
    </header>
  );
};

export default Header;
