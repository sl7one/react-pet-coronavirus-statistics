import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
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
      setFilter,
      filter,
      isSort,
      setSort,
      pagination,
      page,
   } = coronavirusStore;
   const ref = useRef([]);

   useEffect(() => {
      gsap.fromTo(
         ref.current,
         {
            x: -100,
            opacity: 0,
         },
         { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'bounce.out' }
      );
   }, []);

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

   const items = list
      .slice(0, pagination().end)
      .map(({ ID, Country, TotalConfirmed }, index) => (
         <Row
            key={ID}
            onClick={() => onClickItemList(ID)}
            ref={(el) => ref.current.push(el)}
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
