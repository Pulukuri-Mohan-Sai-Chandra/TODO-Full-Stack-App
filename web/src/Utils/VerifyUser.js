 
 export const verifyUser = async () =>{
    let TID = localStorage.getItem('TID')
    if(TID == undefined) return false; 
    try{
        let response = await axios.post(import.meta.env.VITE_VERIFY_USER,{token:TID})
        if(response.data.flag == true) return true 
        return false;
    }
    catch(e){
         return false; 
    }
 }