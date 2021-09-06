import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  Videocam,
  Group,
  Bookmark,
  HelpOutline,
  Work,
  Event,
  School,
  
} from "@material-ui/icons";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarList">
          <li className="sidebaritem">
            <RssFeed class="sidebarIcon" />
            <span className="sidebaritemText">Feed</span>
          </li>
          <li className="sidebaritem">
            <Chat class="sidebarIcon" />
            <span className="sidebaritemText">Chats</span>
          </li>
          <li className="sidebaritem">
            <Videocam class="sidebarIcon" />
            <span className="sidebaritemText">Videos</span>
          </li>
          <li className="sidebaritem">
            <Group class="sidebarIcon" />
            <span className="sidebaritemText">Groups</span>
          </li>
          <li className="sidebaritem">
            <Bookmark class="sidebarIcon" />
            <span className="sidebaritemText">Bookmarks</span>
          </li>
          <li className="sidebaritem">
            <HelpOutline class="sidebarIcon" />
            <span className="sidebaritemText">Questions</span>
          </li>
          <li className="sidebaritem">
            <Work class="sidebarIcon" />
            <span className="sidebaritemText">Jops</span>
          </li>
          <li className="sidebaritem">
            <Event class="sidebarIcon" />
            <span className="sidebaritemText">Events</span>
          </li>
          <li className="sidebaritem">
            <School class="sidebarIcon" />
            <span className="sidebaritemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">
            Show More..

        </button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendlist">
            <li className="sidebarfriend">
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                    Mark Dahilu
                </span>
            </li>
            <li className="sidebarfriend">
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                    Jhon Thime
                </span>
            </li>
            <li className="sidebarfriend">
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                    Smal Mike
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                    Tomas Ruby
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                    Jack Blone
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                    Range Mike
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                    Stimmer Cale
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                    Razyen Daven
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                    David Blonde
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                    Michel Juli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                Michel Juli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                Michel Juli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                Michel Juli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                Michel Juli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                Michel Juli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="assest/user.jpg" alt="" />
                <span className="sidebarFriendName">
                Michel Juli
                </span>
            </li>
        </ul>
    
      </div>
    </div>
  );
}
