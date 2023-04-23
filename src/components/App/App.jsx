import { useEffect } from 'react';

import { Loader } from 'components/Loader/Loader';
import { observer } from 'mobx-react-lite';
import { coronavirusStore } from 'store/coronavirusStore';

import { LoadMore, Wrapper } from '../../styles/components.styled';
import { Header } from '../Header/Header';
import { StatsCovidModal } from '../StatsModalCovid/StatsCovidModal';
import { Table } from '../Table/Table';

export const App = observer(() => {
   const { isLoading, getStatistic, setPage, pagination } = coronavirusStore;

   useEffect(() => {
      getStatistic();
   }, [getStatistic]);

   return (
      <Wrapper>
         <Header />
         {isLoading ? <Loader /> : <Table />}

         <LoadMore
            type="button"
            onClick={() => setPage()}
            disabled={!pagination().isShowBtn}
         >
            Load More
         </LoadMore>

         <StatsCovidModal />
      </Wrapper>
   );
});
