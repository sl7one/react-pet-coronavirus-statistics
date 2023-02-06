import { useEffect } from 'react';
import { StatsCovidModal } from './StatsCovidModal';
import { Table } from './Table';
import { utilsFilter } from './utilsFilter';
import { Header } from './Header';
import { useReducer } from 'react';
import { STATE, reducer } from './reducer';
import { Wrapper } from './components.styled';
import { getAll } from 'API/api';
import store from 'store';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, STATE);

  useEffect(() => {
    const storeData = store.get('statistick');

    if (storeData) {
      dispatch({ type: 'GET_DATA', payload: storeData });
      return;
    }

    getData();
    async function getData() {
      dispatch({ type: 'IS_LOADING', payload: true });
      try {
        const data = await getAll();
        store.set('statistick', data);
        dispatch({ type: 'GET_DATA', payload: data });
      } catch (e) {
        dispatch({ type: 'ERROR_LOADING', paylod: e.message });
      } finally {
        dispatch({ type: 'IS_LOADING', payload: false });
      }
    }
  }, []);

  const {
    sorted,
    filter,
    stats,
    modalIsOpen,
    isLoading,
    data: { Countries: list },
  } = state;

  if (!list) return;

  const onClickItemList = evt => {
    const country = list.find(({ ID: id }) => id === evt.currentTarget.id);
    dispatch({ type: 'SET_STATS_BY_CLICK', payload: country });
  };

  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  const onClickSort = () => dispatch({ type: 'IS_SORTED' });

  const filtredData = () => utilsFilter(sorted, list, filter);

  const setFilter = val => {
    dispatch({ type: 'SET_FILTER', payload: val.trim() });
  };

  return (
    <Wrapper>
      <Header />
      {isLoading && <h1>LOADING</h1>}
      <Table
        data={filtredData()}
        onClickItemList={onClickItemList}
        setDataFilter={setFilter}
        onClickSort={onClickSort}
        sorted={sorted}
      />

      <StatsCovidModal
        stats={stats}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </Wrapper>
  );
};
