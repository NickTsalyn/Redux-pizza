import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from 'redux/cartSlice';
import { fetchPizzas } from 'redux/pizzaSlice';
import {
  BtnContainer,
  DescriptionBtn,
  Img,
  ListStyled,
  ListTitle,
  TypeBtn,
} from './List.styled';

const List = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.pizzas);
  const { items: cart } = useSelector(state => state.cart);

 

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className="section">
      <ListStyled>
        {items.map(({ id, title, imageUrl, types, sizes, price }) => {
          const isItemInCart = cart.find(item => item.id === id);
          return (
            <li key={id} >
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
              <p>${price}</p>
              {isItemInCart ? (
                <button onClick={() => dispatch(removeFromCart(id))}>
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({ id, title, imageUrl, types, sizes, price })
                    )
                  }
                >
                  Add to Cart
                </button>
              )}
            </li>
          );
        })}
      </ListStyled>
    </div>
  );
};

export default List;
