import "./feed.css"
import Share from "../share/Share";
import Post from "../post/Post";
import {Posts} from "../../dummyData"

export default function feed() {
    return (
        <div className="feed">
            <div className="feedwrapper">
                <Share/>
                {Posts.map((p)=>(
                     <Post Post={p.id} post={p}/>

                 )) }

               
               
             

            </div>
        </div>
    );
}
