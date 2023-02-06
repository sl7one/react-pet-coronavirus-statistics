import styled from 'styled-components';

export const Container = styled.div``;
export const ListHeader = styled.div`
  display: flex;
  overflow: hidden;
  background: #2196f3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-bottom: 20px;
`;
export const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Row = styled.div`
  display: flex;
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: background-color, 350ms, ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #d3d3d3;
  }
  &:active {
    background-color: #818589;
  }
`;
export const Col = styled.div`
  padding: 30px;
  border-right: 1px solid #b2b2b2;

  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: ${({ color }) => {
    return color ? 'white' : 'black';
  }};

  &:nth-child(1) {
    flex: 0.1;
  }

  &:nth-child(2) {
    display: flex;
    align-items: center;
    flex: 3;
  }
  &:nth-child(3) {
    flex: 1;
    border-right: unset;
    display: flex;
    align-items: center;
  }
`;
export const Triangle = styled.button`
  display: flex;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  border: none;
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  ${({ sorted }) =>
    sorted ? 'border-top' : 'border-bottom'}: 26px solid white;
  margin-right: 15px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`;
export const Button = styled.div`
  background: #2196f3;
  border-radius: 20px;
  padding: 11px 70px;
  font-weight: 700;
  font-size: 24px;
  line-height: calc(28 / 24);
  margin-top: 36px;
  cursor: pointer;

  color: #ffffff;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;

  color: #000000;
  margin: 0;
`;
export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 48px;
  margin-top: 40px;
`;
export const StatsItem = styled.li`
  display: flex;
  width: 100%;
`;
export const StatsIcon = styled.img`
  display: block;
  margin-right: 30px;
`;
export const StatsInfo = styled.span`
  display: block;
  font-weight: 400;
  font-size: 24px;
  line-height: calc(28 / 24);

  color: #666666;
`;
export const StatsCount = styled(StatsInfo)`
  margin-left: auto;
  color: green;
`;
export const Input = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding-left: 15px;
  font-weight: 700;
  font-size: 24px;
  line-height: calc(28 / 24);
  color: black;
  background-color: transparent;

  &::placeholder {
    color: white;
    opacity: 1;
  }
`;
export const HeaderBox = styled.header`
  display: flex;
`;
export const HeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 72px;
  line-height: calc(84 / 72);
  text-transform: uppercase;

  color: #000000;
`;
export const Wrapper = styled.div`
 width: 1200px, margin: 0 auto; font-size: 25px; `;
