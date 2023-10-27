import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from 'redux/filterSlice';
import {
  CategoryBtn,
  CategoryWrapper,
  FilterBarWrapper,
} from './Filters.styled';

const Filters = () => {
  const { filterItems } = useSelector(state => state.filter);
  // const { items } = useSelector(state => state.pizzas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    // <Wrapper>
    <FilterBarWrapper>
      <CategoryWrapper>
        {filterItems.map(item => {
          return <CategoryBtn key={item.id}>{item.name}</CategoryBtn>;
        })}
      </CategoryWrapper>
      <div>
        <select name="Sort by" id="">
          <option value="popularity">popularity</option>
          <option value="by price">by price</option>
          <option value="alphabetically">alphabetically</option>
        </select>
      </div>
    </FilterBarWrapper>
    // </Wrapper>
  );
};

export default Filters;
