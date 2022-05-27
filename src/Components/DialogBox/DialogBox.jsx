
import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CardNotes from '../CardNotes/CardNotes';
import './DialogBox.css'
import { UpdateNote } from '../../Services/UserService';
 import { GetAllNote } from '../../Services/UserService';


export default class DialogBox extends Component {
    constructor(props){
        super(props)
        this.NoteId = "";
        this.notes = [];
       this.title = this.props.notesData.title;
        this.description = this.props.notesData.description;
        this.NoteData = this.props;
    this.state = {
        open : true
       // NoteId:""
    }

    }

    getNotes  = async () =>{
      await  GetAllNote().then((res) =>{
        
            this.notes = res.data.data.data
            this.props.cardNoteData(this.notes);
        this.notes.map((key,index)=>{
          console.log(key.title);
        });

      })
      .catch((data) => {
          console.log(data);
      });
      console.log("data is  ", this.notes);


}






  //const [open, setOpen] = React.useState(false);

   handleClickOpen = () => {
    this.setState(
        {
            open : true,
        }
    )
  };

  formData = (data)=>{
       this.title = data.title
       this.description = data.description
  }

   handleClose = async (event) => {


    this.setState(
        {
            open : false,
           // NoteId : event.target.parentElement.parentElement.id,

        }
    );
          let NoteId = event.target.parentElement.parentElement.id
          let title = event.target.parentElement.parentElement.children[0].children[0].children[0].children[0].children[0].children[0].value;
         let description = event.target.parentElement.parentElement.children[0].children[0].children[0].children[1].children[0].children[0].value
    let  totalCardData = new FormData();
    totalCardData.append('title',title);
    totalCardData.append('description',description);
    totalCardData.append('noteId',NoteId);


    await UpdateNote(totalCardData).then((res) => {
      let messaage = "";
      if (res.status == 200) {
        messaage = res.data.data.message;
        console.log(res);
        this.getNotes();
      }
      this.setState({
       // SnackbarOpen: true,
       // SnackbarMessage: messaage
      })
    })
     .catch((data) => {
      let errorMessage = "";
      //  
    });

    

    // let totalCardData ={
    //   noteId : event.target.parentElement.parentElement.id,
    //   title : this.title,
    //   description : this.description
    // } 
    console.log(totalCardData);
    //this.NoteId = event.target.parentElement.parentElement.id;
       // console.log(this.state.formData);

  };

  render() {
   
  return (
    <div>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
          <div className='DisplayCards' id = {this.props.notesData.noteId}>
          <CardNotes CardNotes = {this.NoteData} formNoteData ={this.formData}  />
        <Button variant="text" id='closebutton' onClick = {this.handleClose}><h5>close</h5></Button>
          </div>
      </Dialog>
    </div>
  );
  }
}
