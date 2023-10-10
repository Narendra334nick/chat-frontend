import React from "react";
import { getUsers } from "../../services/apiServices";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../components/modal/modal";
import EditIcon from "@mui/icons-material/Edit";
import UserComponent from "./components/User";

export default function Admin() {
	const [users, setUsers] = React.useState<any>([]);

  const [userEdit,setEditUser] = React.useState<any>();

	// states and functions for modal
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () =>{
    setOpen(false);
    setEditUser(undefined);
  };

	const getUsersData = async () => {
		try {
			const data = await getUsers();
			if (data?.data?.length) {
				setUsers(data?.data);
			}
		} catch (error) {
			console.log("error in getUser", error);
		}
	};

	React.useEffect(() => {
		getUsersData();
	}, []);
	return (
		<div>
			<h2>Admin</h2>
			<AddIcon onClick={handleOpen} style={{ cursor: "pointer" }} />
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{users
					? users.map((item: any) => {
							return (
								<div
									style={{ border: "1px solid white", margin: 8, padding: 8 }}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
										}}
									>
										<span>First Name : {item.firstName}</span> <EditIcon  style={{cursor:"pointer"}} onClick={()=>{setEditUser(item);handleOpen();}}/>
									</div>
									<div>Last Name : {item.lastName}</div>
									<div>Email : {item.email}</div>
									{/* <div>Password : {item.password}</div> */}
								</div>
							);
					  })
					: null}
			</div>
			<Modal open={open} handleOpen={handleOpen} handleClose={handleClose}>
        <UserComponent handleClose={handleClose} userEdit={userEdit}/>
      </Modal>  
		</div>
	);
}
