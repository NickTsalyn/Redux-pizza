import styled from '@emotion/styled';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 35px;
  row-gap: 65px;
`;

export const Img = styled.img`
  width: 260px;
  height: 260px;
  margin-bottom: 12px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.p`
  text-align: center;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  letter-spacing: 0.2px;
  margin-bottom: 22px;
`;

export const DescriptionBtn = styled.div`
  width: 280px;
  height: 85px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  /* justify-content: center; */
  align-items: center;
  border-radius: 10px;
  background: #f3f3f3;
  margin-bottom: 22px;
`;

export const PriceText = styled.p`
  color: #000;
  font-size: 22px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.33px;
`;

export const TypeBtn = styled.button`
  width: 132px;
  height: 32px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 6px;
`;

export const CartBtnContainer = styled.div`
  width: 132px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #fe5f1e;
`;

export const CartWrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartMoveBtn = styled.button`
  width: 24px;
  height: 18px;
  background-color: transparent;
  border: none;
`;

export const AddToCartBtn = styled.button`
  width: 132px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #fe5f1e;
  background: #fe5f1e;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const Minus = styled(AiOutlineMinus)`
  width: 12px;
  height: 12px;
  fill: #fe5f1e;
`;
export const Plus = styled(AiOutlinePlus)`
  width: 12px;
  height: 12px;
  fill: #fe5f1e;
`;

export const PlusWhite = styled(FaPlus)`
  width: 12px;
  height: 12px;
  fill: #fff;
`;
