import '../styles/Widgets.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RedeemIcon from '@mui/icons-material/Redeem';

const Widgets = ({type}) =>{
    let data;
    switch(type){
        case "user":
        data =  {
            title: "USER",
            link: "See more detail",
            isMoney: false,
            val : 150,
            valPercent: 25,
            isUp: true,
            icon : (<PersonIcon className='icon'
            style={{
                color:  "rgba(128, 0 , 0)",
                backgroundColor: "rgba(128, 0, 0, 0.209)",}}/>),
        };
        break;
        case "product" :
            data = {
                title: "PRODUCT",
                link:"See product details",
                isMoney: false,
                val : 10,
                valPercent: 75,
                isUp: false,
                icon:(<ShoppingBasketIcon className='icon'
                    style={{
                        color:  "rgba(23, 86 , 9)",
                        backgroundColor: "rgba(1, 128, 15, 0.182)",}}/>),
            }
        break;
        case "revenue" :
            data = {
                title: "REVENUE",
                link:"See revenue details",
                isMoney: true,
                val : 250,
                valPercent: 100,
                isUp:true,
                icon:(<MonetizationOnIcon className='icon'
                    style={{
                    color:  "rgba(190,210,12)",
                    backgroundColor: "rgba(111, 128, 0, 0.25)",}}/>),
        }
        break;
        case "expense" :
            data = {
                title: "EXPENSE",
                link:"See expense details",
                isMoney: true,
                val : 75,
                valPercent: 65,
                isUp:false,
                icon:(<RedeemIcon className='icon'
                    style={{
                    color:  "rgba(128,0,128)",
                    backgroundColor: "rgba(128, 0, 128, 0.208)",}}/>),
        }
        break;
        default:
            break;
    }
    return(
        <div className="wigdet">
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "£"}{data.val}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className="right">
                <div className={`percentage${(data.isUp)? ' positive' : ' negative'}`}>
                    {data.isUp ? 
                    <KeyboardArrowUpIcon/> :
                    <KeyboardArrowDownIcon/>}
                    {data.valPercent} %
                </div>
                <span className='icon'>
                   
                    {data.icon}
                </span>
            </div>
        </div>
    )
}

export default Widgets;