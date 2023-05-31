import styled from 'styled-components';

export const ListHeader = styled.div`
   display: flex;
   align-items: center;
   background-color: #2196f3;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
   border-radius: 20px;
   margin-bottom: 20px;
`;
export const ListBody = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   overflow-y: scroll;
   height: 50vh;
   padding: 20px 0;
`;
export const Row = styled.div`
   display: flex;
   border-radius: 20px;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
   transition: background-color 350ms ease-in-out;
   cursor: pointer;

   &:hover {
      background-color: #d3d3d3;
   }
   &:active {
      background-color: #818589;
   }
`;
export const Col = styled.div`
   padding: 15px;
   border-right: 1px solid #b2b2b2;

   font-weight: 700;
   font-size: 24px;
   line-height: 28px;

   color: ${({ color }) => {
      return color ? 'white' : 'black';
   }};

   &:nth-child(1) {
      flex: 0.1 90px;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   &:nth-child(2) {
      display: flex;
      align-items: center;
      flex: 3 500px;
   }
   &:nth-child(3) {
      flex: 1 300px;
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
   ${({ sorted }) => (sorted ? 'border-top' : 'border-bottom')}: 26px solid white;
   margin-right: 15px;
   cursor: pointer;
   outline: none;
   background-color: transparent;
`;
export const Button = styled.button`
   background: #2196f3;
   border-radius: 20px;
   padding: 11px 70px;
   font-weight: 700;
   font-size: 24px;
   line-height: calc(28 / 24);
   margin: 0 auto;
   margin-top: 36px;
   cursor: pointer;

   color: #ffffff;
`;
export const Title = styled.h2`
   font-weight: 700;
   font-size: 48px;
   line-height: 56px;

   color: #000000;
   margin: 0 auto;
`;
export const StatsList = styled.ul`
   margin: 0;
   padding: 10px 0;
   display: flex;
   flex-direction: column;
   width: 100%;
   list-style: none;
   justify-content: center;
   align-items: center;
   gap: 3px;
   margin-top: 40px;
   overflow-y: scroll;
   height: 50vh;
`;

export const StatsItem = styled.li`
   display: flex;
   gap: 10px;
   width: 50%;
`;

export const StatsDate = styled.p`
   margin: 0;
   padding: 0;
   font-weight: 600;
   flex: 1 100px;
`;

export const StatsTotal = styled.p`
   margin: 0;
   padding: 0;
   flex: 1 150px;
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
   align-items: center;
`;
export const HeaderTitle = styled.h1`
   font-weight: 700;
   font-size: 72px;
   line-height: calc(84 / 72);
   text-transform: uppercase;
   margin: 30px 0;

   color: #000000;
`;
export const Wrapper = styled.div`
   margin: 0 auto;
   font-size: 25px;
   padding: 0 40px;
   display: flex;
   flex-direction: column;
`;
export const LoaderBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
`;
export const LoadMore = styled.button`
   margin: 0 auto;
   margin-top: 30px;
   padding: 14px 28px;
   font-weight: 600;
   font-size: 18px;
   text-transform: uppercase;
   color: #373737;
   background-color: orange;
   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
   border-radius: 10.3108px;

   transition: all 350ms ease-in-out;

   &:hover {
      transform: scale(1.1);
      cursor: pointer;
   }
`;
