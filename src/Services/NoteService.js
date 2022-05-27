export const GetAllNote = () =>{

    try{
        const response =  axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',{
            headers :{
                Authorization:localStorage.getItem('token')
            }
        }
        )
          return response;
      }
      catch(error){
          return error;
  
      }


}