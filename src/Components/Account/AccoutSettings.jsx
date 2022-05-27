import { Button, Popover, ThemeProvider, Typography, unstable_createMuiStrictModeTheme } from '@mui/material';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import { Component } from 'react';
import { AccountCircle, Style, TurnRightTwoTone } from '@mui/icons-material';
import { createTheme } from '@mui/system';
import { green, grey, purple } from '@mui/material/colors';




// const theme = createTheme({
//   root: { backgroundColor: 'red'
// }
// });

export class AccoutSettings extends Component {

  constructor(props) {
    super(props);
    this.classes = this.props;
    this.drawerTheam = createTheme({
      overrides : {
        MuiPaper :{
          root : {
            MuiPopover :{
              paper :{
                top : "20px"
              }
            }
          }
        }
      }
    })

  }


  SignOut = () => {
    localStorage.clear();
    // this.props.history.push('/');
    window.location = "http://localhost:4200/";
  }



  render() {
    let email = localStorage.getItem('email');
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');
    let fullName = firstName + " " + lastName;

    return (
    //  <ThemeProvider theme={this.drawerTheam}>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            {/* <Button variant="contained" > */}
            <  AccountCircle {...bindTrigger(popupState)} />
            {/* </Button> */}
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              
              <Typography sx={{ p: 4 }}>
                
              <div className='main_content'>

                </div>
                <div className='account_Settings'>
                  <div>
                    <h6>
                      {fullName}
                    </h6>
                  </div>
                  <div>
                    <h6>
                      {email}
                    </h6>
                  </div>
                  <div>
                 
                    <Button className='signOutButton' variant="outlined" onClick={this.SignOut}>Sign out</Button>
                  </div>
                </div>


              </Typography>
              
            </Popover>
          </div>
        )}
      </PopupState>
    //  </ThemeProvider> 
    );
  }
}

export default AccoutSettings;