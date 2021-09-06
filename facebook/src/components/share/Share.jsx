import React from 'react'
import "./Share.css"
import {PermMedia,Label,Room,EmojiEmotions}from "@material-ui/icons";

export default function Share() {
    return (
        <div className="share">
            <div className="sharewrapper">
                <div className="sharetop">
                    <img className="shareprofileImg" src="assest/story3.jpg" alt="" />
                    <input placeholder="What is your mind Parvin" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="sharebottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="ShareOptionText">
                                Photo/Video
                            </span>
                        </div>
                        <div className="shareOption">
                            <Label  htmlColor="blue" className="shareIcon"/>
                            <span className="ShareOptionText">
                                Tag
                            </span>
                        </div>
                        <div className="shareOption">
                            <Room  htmlColor="green" className="shareIcon"/>
                            <span className="ShareOptionText">
                            Locations
                            </span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions  htmlColor="goldenrod" className="shareIcon"/>
                            <span className="ShareOptionText">
                                Feelings
                            </span>
                        </div>
                        <button className="Sharebutton">Share </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
