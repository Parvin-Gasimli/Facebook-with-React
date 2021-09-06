import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post() {
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfleImg" src="assest/user.jpg" alt="" />
                        <span className="PostUsername">
                            Parvin Gasimli
                        </span>
                        <span className="postDate">
                            5 min ago
                        </span>
                    </div>
                    <div className="postRight">
                        <MoreVert/>

                    </div>

                </div>
                <div className="postCenter">
                    <span className="postText">
                        Hi Guys,Its my Firs Post
                    </span>
                    <img className="PostImg" src="assest/story2.jfif" alt="" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assest/fb.png" alt="" />
                        <img src="assest/images.png" alt="" />
                        <span className="PostLikeCounter">32 People Like it</span>
                    </div>
                    <div className="postBottomRight"></div>
                    <span className="PostCommentText"> 10 Comment

                    </span>
                </div>
            </div>
            
        </div>
    )
}
