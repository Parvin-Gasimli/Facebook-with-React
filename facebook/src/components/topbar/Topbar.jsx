import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarcontainer">
      <div className="topbarLeft">
        <span className="logo">Facebook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="search for friend ,Post and  videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbaricons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge"></span>
          
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">1</span>
          
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">2</span>
          
          </div>
        </div>
           <img src="" alt="" className="topbarImage" />
      </div>
    </div>
  );
}
