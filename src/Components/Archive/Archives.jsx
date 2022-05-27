
import { PersonAdd,Palette,Panorama,Archive,MoreVert, ThirtyFpsSelect, Description} from '@mui/icons-material';
import { CardContent, InputBase, Tooltip } from '@mui/material';
import { Card } from '@mui/material';
import { GetAllNote } from '../../Services/UserService';
import React, { Component } from 'react'
import DialogBox from '../DialogBox/DialogBox';

export default class Archives extends Component {

      constructor(props){
        super(props);
        this.state = {
          notes : [],
          dialougBox : false,
        }
      }

      componentDidMount(){
        this.getArchieve();
      }

      getArchieve  = async () =>{
        await  GetAllNote().then((res) =>{
          this.setState(
            {
              notes : res.data.data.data
            }
          );
          this.state.notes.map((key,index)=>{
            console.log(key.title);
          });

        })
        .catch((data) => {
            console.log(data);
        });
 }

 dialougBoxHandler = (event) =>{
  this.setState({
    dialougBox : !this.state.dialougBox

  })

  //  this.CardData ={
  //   title : event.currentTarget.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].value,
  //   Description : event.currentTarget.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].value,
  //   noteId : event.currentTarget.id
  // } 


}




  render() {
  
    const ArchieveNotes  =  this.state.notes.map((key,index)=>{
      if( key.isArchived){
       return(
     <div className='smallCards' id ={key.id} key = {key.id} onMouseEnter={this.handleIcons} onMouseLeave={this.handleHideIcons} onClick={this.dialougBoxHandler} >
        <Card>
            <CardContent>
                <div className='input_title'>
                <InputBase id='InputTitle' placeholder='please enter any number' value={key.title}  />
                </div>
                <div className='input_description'>
                <InputBase  placeholder='please enter any number' value={key.description}/> 
                </div>
                <div className='space_for_Small_Cards'>

                </div>
                {/* {this.state.icons ? */}
                <div className='Small_Card_icons'>
                <Tooltip title="Read me">
                  <img  id = "remindIcon" src="http://fundoonotes.incubation.bridgelabz.com/assets/img/reminder.svg" alt="hello" />
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
                  <Archive  onClick={this.ArchiveHandler}/>
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
      <div>
           <div className="cardContainer">
        <div className="mainSmallCard">
      {ArchieveNotes}
      </div>
      {this.state.dialougBox ?
         <DialogBox  />  : null
       }
      <div>

      </div>
      </div>
       
      </div>
    )
  }
}

