import styles from "../chatLayout.module.css";

type groupChat = {
	name: string;
	message?: string;
  onClick?:any;
  active?:boolean
};
export default function GroupChat(props: groupChat) {
	const { name, message , onClick,active = false } = props;
	return (
		<div className={styles["chat-box"]} onClick={onClick} style={{...(active && {background: "#f5f5f5"})}}>
			<div className={styles["img-box"]}>
				<img
					className={styles["img-cover"]}
					src="https://lh5.googleusercontent.com/-7ssjf_mDE1Q/AAAAAAAAAAI/AAAAAAAAASo/tioYx2oklWEHoo5nAEyCT-KeLxYqE5PuQCLcDEAE/s100-c-k-no-mo/photo.jpg"
					alt=""
				/>
			</div>
			<div className={styles["chat-details"]}>
				<div className={styles["text-head"]}>
					<h4>{name}</h4>
					<p className={`${styles["time"]} ${styles["unread"]}`}>11:49</p>
				</div>
				<div className={styles["text-message"]}>
					<p>{message}</p>
					<b>1</b>
				</div>
			</div>
		</div>
	);
}
