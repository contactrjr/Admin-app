import "../styles/Datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "./Sourcedata";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

const DataTable = () => {

    //const [data, setData] = useState(userRows);
    const [data, setData] = useState([]);
    const [editData, setEditData] = useState([]);

    useEffect( () => {
        const getData = async() =>{
            let list = []
            try{
                const querySnapshot = await getDocs(collection(db, "users"));
                querySnapshot.forEach((doc) => {
                    list.push({id:doc.id, ...doc.data()})
                });
            }
            catch(err){
                console.log(err);
            }
            
            setData(list);
            console.log(list)
        };
    
    getData()
    }, []
    )
    //{params.row.image}
    const [imgPath, setImgPath] = useState('');

    const navigate = useNavigate();

    const columns = [
       // { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Title', headerName: 'Title', width: 70 },
        { field: 'LastName', headerName: 'Last Name', width: 170 },
        { field: 'user', headerName: 'User Name', width: 330,

            renderCell: (params) => {
                //console.log("Image : ", {params})
                setImgPath(params.row.image)
                //console.log("Image Path : ", imgPath)
                return(
                    
                    <div className="username">
                          <img src={params.row.imgage} alt="" className="userimage"/>
                          {params.row.FirstName}  
                    </div>
                )

            },
        },

        { field: 'Email', headerName: 'Email', width: 170 },
        { field: 'Postcode', headerName: 'Post Code', width: 170 },
       /* {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        { field: 'status', headerName: 'Status', width: 100,
        
        renderCell : (params) => {
            return (
                <div className="statuscell"> 
                    <div className={`status ${params.row.status}`}>
                        {params.row.status}
                    </div>
                </div>
            );
        },
        },*/
        { field: 'action', headerName: 'Action', width: 300,
        
        renderCell : (params) => {
            return (
                <div className="action"> 
                    <div className="view">
                        View
                    </div>
                    <div className="edit" onClick={()=>UpdateEvent(params.row.id)}>
                        Edit
                    </div>
                    <div className="delete" onClick={() => DeleteEvent(params.row.id)}>
                        Delete
                    </div>
                    
                </div>
            );
        },
        },
      ];
      
      const UpdateEvent = (id) =>{

        let temp = data.filter( (item) => item.id === id);
        console.log("temp", temp)

        navigate("/users/newuser", {state: {editObject:temp,}})            
      }

      const DeleteEvent = async(id) =>{
        //return(
            try{
                await deleteDoc(doc(db, "users", id));
            }
            catch(err){
                console.log(err)
            }
            
            setData(data.filter( (item) => item.id !== id)
            )
      //  )
    }


    return(
        <div className="data">
            <div className="title">
                User Details
                <Link to = "/users/newuser" style={{textDecoration :"none"}} >
                <div className="adduser">
                    Add User
                </div>
                </Link>
            </div>
            <div className="table" style={{ height: 400, width: '100%' }}>
                <DataGrid
                className="datatable"
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                />
            </div>
        </div>
    )
};

export default DataTable;