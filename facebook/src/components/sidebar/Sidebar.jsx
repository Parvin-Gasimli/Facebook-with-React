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
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
            <li className="sidebarfriend">
                
                <img className="sidebarFriendImg" src="" alt="" />
                <span className="sidebarFriendName">
                    Parvin Gasimli
                </span>
            </li>
        </ul>
    
      </div>
    </div>
  );
}
