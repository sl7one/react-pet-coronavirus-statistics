import { observer } from 'mobx-react-lite';
import { coronavirusStore } from 'store/coronavirusStore';

import find from '../../assets/img/find.svg';
import {
   Col,
   Input,
   ListBody,
   ListHeader,
   Row,
   Triangle,
} from '../../styles/components.styled';

export const Table = observer(() => {
   const { statistic, setIsShowModal, setFilter, filter, isSort, setSort } =
      coronavirusStore;

   const onClickItemList = (id) => {
      setIsShowModal(
         true,
         statistic.find(({ ID }) => id === ID)
      );
   };

   const list = !filter
      ? statistic
      : statistic.filter(({ Country }) =>
           Country.toLowerCase().includes(filter.toLowerCase().trim())
        );

   const toTop = (a, b) => a - b;
   const toDown = (a, b) => b - a;

   isSort
      ? list.slice().sort(({ TotalConfirmed: a }, { TotalConfirmed: b }) => toTop(a, b))
      : list.slice().sort(({ TotalConfirmed: a }, { TotalConfirmed: b }) => toDown(a, b));

   const items = list.map(({ ID, Country, TotalConfirmed }, index) => (
      <Row
         key={ID}
         onClick={() => onClickItemList(ID)}
      >
         <Col>{index + 1}</Col>
         <Col>{Country}</Col>
         <Col>{TotalConfirmed}</Col>
      </Row>
   ));

   return (
      <>
         <ListHeader>
            <Col color="true">№</Col>
            <Col color="true">
               <label htmlFor="country">
                  <img
                     src={find}
                     alt="pic"
                     width={30}
                  />
               </label>
               <Input
                  type="text"
                  id="country"
                  value={filter}
                  onChange={({ target }) => setFilter(target.value)}
                  autocomplete="off"
                  placeholder="Country"
               />
            </Col>
            <Col
               color="true"
               btn={true}
            >
               <Triangle
                  type="button"
                  onClick={() => setSort(!isSort)}
                  sorted={isSort}
               />
               Total Confirmed
            </Col>
         </ListHeader>
         <ListBody>{items}</ListBody>
      </>
   );
});
