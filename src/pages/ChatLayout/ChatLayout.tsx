import React from "react";
import styles from "./chatLayout.module.css";

function ChatLayout() {
  return (
    <>
      <div className={styles["background-green"]}></div>

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
            <div className={styles["nav-icons"]}>
              <li>
                <i className="fa-solid fa-users"></i>
              </li>
              <li>
                <i className="fa-solid fa-message"></i>
              </li>
              <li>
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </li>
            </div>
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
            <div className={styles["chat-box"]}>
              <div className={styles["img-box"]}>
                <img
                  className={styles["img-cover"]}
                  src="https://lh5.googleusercontent.com/-7ssjf_mDE1Q/AAAAAAAAAAI/AAAAAAAAASo/tioYx2oklWEHoo5nAEyCT-KeLxYqE5PuQCLcDEAE/s100-c-k-no-mo/photo.jpg"
                  alt=""
                />
              </div>
              <div className={styles["chat-details"]}>
                <div className={styles["text-head"]}>
                  <h4>Nowfal</h4>
                  <p className={`${styles["time"]} ${styles["unread"]}`}>
                    11:49
                  </p>
                </div>
                <div className={styles["text-message"]}>
                  <p>“How are you?”</p>
                  <b>1</b>
                </div>
              </div>
            </div>
            <div className={styles["chat-box"]}>
              <div className={styles["img-box"]}>
                <img
                  className={styles["img-cover"]}
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className={styles["chat-details"]}>
                <div className={styles["text-head"]}>
                  <h4>Rohan</h4>
                  <p className={`${styles["time"]} ${styles["unread"]}`}>
                    10:49
                  </p>
                </div>
                <div className={styles["text-message"]}>
                  <p>“I’ll be there.”</p>
                  <b>4</b>
                </div>
              </div>
            </div>
            <div className={styles["chat-box"]}>
              <div className={styles["img-box"]}>
                <img
                  className={styles["img-cover"]}
                  src="https://images.pexels.com/photos/8367221/pexels-photo-8367221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className={styles["chat-details"]}>
                <div className={styles["text-head"]}>
                  <h4>Zoya</h4>
                  <p className={`${styles["time"]} ${styles["unread"]}`}>
                    09:49
                  </p>
                </div>
                <div className={styles["text-message"]}>
                  <p>“Make somebody’s day.”</p>
                  <b>2</b>
                </div>
              </div>
            </div>
            <div className={styles["chat-box"]}>
              <div className={styles["img-box"]}>
                <img
                  className={styles["img-cover"]}
                  src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className={styles["chat-details"]}>
                <div className={styles["text-head"]}>
                  <h4>Ava</h4>
                  <p className={styles["time"]}>08:49</p>
                </div>
                <div className={styles["text-message"]}>
                  <p>“Dreams come true.”</p>
                </div>
              </div>
            </div>
            <div className={`${styles["chat-box"]} ${styles["active"]}`}>
              <div className={styles["img-box"]}>
                <img
                  className={styles["img-cover"]}
                  src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className={styles["chat-details"]}>
                <div className={styles["text-head"]}>
                  <h4>Leo</h4>
                  <p className={styles["time"]}>07:49</p>
                </div>
                <div className={styles["text-message"]}>
                  <p>Awesome! I'll start a vid..</p>
                </div>
              </div>
            </div>
            <div className={styles["chat-box"]}>
              <div className={styles["img-box"]}>
                <img
                  className={styles["img-cover"]}
                  src="https://images.pexels.com/photos/3564412/pexels-photo-3564412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className={styles["chat-details"]}>
                <div className={styles["text-head"]}>
                  <h4>Azariah</h4>
                  <p className={styles["time"]}>06:49</p>
                </div>
                <div className={styles["text-message"]}>
                  <p>“Love, light, laughter.”</p>
                </div>
              </div>
            </div>
            <div className={styles["chat-box"]}>
              <div className={styles["img-box"]}>
                <img
                  className={styles["img-cover"]}
                  src="https://images.pexels.com/photos/2919367/pexels-photo-2919367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className={styles["chat-details"]}>
                <div className={styles["text-head"]}>
                  <h4>Oliver</h4>
                  <p className={`${styles["time"]} ${styles["unread"]}`}>
                    Yesterday
                  </p>
                </div>
                <div className={styles["text-message"]}>
                  <p>“Appreciate the mome..”</p>
                  <b>2</b>
                </div>
              </div>
            </div>
            <div className={styles["chat-box"]}>
              <div className={styles["img-box"]}>
                <img
                  className={styles["img-cover"]}
                  src="https://images.pexels.com/photos/14526673/pexels-photo-14526673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className={styles["chat-details"]}>
                <div className={styles["text-head"]}>
                  <h4>Jeslin</h4>
                  <p className={styles["time"]}>Yesterday</p>
                </div>
                <div className={styles["text-message"]}>
                  <p>“Now or never.”</p>
                </div>
              </div>
            </div>
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
