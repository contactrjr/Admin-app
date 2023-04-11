import '../styles/Headerbar.scss'
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Headerbar = () => {

    return(
        <div className="header">
            <div className='wrapper'>
                <div className='headertext'>
                    <span>Admin Portal</span>
                </div>
                <div className='items'>
                    <div className='item'>
                        <LanguageIcon className='icon'/>
                        English
                    </div>
                    <div className='item'>
                        <NotificationsNoneIcon className='icon'/>
                        <div className='counter'>2</div>
                    </div>
                    <div className='item'>
                        <img src='https://images.pexels.com/photos/1829696/pexels-photo-1829696.jpeg'
                            
                            className='avatar'/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Headerbar;