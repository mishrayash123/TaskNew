import {
  Container,
  Wrapper,
  SidebarMenu,
  Title,
  List,
  ListItem
} from "./SidebarStyles";
import React, { useState } from 'react';
import Modal1 from 'react-modal';
import Modal2 from 'react-modal';
import Modal3 from 'react-modal';
import Modal4 from 'react-modal';
import Modal5 from 'react-modal';
import Modal6 from 'react-modal';
import Modal7 from 'react-modal';
import Modal8 from 'react-modal';

import {
  LineStyle,
  Timeline,
  TrendingUp,
  Group,
  Info,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline
} from "@material-ui/icons";
import { Link } from "react-router-dom";

function Sidebar() {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
 

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
  
  const openModal4 = () => {
    setIsOpen4(true);
  };

  const closeModal4 = () => {
    setIsOpen4(false);
  };
  
  const openModal5 = () => {
    setIsOpen5(true);
  };

  const closeModal5 = () => {
    setIsOpen5(false);
  };
  
  const openModal6 = () => {
    setIsOpen6(true);
  };

  const closeModal6 = () => {
    setIsOpen6(false);
  };
  
  const openModal7 = () => {
    setIsOpen7(true);
  };

  const closeModal7 = () => {
    setIsOpen7(false);
  };
  const openModal8 = () => {
    setIsOpen8(true);
  };

  const closeModal8 = () => {
    setIsOpen8(false);
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
        <p>Home page of Admin pannel</p>
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
        <p>Analytics report : Total active users / month</p>
        <p>| Total sales | Revenue | Cost</p>
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
        <p>User's Data/List </p>
        <button style={{backgroundColor:"black",color:"white",padding:10,borderRadius:'25%',marginTop:5}} onClick={closeModal3}> OK </button>
      </Modal3>
      <Modal4
        isOpen={isOpen4}
        onRequestClose={closeModal4}
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
        <p>About Us Page</p>
        <button style={{backgroundColor:"black",color:"white",padding:10,borderRadius:'25%',marginTop:5}} onClick={closeModal4}> OK </button>
      </Modal4>
      <Modal5
        isOpen={isOpen5}
        onRequestClose={closeModal5}
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
        <p>Our Product's List</p>
        <button style={{backgroundColor:"black",color:"white",padding:10,borderRadius:'25%',marginTop:5}} onClick={closeModal5}> OK </button>
      </Modal5>
      <Modal6
        isOpen={isOpen6}
        onRequestClose={closeModal6}
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
        <p>Transactions List</p>
        <button style={{backgroundColor:"black",color:"white",padding:10,borderRadius:'25%',marginTop:5}} onClick={closeModal6}> OK </button>
      </Modal6>
      <Modal7
        isOpen={isOpen7}
        onRequestClose={closeModal7}
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
        <p>All Reports List</p>
        <button style={{backgroundColor:"black",color:"white",padding:10,borderRadius:'25%',marginTop:5}} onClick={closeModal7}> OK </button>
      </Modal7>
      <Modal8
        isOpen={isOpen8}
        onRequestClose={closeModal8}
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
        <p>List of all notifications</p>
        <p>Mail | Feedback | Messages</p>
        <p>Management</p>
        <button style={{backgroundColor:"black",color:"white",padding:10,borderRadius:'25%',marginTop:5}} onClick={closeModal8}> OK </button>
      </Modal8>
      <Wrapper>
        <SidebarMenu>
          <Title>Dashboard</Title>
          <List>
            <Link to="/" className="link">
              <ListItem>
                <LineStyle className="icon" />
                <div onMouseEnter={openModal1}>Home</div>
              </ListItem>
            </Link>
            <ListItem>
              <Timeline className="icon" />
              <div onMouseEnter={openModal2}>Analytics</div>
            </ListItem>
            <ListItem>
              <TrendingUp className="icon" />
              <div onMouseEnter={openModal2}>Sales</div>
            </ListItem>
            <Link to="/users" className="link">
              <ListItem>
                <Group className="icon" />
                <div onMouseEnter={openModal3}>Users</div>
              </ListItem>
            </Link>
          </List>
          <Title>Quick Menu</Title>
          <List>
            <ListItem>
              <Info className="icon" />
              <div onMouseEnter={openModal4}>About</div>
            </ListItem>
            <Link to="/products" className="link">
              <ListItem>
                <Storefront className="icon" />
                <div onMouseEnter={openModal5}>Products</div>
              </ListItem>
            </Link>
            <ListItem>
              <AttachMoney className="icon" />
              <div onMouseEnter={openModal6}>Transactions</div>
            </ListItem>
            <ListItem>
              <BarChart className="icon" />
              <div onMouseEnter={openModal7}>Reports</div>
            </ListItem>
          </List>
          <Title onMouseEnter={openModal8}>Notifications</Title>
          <List>
            <ListItem>
              <MailOutline className="icon" />
              <div>Mail</div>
            </ListItem>
            <ListItem>
              <DynamicFeed className="icon" />
              <div>Feedback</div>
            </ListItem>
            <ListItem>
              <ChatBubbleOutline className="icon" />
              <div>Messages</div>
            </ListItem>
            <ListItem>
              <WorkOutline className="icon" />
              <div>Manage</div>
            </ListItem>
          </List>
        </SidebarMenu>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;
