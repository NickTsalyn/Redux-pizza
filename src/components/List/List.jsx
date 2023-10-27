import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from 'redux/cartSlice';
import { fetchPizzas } from 'redux/pizzaSlice';


import {
  AddToCartBtn,
  BtnContainer,
  CartBtnContainer,
  CartMoveBtn,
  CartWrapper,
  DescriptionBtn,
  Img,
  ListStyled,
  ListTitle,
  Minus,
  Plus,
  PlusWhite,
  PriceText,
  TypeBtn,
} from './List.styled';

const List = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.pizzas);
  const { items: cart, quantity } = useSelector(state => state.cart);

  console.log(cart);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className="section">
      <ListStyled>
        {items.map(({ id, title, imageUrl, types, sizes, price }) => {
          const isItemInCart = cart.find(item => item.id === id);
          return (
            <li key={id}>
              <Img src={imageUrl} alt={title} />
              <ListTitle>{title}</ListTitle>
              <DescriptionBtn>
                <BtnContainer>
                  {types.map(type => (
                    <TypeBtn>{type}</TypeBtn>
                  ))}
                </BtnContainer>
                <BtnContainer>
                  {sizes.map(size => (
                    <TypeBtn>{size}sm</TypeBtn>
                  ))}
                </BtnContainer>
              </DescriptionBtn>
              <CartWrapper>
                <PriceText>${price}</PriceText>
                {isItemInCart ? (
                  <CartBtnContainer>
                    <CartMoveBtn>
                      <Minus onClick={() => dispatch(removeFromCart(id))} />
                    </CartMoveBtn>
                    <span className='quantity'>{quantity}</span>
                    <CartMoveBtn>
                      <Plus
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id,
                              title,
                              imageUrl,
                              types,
                              sizes,
                              price,
                            })
                          )
                        }
                      />
                    </CartMoveBtn>
                  </CartBtnContainer>
                ) : (
                  <AddToCartBtn
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id,
                          title,
                          imageUrl,
                          types,
                          sizes,
                          price,
                        })
                      )
                    }
                  >
                    <span className='plus-minus'>
                      <PlusWhite />
                    </span>
                    <span className="text-color">Add</span>
                  </AddToCartBtn>
                )}
              </CartWrapper>
            </li>
          );
        })}
      </ListStyled>
    </div>
  );
};

export default List;
