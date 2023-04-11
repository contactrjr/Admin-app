import { useState } from "react";
import SideBar from "../components/Sidebar";
import "../styles/Newuser.scss";
import Headerbar from "./Headerbar";
import image from "../img/no-image-icon-23494.png"
import UploadFileIcon from '@mui/icons-material/UploadFile';

const NewUser = ({inputs, title}) =>{
    const [userImage, setUserImage] = useState("");
    console.log (userImage);
    return(
        <div className="user">
            <SideBar />
            <div className="userwrapper" >
                <Headerbar />
                <div className="top">
                    <h1>New User Details</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                    <img src = {
                        userImage ? URL.createObjectURL(userImage) : image
                        }
                        alt="" />
                        
                    </div>
                    <div className="right">
                        <form>
                            <div className="forminput">
                                <label htmlFor="fileid">
                                    Select file : <UploadFileIcon className="icon"/>

                                </label>
                                <input type="file"
                                    id="fileid"
                                    onChange={(e)=>setUserImage(e.target.files[0])}
                                    style={{display : "none"}} />
                            </div>
                            
                            {inputs.map((input) =>(
                            <div className="forminput" key={input.key}>   
                                <label>{input.lable}</label>
                                <input 
                                    type={input.type}
                                    placeholder={input.placeholder}/>
                            </div> )
                            )}
                            <button>Submit</button>
                        </form>
                    </div>
                </div>            
            </div>
        </div>
    )
};

export default NewUser;