import { Card, CardContent, InputBase } from '@mui/material';
import React, { Component } from 'react'
import { GetAllNote } from '../../Services/UserService';
import './GetAllNotes.css'
import AppBarHeader from '../AppBar/AppBarHeader';
import { PersonAdd, Palette, Panorama, Archive, MoreVert, ThirtyFpsSelect, Description } from '@mui/icons-material';
import DialogBox from '../DialogBox/DialogBox';
import { Tooltip } from '@mui/material';
import { ArchiveService } from '../../Services/UserService';


export class GetAllNotes extends Component {
  constructor(props) {
    super(props);
   // console.log(this.props.allNotes);
    this.CardData = {}
    this.state = {
      notes: [],
      currentState : "",
      dialougBox: false,
      //  icons : false,
      completeNotes: []
    }
    console.log("hello data is :" ,this.props.allNotes);
  }


  handleIcons = (event) => {

  }


//   componentWillReceiveProps(props) {
//     this.setState({
//       notes : props.allNotes
//     });
// }


  handleHideIcons = (event) => {
    // this.setState({
    //   icons : false
    // });
    // event.target.childNodes[3].style.display = 'none'
  }

  dialougBoxHandler = (event) => {
    this.setState({
      dialougBox: !this.state.dialougBox

    })

    this.CardData = {
      title: event.currentTarget.childNodes[0].childNodes[0].childNodes[0].value,
      Description: event.currentTarget.childNodes[1].childNodes[0].childNodes[0].value,
      noteId: event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id
    }


  }

  componentDidMount() {
    this.getNotes();
  }

  ArchiveHandler = async (event) => {
    //event.preventDefault();
    this.setState({
      dialougBox: false
    });
    let archieveData = {
      noteIdList: [
        event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id
      ]
      ,
      isArchived: true

    }
    await ArchiveService(archieveData).then((res) => {
      if (res.status == 200) {
        this.getArchieveUpdatedNotes();
      }
      console.log("hello your data is" + res);

    })
      .catch((data) => {
        console.log(data);

      });

    console.log("hello world" + event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id);
  }

  Cardnote = (data) => {
    this.setState({
      notes: data,
      currentState : "updatedNotes"
    });
  }


  getNotes = async () => {
    await GetAllNote().then((res) => {
      this.setState(
        {
          notes: res.data.data.data,
        }
      );
      this.state.notes.map((key, index) => {
        console.log(key.title);
      });

    })
      .catch((data) => {
        console.log(data);
      });
  }


  getArchieveUpdatedNotes = async () => {
    await GetAllNote().then((res) => {
      this.setState(
        {
          notes: res.data.data.data,
          currentState : "updateArchiveNotes"
        }
      );
      this.state.notes.map((key, index) => {
        console.log(key.title);
      });

    })
      .catch((data) => {
        console.log(data);
      });
  }

  render() {
    // const IconStyle = document.getElementsByClassName('Small_Card_icons').style.display = 'none'

    let totalNotes;

      if(this.state.currentState == "updatedNotes" || this.state.currentState == "updateArchiveNotes" ){
        totalNotes = this.state.notes
      }
      else{
        totalNotes = this.props.allNotes
      }
  const  allNote = totalNotes.map((key, index) => {
      if (!key.isArchived) {
        return (
          <div className='smallCards' id={key.id} key={key.id} onMouseEnter={this.handleIcons} onMouseLeave={this.handleHideIcons}  >
            <Card>
              <CardContent>
                <div onClick={this.dialougBoxHandler}>
                  <div className='input_title' >
                    <InputBase id='InputTitle' placeholder='please enter any number' value={key.title} />
                  </div>
                  <div className='input_description' >
                    <InputBase placeholder='please enter any number' value={key.description} />
                  </div>
                  <div className='space_for_Small_Cards'>

                  </div>
                </div>
                {/* {this.state.icons ? */}
                <div className='Small_Card_icons'>
                  <Tooltip title="Read me">
                    <img id="remindIcon" src="http://fundoonotes.incubation.bridgelabz.com/assets/img/reminder.svg" alt="hello" />
                  </Tooltip>
                  <Tooltip title="Collabarator">
                    <PersonAdd />
                  </Tooltip>
                  <Tooltip title="Change">
                    <Palette />
                  </Tooltip>
                  <Tooltip title="Add image">
                    <Panorama />
                  </Tooltip>
                  <Tooltip title="Archive" >
                    <Archive onClick={this.ArchiveHandler} />
                  </Tooltip >
                  <MoreVert />
                </div>
                {/* : null} */}
              </CardContent>
            </Card>
          </div>
        );
      }
    });
    return (
      <div className="cardContainer">
        <div className="mainSmallCard">
          {allNote}
        </div>
        {this.state.dialougBox ?
          <DialogBox notesData={this.CardData} cardNoteData={this.Cardnote} /> : null
        }
        <div>

        </div>
      </div>
    )
  }


}

export default GetAllNotes