import { observer } from 'mobx-react-lite';
import ico1 from '../../assets/img/Vector.svg';
import ico2 from '../../assets/img/Vector1.svg';
import ico3 from '../../assets/img/Vector2.svg';
import {
   Button,
   StatsCount,
   StatsIcon,
   StatsInfo,
   StatsItem,
   StatsList,
   Title,
} from '../../styles/components.styled';
import { customStyles } from '../../styles/modal.cssModule';
import Modal from 'react-modal';
import { coronavirusStore } from 'store/coronavirusStore';
Modal.setAppElement('#root');

export const StatsCovidModal = observer(() => {
   const { setIsShowModal, isShowModal, userTarget } = coronavirusStore;
   const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = userTarget;

   return (
      <Modal
         isOpen={isShowModal}
         shouldCloseOnOverlayClick={true}
         style={customStyles}
      >
         <Title>{Country}</Title>
         <StatsList>
            <StatsItem>
               <StatsIcon
                  src={ico1}
                  alt="pic"
                  width="23"
               />
               <StatsInfo>Total Confirmed</StatsInfo>
               <StatsCount>{TotalConfirmed}</StatsCount>
            </StatsItem>
            <StatsItem>
               <StatsIcon
                  src={ico2}
                  alt="pic"
                  width="23"
               />
               <StatsInfo>Total Deaths</StatsInfo>
               <StatsCount>{TotalDeaths}</StatsCount>
            </StatsItem>
            <StatsItem>
               <StatsIcon
                  src={ico3}
                  alt="pic"
                  width="23"
               />
               <StatsInfo>Total Recovered</StatsInfo>
               <StatsCount>{TotalRecovered}</StatsCount>
            </StatsItem>
         </StatsList>
         <Button
            type="button"
            onClick={() => setIsShowModal(false)}
         >
            OK
         </Button>
      </Modal>
   );
});
