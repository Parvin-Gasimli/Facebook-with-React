import React from "react";
import "./rightbar.css"

export default function rightbar() {
  return (
    <div className="Rightbar">
      <div className="rightbarwrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assest/gift.png" alt="" />
          <span className="birthdaytext">
            <b>Matin Guliyeff </b>and <b>  3 other friends </b> have a birthday today
          </span>
        </div>
        <img className="RightbarAd" src="assest/ad.jpeg" alt="" />
        <h4 className="rightbarTitle">
            Online Friends
        </h4>
        <ul className="rightbarfriendlist">
            <li className="righbarfriend">
                <div className="rightbarprofileImgContainer">
                    <img src="assest/stroy5.jpg" className="righbarProfileImg" alt="" />
                    <span className="rightbarOnline">

                    </span>
                </div>
                <span className="rightbarusername">John Carter</span>
            </li>
            <li className="righbarfriend">
                <div className="rightbarprofileImgContainer">
                    <img src="assest/story1.jpg" className="righbarProfileImg" alt="" />
                    <span className="rightbarOnline">

                    </span>
                </div>
                <span className="rightbarusername">John Carter</span>
            </li>
            <li className="righbarfriend">
                <div className="rightbarprofileImgContainer">
                    <img src="assest/story2.jfif" className="righbarProfileImg" alt="" />
                    <span className="rightbarOnline">

                    </span>
                </div>
                <span className="rightbarusername">John Carter</span>
            </li>
            <li className="righbarfriend">
                <div className="rightbarprofileImgContainer">
                    <img src="assest/story3.jpg" className="righbarProfileImg" alt="" />
                    <span className="rightbarOnline">

                    </span>
                </div>
                <span className="rightbarusername">John Carter</span>
            </li>
            <li className="righbarfriend">
                <div className="rightbarprofileImgContainer">
                    <img src="assest/story4.png" className="righbarProfileImg" alt="" />
                    <span className="rightbarOnline">

                    </span>
                </div>
                <span className="rightbarusername">John Carter</span>
            </li>
            <li className="righbarfriend">
                <div className="rightbarprofileImgContainer">
                    <img src="assest/stroy5.jpg" className="righbarProfileImg" alt="" />
                    <span className="rightbarOnline">

                    </span>
                </div>
                <span className="rightbarusername">John Carter</span>
            </li>
            <li className="righbarfriend">
                <div className="rightbarprofileImgContainer">
                    <img src="assest/stroy5.jpg" className="righbarProfileImg" alt="" />
                    <span className="rightbarOnline">

                    </span>
                </div>
                <span className="rightbarusername">John Carter</span>
            </li>
            <li className="righbarfriend">
                <div className="rightbarprofileImgContainer">
                    <img src="assest/user.jpg" className="righbarProfileImg" alt="" />
                    <span className="rightbarOnline">

                    </span>
                </div>
                <span className="rightbarusername">John Carter</span>
            </li>
        </ul>
      </div>
    </div>
  );
}
