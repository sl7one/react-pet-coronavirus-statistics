import ico1 from './img/Vector.svg';
import ico2 from './img/Vector1.svg';
import ico3 from './img/Vector2.svg';
import {
  Button,
  StatsCount,
  StatsIcon,
  StatsInfo,
  StatsItem,
  StatsList,
  Title,
} from './components.styled';
import { customStyles } from './modal.cssModule';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export const StatsCovidModal = ({ stats, closeModal, modalIsOpen }) => {
  if (!modalIsOpen) return;

  const handleClose = () => {
    closeModal();
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      <Title>{stats.Country}</Title>
      <StatsList>
        <StatsItem>
          <StatsIcon src={ico1} alt="pic" width="23" />
          <StatsInfo>Total Confirmed</StatsInfo>
          <StatsCount>{stats.TotalConfirmed}</StatsCount>
        </StatsItem>
        <StatsItem>
          <StatsIcon src={ico2} alt="pic" width="23" />
          <StatsInfo>Total Deaths</StatsInfo>
          <StatsCount>{stats.TotalDeaths}</StatsCount>
        </StatsItem>
        <StatsItem>
          <StatsIcon src={ico3} alt="pic" width="23" />
          <StatsInfo>Total Recovered</StatsInfo>
          <StatsCount>{stats.TotalRecovered}</StatsCount>
        </StatsItem>
      </StatsList>
      <Button type="button" onClick={handleClose}>
        OK
      </Button>
    </Modal>
  );
};
