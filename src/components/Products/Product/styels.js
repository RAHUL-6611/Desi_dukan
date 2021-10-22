import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    
  cardActions:{
      display: 'flex',
      justifyContent: 'flex-end'
  },
  cardContent:{
      display: 'flex',
      justifyContent:'space-between'
  } 
,
  root: {
    // maxWidth: 345,// original width style
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
 
}))