import { Triangle } from 'react-loader-spinner';
import { LoaderBox } from 'styles/components.styled';

export const Loader = ({ isVisible }) => {
   return (
      <LoaderBox>
         <Triangle
            height="80"
            width="80"
            color={'blue'}
            ariaLabel="triangle-loading"
            visible={isVisible}
         />
      </LoaderBox>
   );
};
