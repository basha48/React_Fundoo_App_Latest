import React from 'react'
import './AppBarHeader.css'
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle, AddShoppingCart, SearchOffOutlined, SearchOutlined, ShoppingCart, ViewStream } from '@mui/icons-material';
import { Mui5search } from 'mui5-search';
import TempDrawer from '../Drawer/TempDrawer';
import { Link } from 'react-router-dom';










const AppBarHeader = () => {
  return (
    <div>
    <div className='main_content'>
    <div className='navbar'>
      <div className="toolbar">
        <div className="subcontent">
          <div className="itemcontent">
            <div className='space_content'>

            </div>
            <div className='menuContent' >
             < MenuIcon id="menu_icon" />
            </div>
            <span className='space_between'></span>
            <div className='header_title'>
              <h2>fundooNotes</h2>
            </div>
            <span className='space_for_fundoo'></span>
            {/* <div className='search_icon'>
              <IconButton id='search_button' >
                <SearchIcon />
              </IconButton>
            </div> */}
            {/* <div className='text_feild'>
              <input type="text" id='search_text' label="With normal TextField" />
            </div> */}
           <div className='text_feild_div'>
            <TextField
            className='text_bar'
                id="standard-bare"
                variant="outlined"
                placeholder='search '
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />
              </div>
              <span className='space'></span>
              <div className='shoppingCart'>
              <ShoppingCart />
              </div>
              <span className='space_view'></span>
              <div className='viewStream'>
                <ViewStream />
              </div>
              <span className='space_view'></span>
              <div className='Account_Circle'>
                <AccountCircle />
              </div>
              <span className='space_view'></span>
          </div>

        </div>
      </div>
    </div>
    </div>
    <TempDrawer />
    </div>
    
  )
}

export default AppBarHeader