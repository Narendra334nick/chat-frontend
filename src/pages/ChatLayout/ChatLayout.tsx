import React from "react";
import styles from "./chatLayout.module.css";
import GroupChat from "./components/groupCard";
import useAuthService from "../../hooks/useAuthService";
import { getGroups } from "../../services/apiServices";
import { useNavigate } from "react-router-dom";

function ChatLayout(props: any) {
	const user = useAuthService().userDetails;
  const navigate = useNavigate();
  const [group,setGroups] = React.useState<any>([]);
  const [activeGroup,setActiveGroup] = React.useState<any>();

	const groupData = async () => {
		try {
			const data = await getGroups();
      if(data?.data?.length){
        setGroups(data?.data);
        setActiveGroup(data?.data[0]);
      }
		} catch (error) {
			console.log("error in groupData", error);
		}
	};

	React.useEffect(() => {
		groupData();
	}, []);

  const logOut = async () => {
    localStorage.clear();
    navigate('/login');
  }

	return (
		<>
			<div className={styles["background-green"]}>
				<div style={{ display: "flex", justifyContent: "space-between" ,padding:8}}>
					{user && user.role === "admin" ? <div>Admin</div> : <div></div>}

					<div style={{cursor:'pointer'}} onClick={logOut}>Logout</div>
				</div>
			</div>
			<div className={styles["main-container"]}>
				<div className={styles["left-container"]}>
					{/* <!--header --> */}
					<div className={styles["header"]}>
						<div className={styles["user-img"]}>
							<img
								className={styles["dp"]}
								src="https://www.codewithfaraz.com/InstaPic.png"
								alt=""
							/>
						</div>
						<div style={{ fontSize: 12, padding: 5 }}>{user?.firstName}</div>
					</div>

					{/* <!--search-container --> */}
					<div className={styles["search-container"]}>
						<div className={styles["input"]}>
							<i className="fa-solid fa-magnifying-glass"></i>
							<input type="text" placeholder="Search or start new chat   " />
						</div>
						<i className={styles["fa-sharp fa-solid fa-bars-filter"]}></i>
					</div>

					{/* <!--chats --> */}
					<div className={styles["chat-list"]}>
            {
              group && group.map((item:any)=>{
                return(
                  <GroupChat 
                    name={item?.groupName}
                    message={item?.message}
                    onClick={()=>setActiveGroup(item)}
                    active = {item.id === activeGroup.id}
                  />
                )
              })
            }
					</div>
				</div>

				<div className={styles["right-container"]}>
					{/* <!--header --> */}
					<div className={styles["header"]}>
						<div className={styles["img-text"]}>
							<div className={styles["user-img"]}>
								<img
									className={styles["dp"]}
									src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt=""
								/>
							</div>
							<h4>
								Leo
								<br />
								<span>Online</span>
							</h4>
						</div>
						<div className={styles["nav-icons"]}>
							<li>
								<i className="fa-solid fa-magnifying-glass"></i>
							</li>
							<li>
								<i className="fa-solid fa-ellipsis-vertical"></i>
							</li>
						</div>
					</div>

					{/* <!--chat-container --> */}
					<div className={styles["chat-container"]}>
						<div className={`${styles["message-box"]} ${styles["my-message"]}`}>
							<p>
								I've been waiting to see that show asap!
								<br />
								<span>07:43</span>
							</p>
						</div>
						<div
							className={`${styles["message-box"]} ${styles["friend-message"]}`}
						>
							<p>
								Ahh, I can't believe you do too!
								<br />
								<span>07:45</span>
							</p>
						</div>
						<div
							className={`${styles["message-box"]} ${styles["friend-message"]}`}
						>
							<p>
								The trailer looks good
								<br />
								<span>07:45</span>
							</p>
						</div>
						<div
							className={`${styles["message-box"]} ${styles["friend-message"]}`}
						>
							<p>
								I've been waiting to watch it!!
								<br />
								<span>07:45</span>
							</p>
						</div>
						<div className={`${styles["message-box"]} ${styles["my-message"]}`}>
							<p>
								😐😐😐
								<br />
								<span>07:46</span>
							</p>
						</div>
						<div className={`${styles["message-box"]} ${styles["my-message"]}`}>
							<p>
								Mee too! 😊
								<br />
								<span>07:46</span>
							</p>
						</div>
						<div className={`${styles["message-box"]} ${styles["my-message"]}`}>
							<p>
								We should video chat to discuss, if you're up for it!
								<br />
								<span>07:48</span>
							</p>
						</div>
						<div className={`${styles["message-box"]} ${styles["my-message"]}`}>
							<p>
								Sure
								<br />
								<span>07:48</span>
							</p>
						</div>
						<div className={`${styles["message-box"]} ${styles["my-message"]}`}>
							<p>
								I'm free now!
								<br />
								<span>07:48</span>
							</p>
						</div>
						<div
							className={`${styles["message-box"]} ${styles["friend-message"]}`}
						>
							<p>
								Awesome! I'll start a video chat with you in a few.
								<br />
								<span>07:49</span>
							</p>
						</div>
					</div>

					{/* <!--input-bottom --> */}
					<div className={styles["chatbox-input"]}>
						<i className="fa-regular fa-face-grin"></i>
						<i className="fa-sharp fa-solid fa-paperclip"></i>
						<input type="text" placeholder="Type a message" />
						<i className="fa-solid fa-microphone"></i>
					</div>
				</div>
			</div>
		</>
	);
}

export default ChatLayout;
