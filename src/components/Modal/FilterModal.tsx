import styled from '@emotion/styled';

interface Props {
  title: string;
  clickBackground: () => void;
  children: React.ReactNode;
}

function FilterModal({ title, clickBackground, children }: Props) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalWrapper>
      <ModalBackdrop onClick={clickBackground} />
    </ModalContainer>
  );
}

export default FilterModal;

const ModalContainer = styled.div`
  position: 'absolute';
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: #ffffff;
  width: 390px;
  border-radius: 16px;
  padding: 20px;
`;

const ModalTitle = styled.div`
  margin: 4px 0 20px;
  color: #14171a;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: #0000004d;
  opacity: 0.5;
`;
