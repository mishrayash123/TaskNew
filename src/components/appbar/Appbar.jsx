import {
  Container,
  Wrapper,
  TopLeft,
  TopRight,
  Logo,
  IconContainer,
  TopIconBadge,
  TopAvatar
} from "./AppbarStyles";
import React, { useState } from 'react';
import Modal1 from 'react-modal';
import Modal2 from 'react-modal';
import Modal3 from 'react-modal';

import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function Appbar() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const openModal1 = () => {
    setIsOpen1(true);
  };

  const closeModal1 = () => {
    setIsOpen1(false);
  };

  
  const openModal2 = () => {
    setIsOpen2(true);
  };

  const closeModal2 = () => {
    setIsOpen2(false);
  };
  
  const openModal3 = () => {
    setIsOpen3(true);
  };

  const closeModal3 = () => {
    setIsOpen3(false);
  };


  return (
    <Container>
      <Modal1
        isOpen={isOpen1}
        onRequestClose={closeModal1}
        contentLabel="Popup Message"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            width: '300px',
            height: '200px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'pink',
            borderRadius: '25%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            color:"blue"
          }
        }}
      >
        <p>Notifications</p>
        <button style={{backgroundColor:"black",color:"white",padding:10,borderRadius:'25%',marginTop:5}} onClick={closeModal1}> OK </button>
      </Modal1>
      <Modal2
        isOpen={isOpen2}
        onRequestClose={closeModal2}
        contentLabel="Popup Message"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            width: '300px',
            height: '200px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'pink',
            borderRadius: '25%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            color:"blue"
          }
        }}
      >
        <p>Settings</p>
        <button style={{backgroundColor:"black",color:"white",padding:10,borderRadius:'25%',marginTop:5}} onClick={closeModal2}> OK </button>
      </Modal2>
      <Modal3
        isOpen={isOpen3}
        onRequestClose={closeModal3}
        contentLabel="Popup Message"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            width: '300px',
            height: '200px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'pink',
            borderRadius: '25%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            color:"blue"
          }
        }}
      >
        <p>Admin Profile's Detailes</p>
        <button style={{backgroundColor:"black",color:"white",padding:10,borderRadius:'25%',marginTop:5}} onClick={closeModal3}> OK </button>
      </Modal3>
      <Wrapper>
        <TopLeft>
          <Logo>Admin Dev</Logo>
        </TopLeft>
        <TopRight>
          <IconContainer>
            <NotificationsNone onMouseEnter={openModal1}/>
            <TopIconBadge>2</TopIconBadge>
          </IconContainer>
          <IconContainer>
            <Language />
            <TopIconBadge>2</TopIconBadge>
          </IconContainer>
          <IconContainer>
            <Settings onMouseEnter={openModal2} />
          </IconContainer>
          <TopAvatar onMouseEnter={openModal3} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHoqg4ikD0Gp1l_yc2jpvEdN8Xddy03FZgQ&usqp=CAU" />
        </TopRight>
      </Wrapper>
    </Container>
  );
}

export default Appbar;
