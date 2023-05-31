import logo from '../../assets/img/logo.png';
import { HeaderBox, HeaderTitle } from '../../styles/components.styled';

export const Header = () => {
   return (
      <HeaderBox>
         <img
            src={logo}
            alt="logo"
            width={100}
         />
         <HeaderTitle>statistics</HeaderTitle>
      </HeaderBox>
   );
};
