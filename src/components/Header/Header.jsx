import { useSelector } from 'react-redux';
import {
  CartButton,
  Form,
  FormContainer,
  HeaderContainer,
  Input,
  LogoContainer,
} from './Header.styled';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  const { sum } = useSelector(state => state.cart);
  const { counter } = useSelector(state => state.cart);

  return (
    <header className="section">
      <HeaderContainer>
        <LogoContainer>
          <div className="logo"></div>
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
            <span>${sum} |</span>
            <span>
              {' '}
              <FiShoppingCart /> {counter}
            </span>
          </CartButton>
        </FormContainer>
      </HeaderContainer>
    </header>
  );
};

export default Header;
