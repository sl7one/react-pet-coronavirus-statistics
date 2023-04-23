import { useEffect } from 'react';
import Modal from 'react-modal';

import { gsap } from 'gsap';
import { observer } from 'mobx-react-lite';
import { coronavirusStore } from 'store/coronavirusStore';

import ico2 from '../../assets/img/Vector1.svg';
import ico3 from '../../assets/img/Vector2.svg';
import ico1 from '../../assets/img/Vector.svg';
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

Modal.setAppElement('#root');

export const StatsCovidModal = observer(() => {
   const { setIsShowModal, isShowModal, userTarget } = coronavirusStore;
   const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = userTarget;

   useEffect(() => {
      isShowModal &&
         gsap.fromTo('.ReactModal__Content', { y: -100 }, { y: 0, duration: 1 });
   }, [isShowModal]);

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
