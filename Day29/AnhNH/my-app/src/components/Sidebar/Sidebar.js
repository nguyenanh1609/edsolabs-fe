import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Col, Container, Row } from 'reactstrap';
import { BsChevronDown } from "react-icons/bs";
import { useHistory } from 'react-router';

export default function Sidebar() {
  const history=useHistory()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //api
  return (
    <Container fluid>
      <Row className="border pe-2 pt-3 pb-3">
        <Col className="text-end">
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Welcome, Admin <BsChevronDown></BsChevronDown>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={()=>{
              handleClose()
              localStorage.removeItem("token")
              history.push("/")
            }}>Logout</MenuItem>
          </Menu>
        </Col>
      </Row>
    </Container>
  );
}
