import { useEffect } from 'react';

import { Loader } from 'components/Loader/Loader';
import { observer } from 'mobx-react-lite';
import { coronavirusStore } from 'store/coronavirusStore';

import { Wrapper } from '../../styles/components.styled';
import { Header } from '../Header/Header';
import { StatsCovidModal } from '../StatsModalCovid/StatsCovidModal';
import { Table } from '../Table/Table';

export const App = observer(() => {
   const { isLoading, getStatistic } = coronavirusStore;

   useEffect(() => {
      getStatistic();
   }, [getStatistic]);

   // const onClickSort = () => dispatch({ type: 'IS_SORTED' });

   // const filtredData = () => utilsFilter(sorted, list, filter);

   // const setFilter = (val) => {
   //    dispatch({ type: 'SET_FILTER', payload: val.trim() });
   // };

   return (
      <Wrapper>
         <Header />
         {isLoading ? <Loader /> : <Table />}

         <StatsCovidModal />
      </Wrapper>
   );
});
