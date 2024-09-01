import { Fragment } from "react";
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

function TodoDetails({todoDetails, openDialog,setOpenDialog,setTodoDetails}){
    return <Fragment>
        <Dialog onClose={()=>setOpenDialog(false)}open = {openDialog}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
                <DialogActions>
                    <Button onClick={()=>{
                        setTodoDetails(null);
                        setOpenDialog(false);
                    }}>
                        Close
                    </Button>
                </DialogActions>
            
            </Dialog>   
         </Fragment>
}
export default TodoDetails;