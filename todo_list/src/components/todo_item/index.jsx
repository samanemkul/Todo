import { Typography } from '@mui/material';
import { Card, CardContent, CardActions } from '@mui/material';
import { Button } from '@mui/material';
function TodoItem({todo, fetchDetailsOfCurrentTodo}){
    return <Card sx={{
        maxWidth:350,
        display: "flex",
        flexDirection :"column",
        justifyContent:"space-between",
    }
       
    }>
         <CardContent>
         <Typography varient="h5" color={"text.secondary"}>
            {todo?.todo}

            </Typography>   
        </CardContent>
        <CardActions>
            <Button 
            onClick={()=>fetchDetailsOfCurrentTodo(todo?.id)}
            sx={{
                backgroundColor:'black',
                color:'white',
                opacity:"0.75",
                "&:hover":{
                    backgroundColor:'#0000',
                    color:"#fff",
                    opacity:"1",
                },
            }}>Show Details</Button>
        </CardActions>
    </Card>
}
export default TodoItem;