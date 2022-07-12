import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@mui/icons-material"
import {userRows} from "../../dummyData"
import {
    Link
  } from "react-router-dom";
import { useState } from "react";

function UserList() {

    const [data,setData] = useState(userRows);

    const handleDelete = (id)=> {
        setData(data.filter(item=> item.id !== id))
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200 ,renderCell:(params)=> {
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email ', width: 220 },
        {
          field: 'status',
          headerName: 'Status',
          width: 110,
        },  
        {
          field: 'transaction',
          headerName: 'Transaction volume',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
            field:"action",
            headerName:"Action",
            width:150,
            renderCell: (params)=>{
                return(
                    <>
                        <Link to={"/users/" + params.row.id}>
                        <button className="userListEdit">Edit</button>
                        </Link>
                       
                        <DeleteOutline className="userListDelete" onClick={()=> handleDelete(params.row.id)}/>
                    </> 
                )
            }
        }
      ];
      

      

  return (
    <div style={{  width: '100%' }}>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        checkboxSelection
      />
    </div>
  )
}

export default UserList