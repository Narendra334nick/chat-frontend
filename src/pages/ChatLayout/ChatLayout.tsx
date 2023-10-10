import React from "react";
import styles from "./chatLayout.module.css";
import GroupChat from "./components/groupCard";
import useAuthService from "../../hooks/useAuthService";
import { getGroups, getGroupsMessages } from "../../services/apiServices";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";
import socket from "../../socket";
import moment from "moment";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../components/modal/modal";

function ChatLayout(props: any) {
	const user = useAuthService().userDetails;
	const navigate = useNavigate();
	const [group, setGroups] = React.useState<any>([]);
	const [activeGroup, setActiveGroup] = React.useState<any>();
	const [message, setMessage] = React.useState<any>();
	const [groupMessage, setGroupsMessage] = React.useState<any>([]);
	const customSocket = React.useRef<Socket | undefined>();

	// states and functions for modal
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// console.log('activeGr',activeGroup);
	// console.log('grouMsg',groupMessage);

	const groupData = async () => {
		try {
			const data = await getGroups();
			if (data?.data?.length) {
				setGroups(data?.data);
				setActiveGroup(data?.data[0]);
			}
		} catch (error) {
			console.log("error in groupData", error);
		}
	};

	React.useEffect(() => {
		groupData();
		const token = user.accessToken;
		if (token) {
			customSocket.current = socket(token);
		}
		return () => {
			customSocket?.current?.off("connect");
			customSocket?.current?.off("send_message");
		};
	}, []);

	const logOut = async () => {
		localStorage.clear();
		navigate("/login");
	};

	const sendMessage = (groupId: number, message: string) => {
		customSocket?.current?.emit("send_message", {
			groupId: groupId,
			message: message,
		});
		setMessage("");
	};

	const getGroupsMessageData = async (id: any) => {
		try {
			const data = await getGroupsMessages(id);
			if (data?.data) {
				setGroupsMessage(data?.data);
			}
		} catch (error) {
			console.log("error in getGroupsMessageData", error);
		}
	};

	React.useEffect(() => {
		if (activeGroup?.id) {
			getGroupsMessageData(activeGroup?.id);
		}
	}, [activeGroup?.id]);

	React.useEffect(() => {
		if (customSocket?.current) {
			customSocket?.current?.off("connect");
			customSocket?.current.on("send_message_ack", (event: any) => {
				if (event?.length) {
					const concatenatedArray = [...groupMessage];
					console.log("ecents", event);
					event.forEach((ele: any) => {
						concatenatedArray.push(ele);
						// if(activeGroup?.id == ele?.groupId){

						// }
					});
					setGroupsMessage(concatenatedArray);
				}
			});
		}
	}, [customSocket.current]);


	return (
		<>
			<div className={styles["background-green"]}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: 8,
					}}
				>
					{user && user.role === "admin" ? <div style={{cursor:'pointer'}} onClick={()=>navigate('/admin')}>Admin</div> : <div></div>}

					<div style={{ cursor: "pointer" }} onClick={logOut}>
						Logout
					</div>
					{/* modal designs here */}
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
						<AddIcon onClick={handleOpen} style={{cursor:'pointer'}}/>
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
						{group &&
							group.map((item: any) => {
								return (
									<GroupChat
										name={item?.groupName}
										message={item?.message}
										onClick={() => setActiveGroup(item)}
										active={item.id === activeGroup.id}
									/>
								);
							})}
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
								<b>{activeGroup?.groupName}</b>
								<br />
								<span style={{ fontSize: 10 }}>
									{activeGroup
										? moment(activeGroup?.createdDate).format("lll")
										: null}
								</span>
								<br />
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
						{groupMessage && groupMessage?.length
							? groupMessage.map((item: any) => {
									return (
										<div
											className={`${styles["message-box"]} ${
												user.id === item.loginId
													? styles["my-message"]
													: styles["friend-message"]
											}`}
										>
											<p>
												{user.id != item.loginId ? (
													<div style={{ textAlign: "left" }}>
														<b>{item.firstName}</b>
													</div>
												) : null}
												{item.message}
												<br />
												<span>{moment(item.createdDate).format("lll")}</span>
											</p>
										</div>
									);
							  })
							: null}
					</div>

					{/* <!--input-bottom --> */}
					<div className={styles["chatbox-input"]}>
						{/* <i className="fa-regular fa-face-grin"></i>
						<i className="fa-sharp fa-solid fa-paperclip"></i> */}
						<input
							type="text"
							placeholder="Type a message"
							value={message}
							onChange={(e) => {
								setMessage(e.target.value);
							}}
						/>
						{/* <i className="fa-solid fa-microphone"></i> */}
						{message ? (
							<div
								onClick={() => sendMessage(activeGroup.id, message)}
								style={{
									marginRight: 40,
									cursor: "pointer",
									background: "blue",
									color: "white",
									padding: "8px 16px",
									borderRadius: "50%",
								}}
							>
								send
							</div>
						) : null}
					</div>
				</div>
				<Modal open={open} handleOpen={handleOpen} handleClose={handleClose} />
			</div>
		</>
	);
}

export default ChatLayout;
