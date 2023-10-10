import React from "react";
import { getUsers } from "../../services/apiServices";

export default function Admin() {

  const [users,setUsers] = React.useState<any>([]);
	const getUsersData = async () => {
		try {
			const data = await getUsers();
      if(data?.data?.length){
        setUsers(data?.data);
      }
			console.log("data", data);
		} catch (error) {
      console.log('error in getUser',error);
    }
	};

	React.useEffect(() => {
		getUsersData();
	}, []);
	return (
    <div>
      Admin
      {
        users ? users.map((item:any) => {
          return(
            <div>
              Name : {item.firstName}
            </div>
          )
        }) : null
      }

    </div>
  );
}
