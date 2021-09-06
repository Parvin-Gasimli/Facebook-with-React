import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./home.css";

export default function home() {
     
        return (
            <>
          <Topbar/>
          <div className="homeConatiner">
          <Sidebar/>
          <Feed/>
          <Rightbar/>
          </div>
        
          </>

        )
    
}
