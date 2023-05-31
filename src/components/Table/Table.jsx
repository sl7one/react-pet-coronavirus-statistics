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
   const {
      statistic,
      setIsShowModal,
      setUserCountry,
      setFilter,
      filter,
      isSort,
      setSort,
      pagination,
   } = coronavirusStore;

   const onClickItemList = (country) => {
      setIsShowModal(true);
      setUserCountry(country);
   };

   const list = !filter
      ? statistic
      : statistic.filter(({ country }) =>
           country.toLowerCase().includes(filter.toLowerCase().trim())
        );

   const items = list
      .slice(0, pagination().end)
      .map(({ id, cases: { total }, country }, index) => (
         <Row
            key={id}
            onClick={() => onClickItemList(country)}
         >
            <Col>{index + 1}</Col>
            <Col>{country}</Col>
            <Col>{total}</Col>
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
