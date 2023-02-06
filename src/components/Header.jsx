import { HeaderTitle, HeaderBox } from './components.styled';
import logo from './img/logo.png';

export const Header = () => {
  return (
    <HeaderBox>
      <img src={logo} alt="logo" width={200} />
      <HeaderTitle>statistics</HeaderTitle>
    </HeaderBox>
  );
};
