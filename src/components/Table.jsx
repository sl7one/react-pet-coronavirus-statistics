import { useState } from 'react';
import {
  Col,
  Input,
  ListBody,
  ListHeader,
  Row,
  Triangle,
} from './components.styled';
import find from './img/find.svg';

export const Table = ({
  data,
  onClickItemList,
  setDataFilter,
  onClickSort,
  sorted,
}) => {
  const [filter, setFilter] = useState('');

  // if (!data) {
  //   return null;
  // }

  const onChange = evt => {
    setFilter(evt.target.value);
    setDataFilter(evt.target.value);
  };

  const items = data.map((item, index) => (
    <Row key={item.ID} id={item.ID} onClick={onClickItemList}>
      <Col>{index + 1}</Col>
      <Col>{item.Country}</Col>
      <Col>{item.TotalConfirmed}</Col>
    </Row>
  ));

  return (
    <>
      <ListHeader>
        <Col color="true">№</Col>
        <Col color="true">
          <label htmlFor="country">
            <img src={find} alt="pic" width={30} />
          </label>
          <Input
            type="text"
            id="country"
            value={filter}
            onChange={onChange}
            autocomplete="off"
            placeholder="Country"
          />
        </Col>
        <Col color="true" btn={true}>
          <Triangle type="button" onClick={onClickSort} sorted={sorted} />
          Total Confirmed
        </Col>
      </ListHeader>
      <ListBody>{items}</ListBody>
    </>
  );
};
