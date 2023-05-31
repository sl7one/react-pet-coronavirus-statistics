import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { getCountryStats } from 'API/api';
import { Loader } from 'components/Loader/Loader';
import { observer } from 'mobx-react-lite';
import { coronavirusStore } from 'store/coronavirusStore';

import {
   Button,
   StatsDate,
   StatsItem,
   StatsList,
   StatsTotal,
   Title,
} from '../../styles/components.styled';
import { customStyles } from '../../styles/modal.cssModule';

Modal.setAppElement('#root');

export const StatsCovidModal = observer(() => {
   const { setIsShowModal, isShowModal, userCountry } = coronavirusStore;
   const [userData, setUserData] = useState({ isLoading: false, error: '', data: {} });
   const { isLoading, data } = userData;

   useEffect(() => {
      const getData = async () => {
         setUserData((prev) => ({
            ...prev,
            isLoading: true,
         }));
         try {
            const [data] = await getCountryStats(userCountry);
            setUserData((prev) => ({ ...prev, data }));
         } catch (e) {
            setUserData((prev) => ({ ...prev, error: e.message }));
         } finally {
            setUserData((prev) => ({
               ...prev,
               isLoading: false,
            }));
         }
      };
      getData();
   }, [userCountry]);

   const { country, cases } = data;

   return (
      <Modal
         isOpen={isShowModal}
         shouldCloseOnOverlayClick={true}
         style={customStyles}
      >
         {isLoading ? (
            <Loader />
         ) : (
            <>
               <Title>{country}</Title>
               <StatsList>
                  {Object.entries(cases).map(([date, stats], idx) => (
                     <StatsItem key={idx}>
                        <StatsDate>{date}</StatsDate>
                        <StatsTotal>total: {stats.total}</StatsTotal>
                        <StatsTotal>new: {stats.new}</StatsTotal>
                     </StatsItem>
                  ))}
               </StatsList>
               <Button
                  type="button"
                  onClick={() => setIsShowModal(false)}
               >
                  OK
               </Button>
            </>
         )}
      </Modal>
   );
});
