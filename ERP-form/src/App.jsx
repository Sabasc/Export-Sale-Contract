import { Divider,Button, Tooltip } from 'antd';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CachedIcon from '@mui/icons-material/Cached';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import './App.css';
const App = () => (
  <div style={{margin:'0px',border:'1px solid black',backgroundColor: '#f7f7f7',
  width:'99vw',height:'100vh'}}>
   <h2 style={{margin:'10px',padding:'10px',}}> <b>EXPORT SALE CONTRACT</b>
    <span>

    </span></h2>
  
    {/* <Divider /> */}
    
   <div style={{border:'1px solid blue',margin:10,}}>
   <div style={{margin:0, backgroundColor: '#f7f7f7',border:'1px solid green'}}>
    <Button className='square-button'> History </Button>
   <Button className='square-button'> Form </Button>
   </div>

   <div> <h3 style={{margin:'10px',marginRight:'20px'}}>Drag a column header here to group by that column 

   <span className='spans' style={{marginLeft:'1099px'}}>
    <Tooltip title='Filter the Records'>
<Button>  < FilterAltIcon/></Button>
    </Tooltip>
   </span>
   <span className='spans'>
    <Tooltip title='Load the Records'>
  <Button>< FileDownloadIcon/></Button>
    </Tooltip>
   </span>
   <span className='spans'>
    <Tooltip title='Refresh the Records'>
    <Button>  <  CachedIcon/></Button>
    </Tooltip>
   </span>
   <span className='spans'>
    <Tooltip title='Export'>
  <Button><ExitToAppIcon/></Button>
    </Tooltip>
   </span>
   <span className='spans'>
    <Tooltip title='Column Clooser'>
 <Button> <ViewWeekIcon/></Button>
    </Tooltip>
   </span>
   </h3> 
 
   </div>
   </div>
   
    
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </div>
);
export default App;