import { MoreVert, TurnedInSharp } from '@mui/icons-material';
import { Card, CardContent, IconButton, InputBase, Snackbar,createTheme } from '@mui/material'
import React, { Component } from 'react'
import { Button } from '@mui/material';
import './NoteBox.css'
import { AddNote, GetAllNote } from '../../Services/UserService';
import { PersonAdd,Palette,Panorama,Archive} from '@mui/icons-material';
import GetAllNotes from '../../Components/GetAllNotes/GetAllNotes.jsx';

export class NoteBox extends Component {

  constructor(props){
    super(props);
    this.notes = []
    this.state = {
      notes : [],
      discriptionCard : false,
      title : "",
      description : "",
      SnackbarOpen: false,
      SnackbarMessage: ""
    }
    
  }

  componentDidMount(){
    this.getAllNotes();
  }

  getAllNotes = async () =>{
    await  GetAllNote().then((res) =>{
      this.setState(
        {
          notes : res.data.data.data
        }
      );
     // this.notes = res.data.data.data;
      this.state.notes.map((key,index)=>{
        console.log(key.title);
      });

    })
    .catch((data) => {
        console.log(data);
    });

  }

  SnackbarClose = ()=> {
    this.setState(
      {
        SnackbarOpen: false
      }
    )
  }


  ClickHandler =()=> {
    
    this.setState(
      {
        discriptionCard :true
      }
    )
  }

  
  OnChangeHandler =(event) =>{
// let  inputData = event.target.id;
 console.log("hello world");
  }

  CloseHandler  = async () => {
     let titleData =  document.getElementById('titleData').value;
    let descData = document.getElementById('discripData').value;
        let errorMessage = "please enter title and description"
    if(titleData == ""&&descData ==""){
      this.setState({
        SnackbarOpen: true,
        SnackbarMessage: errorMessage,
        discriptionCard :false
  
      })
      return;
    }
    else{

    this.setState({
      title : titleData,
      description : descData

    })

    let NoteData = new FormData();
    NoteData.append('title',this.state.title);
    NoteData.append('description',this.state.description);

    await AddNote(NoteData).then((res) => {
      let messaage = "";
      if (res.status == 200) {
        messaage = res.data.status.message;
          this.getAllNotes();
        console.log(res);
      }
      this.setState({
        SnackbarOpen: true,
        SnackbarMessage: messaage
      })
    })
    .catch((data) => {
      let errorMessage = "";
      if (data.response.status == 401)
        errorMessage = "invalid Data!";
      else
        errorMessage = data.message;
      this.setState({
        SnackbarOpen: true,
        SnackbarMessage: errorMessage
      })
    });


    this.setState(
      {
        discriptionCard :false
      }
    )
  }
  }

  // onChangeHandler(event){
  //  console.log("hello world");
  //   let inputData = event.target.id;
  //   if( inputData == "titleData"){
  //     let titleData = event.target.value;
  //     this.setState(
  //       {
  //         title : titleData
          
  //       }
  //     )
  //   }
  //   else if(inputData == "discripData"){
  //     let descriptionData = event.target.value;
  //     this.setState(
  //       {
  //         description : descriptionData
  //       }
  //     )
  //   }
  //   console.log("hello world");


  //   }
    
  render() {
    return (
        <div className="mainTextBox">
         {this.state.discriptionCard ?
           <Card className='longCard'>
           <CardContent >
             <div className='title_With_icon'>
                <InputBase placeholder='Title' id='titleData' onChange={this.OnChangeHandler}  />
               <img  id="pin" src=" http://fundoonotes.incubation.bridgelabz.com/assets/img/pin.svg" alt="pin" />
                </div>
                <div>
                <InputBase placeholder='discription' id='discripData'  onChange={this.OnChangeHandler} />
                </div>
                <div className='divSpace'>

                </div>
                <div className='iconImg'>
                  <img  id = "remindIcon" src="http://fundoonotes.incubation.bridgelabz.com/assets/img/reminder.svg" alt="hello" />
                  <PersonAdd />
                  <Palette />
                  <Panorama />
                  <Archive />
                  <MoreVert />
                  <div>
                <Button variant="text" id='close_button' onClick = {this.CloseHandler}><h5>close</h5></Button>
                </div>
                </div>
           </CardContent>
         </Card> :
          <Card onClick = {this.ClickHandler}>
          <CardContent >
               <InputBase placeholder='Title'></InputBase>
          </CardContent>
        </Card>
         }
          < GetAllNotes allNotes = {this.state.notes} />

          <Snackbar
          autoHideDuration={3000}
          anchorOrigin={{vertical : 'bottom',horizontal :"left"}} 
          open={this.state.SnackbarOpen} 
          message={<span id="message-id">{this.state.SnackbarMessage}</span>}
          action={[
            <IconButton key="close" color="inherit" onClick={() => this.SnackbarClose()} aria-label='Close' > X </IconButton>

          ]
          }
        />
       
   </div>
    )
  }
}

export default NoteBox;