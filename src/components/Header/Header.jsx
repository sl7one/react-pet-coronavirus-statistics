import { HeaderTitle, HeaderBox } from '../../styles/components.styled';
import logo from '../../assets/img/logo.png';

export const Header = () => {
   return (
      <HeaderBox>
         <img
            src={logo}
            alt="logo"
            width={200}
         />
         <HeaderTitle>statistics</HeaderTitle>
      </HeaderBox>
   );
};
