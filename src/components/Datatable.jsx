import "../styles/Datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "./Sourcedata";
import { useState } from 'react';
import { Link } from "react-router-dom";

const DataTable = () => {

    const [data, setData] = useState(userRows);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'User Name', width: 330,

            renderCell: (params) => {
                return(
                    <div className="username">
                          <img src={params.row.img} alt="" className="userimage"/>
                          {params.row.username}  
                    </div>
                )

            },
        },

        { field: 'email', headerName: 'Email', width: 170 },
        {
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
        },
        { field: 'action', headerName: 'Action', width: 300,
        
        renderCell : (params) => {
            return (
                <div className="action"> 
                    <div className="view">
                        View
                    </div>
                    <div className="edit">
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
      
      const DeleteEvent = (id) =>{
        return(
            setData(
                data.filter( (item) => item.id !== id)
            
            )
        )
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