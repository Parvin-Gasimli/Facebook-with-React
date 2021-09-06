import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { users } from "../../dummyData";

export default function Post({Post}) {
    const user=users.filter(u=>u.id===1);
    console.log(user)
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
                          {Post.date}
                        </span>
                    </div>
                    <div className="postRight">
                        <MoreVert/>

                    </div>

                </div>
                <div className="postCenter">
                    <span className="postText">
                        {Post?.desc}
                    </span>
                    <img className="PostImg" src="assest/story2.jfif" alt="" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assest/fb.png" alt="" />
                        <img src="assest/images.png" alt="" />
                        <span className="PostLikeCounter">{Post.like} People Like it</span>
                    </div>
                    <div className="postBottomRight"></div>
                    <span className="PostCommentText"> {Post.comment}Comment

                    </span>
                </div>
            </div>
            
        </div>
    )
}
