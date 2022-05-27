import { Archive, MoreVert, Palette, Panorama, PersonAdd } from '@mui/icons-material'
import { Button, CardContent, InputBase } from '@mui/material'
import React, { Component } from 'react'
import './CardNotes.jsx'


export default class CardNotes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      discriptionCard: true,
      title: this.props.CardNotes.notesData.title,
      description : this.props.CardNotes.notesData.Description,
      SnackbarOpen: false,
      SnackbarMessage: ""

    }

    this.props.formNoteData(this.state);
    // this.previosData = {
    //   title: this.props.CardNotes.notesData.title,
    //   description : this.props.CardNotes.notesData.Description,

    // }
    // this.props.previousNoteData(previosData);

  }

  CloseHandler = () => {
    this.setState({
      discriptionCard: false
    })

  }


  OnChangeHandler = (event) => {


    let data = {
      title : this.props.CardNotes.notesData.title,
      description :this.props.CardNotes.notesData.Description
    };
    if(event.target.id == "titleData"){

      this.setState({
        title : event.target.value
      });
      console.log("title is:",this.state.title);
     data.title = event.target.value;
  }
    else if (event.target.id == "discripData"){
      this.setState({
        description : event.target.value
      });
     console.log("description is",this.state.description);
      data.description = event.target.value;

    }

    let datas = {
      title : this.state.title,
      description : this.state.description

    }
    //this.props.formNoteData(data);
   // 

  }



  render() {
    return (
      <div className="mainTextBox">
        {this.state.discriptionCard ?
        <div>
          <CardContent >
            <div className='title_With_icon'>
              <InputBase placeholder='Title' id='titleData' onChange={this.OnChangeHandler} defaultValue={this.props.CardNotes.notesData.title} />
              <img id="pin" src=" http://fundoonotes.incubation.bridgelabz.com/assets/img/pin.svg" alt="pin" />
            </div>
            <div>
              <InputBase placeholder='discription' id='discripData' defaultValue={this.props.CardNotes.notesData.Description} onChange={this.OnChangeHandler} />
            </div>
            <div className='divSpace'>

            </div>
            <div className='iconImg'>
              <img id="remindIcon" src="http://fundoonotes.incubation.bridgelabz.com/assets/img/reminder.svg" alt="hello" />
              <PersonAdd />
              <Palette />
              <Panorama />
              <Archive />
              <MoreVert />
            </div>
          </CardContent>
          </div>
          : null}
      </div>
    )
  }
}
