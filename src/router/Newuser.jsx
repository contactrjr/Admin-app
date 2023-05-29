import { useEffect, useState } from "react";
import SideBar from "../components/Sidebar";
import "../styles/Newuser.scss";
import Headerbar from "./Headerbar";
import image from "../img/no-image-icon-23494.png"
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../firebase";
import { auth, dbStorage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { KeyboardDoubleArrowDownOutlined } from "@mui/icons-material";


const NewUser = ({inputs, title}) =>{
    const [userImage, setUserImage] = useState("");
    const [uploadedImgUrl, setUploadedImgUrl] = useState("");
    const [percentage, setPercentage] = useState(null);

    console.log (userImage);
    //const location = useLocation();
    //let editObject = location.state.editObject;

    const [inputData, SetInputData] = useState({ })
    //const [inputData, SetInputData] = useState(editObject)

    //console.log("Edit Object", editObject)

    useEffect( () => {
        const uploadFile = ()=>{

            const name = new Date().getTime() + userImage.name;
            const storageRef = ref(dbStorage, name);
            console.log("file name", name);

            const uploadTask = uploadBytesResumable(storageRef, userImage);

             


            uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setPercentage(progress);
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                 default:
                    break;

                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                setUploadedImgUrl(downloadURL);
                SetInputData((prev) => (
                    {...prev, imgage:downloadURL
                    })
                
                );
                console.log("Input data: ", inputData);
            });

        }); 
    };
    
    userImage && uploadFile();
    }, [userImage]);


 /*    useEffect(() => {
        SetInputData(editObject);
        console.log("Input data in effect: ", inputData);
    }, [editObject]
    ) */
    const navigate = useNavigate();

    const handleInput = (e) => {
        const id = e.target.name;
        const val = e.target.value;
        SetInputData({...inputData, [id] : val});
        console.log(inputData);
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

      // Add a new document with a generated id.
      try{
            const res = await createUserWithEmailAndPassword(auth, inputData.Email, inputData.Password)
            // Add a new document in collection "users"
            await setDoc(doc(db, "users", res.user.uid), {...inputData,
                timeStamp: serverTimestamp(),
            });
            console.log("Document written with ID ");
            navigate(-1);
            
        }
      catch(err){
        console.log(err);
      }
      
        
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate(-1)
    }

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
                        <form onSubmit={handleSubmit}>
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
                            <div className="forminput" key={input.id}>   
                                <label>{input.lable}</label>
                                <input 
                                    name={input.id}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    //defaultValue={inputData[input.id]}
                                    onChange={handleInput}/>
                            </div> )
                            )}
                            <button disabled={percentage !== null && percentage < 100} type="submit">Submit</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </form>
                    </div>
                </div>            
            </div>
        </div>
    )
};

export default NewUser;