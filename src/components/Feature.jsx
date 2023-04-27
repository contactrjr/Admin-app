import { colors } from "@mui/material";
import "../styles/Feature.scss"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Feature = () =>{

    return(
        <div className='features'> 
            <div className="top">
                <div className="title">Revenue Details</div>
                <div className="icon"><MoreVertIcon/></div>
            </div>
            <div className="middle">
                <div  className="progresschart"
                style={{ width: 100, height: 100}}>
                    <CircularProgressbar value={65}
                    text = {"65%"}
                    strokeWidth={5}
                     />

                </div>
            
            
                <p className="caption">Total sales for this month</p>
                <p className="price">£9800.00</p>
                <p className="detail">Expenes from latest transactions </p>
            </div>
            <div className="Bottom">
                <div className="target">
                    <div>Target</div>
                    <div className="tarvalue red">
                    <KeyboardArrowDownIcon/>
                        15%
                    </div>
                </div>
                <div className="week">
                    <div>Last week</div>
                    <div className="tarvalue green">
                    <KeyboardArrowUpIcon/>
                        £500
                    </div>
                </div>
                <div className="month"> 
                    <div>Last Month</div>
                    <div className="tarvalue red">
                    <KeyboardArrowDownIcon/>
                    £3590
                    </div>        
                </div>        
            </div>
        </div>
    )
}

export default Feature;