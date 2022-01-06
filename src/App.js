import React, { useState } from "react";
import "./style.scss";
import Moment from "react-moment";
import "moment-timezone";
import {
  ReplyIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
  VerifiedIcon,
} from "./icons";
import moment from "moment-timezone";

export default function App() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [isVerified, setIsVerified] = useState(true);
  const [tweet, setTweet] = useState();
  const [hash, setHash] = useState();
  const [avatar, setAvater] = useState();
  const [retweets, setRetweets] = useState(0);
  const [quoteTweets, setQuoteTweets] = useState(0);
  const [likes, setLikes] = useState(0);
  const [time, setTime] = useState(moment().format("HH:mm"));
  const [date, setDate] = useState(moment().format("DD MMM, YYYY"));


  return (
    <>
      <div className="tweet-settings">
        <h3>Dostosuj Tweeta</h3>
        <ul>
          <li>
            <input 
            type="text" 
            className="input" 
            placeholder='Jacek Sasin' 
            value={name}
            onChange={e => setName(e.target.value)}
            ></input>
          </li>
          <li>
            <input 
            type="text" 
            className="input" 
            placeholder='SasinJacek'
            value={username}
            onChange={e => setUsername(e.target.value)}
            ></input>
          </li>
          <li>
            <input 
            type="text" 
            className="input" 
            placeholder='Wpisz drogę Jaculi'
            value={tweet}
            onChange={e => setTweet(e.target.value)}
            ></input>
          </li>
          <li>
            <input 
            type="text" 
            className="input" 
            placeholder='#Turów'
            value={hash}
            onChange={e => setHash(e.target.value)}
            ></input>
          </li>
        </ul>
      </div>
      <div className="tweet-container">
        <div className="tweet">
          <div className="tweet-author">
            <img src="https://pbs.twimg.com/profile_images/1170441324635525122/_2PZVWm__400x400.jpg" />
            <div>
              <div className="name">
                {name || "Jacek Sasin"}
                {isVerified && <VerifiedIcon />}
              </div>
              <div className="username"> @{username || "SasinJacek"} </div>
            </div>
          </div>
          <div className="tweet-content">
            <p>
              {tweet || "Jestem w drodze do"}
              <span class="hash">{hash || "#Turów"}</span>. Mam dobre informacje
              <img
                alt="🇵🇱"
                draggable="false"
                src="https://abs-0.twimg.com/emoji/v2/svg/1f1f5-1f1f1.svg"
              />
              . Szczegóły o 12:00.
            </p>
          </div>
          <div className="tweet-date">
            {time} · {date} · Twitter for Android
          </div>
          <div className="tweet-stats">
            <span>
              <b>{retweets}</b> Retweets
            </span>
            <span>
              <b>{quoteTweets}</b> Quote Tweets
            </span>
            <span>
              <b>{likes}</b> Likes
            </span>
          </div>
          <div className="tweet-actions">
            <span>
              {" "}
              <ReplyIcon />{" "}
            </span>
            <span>
              {" "}
              <RetweetIcon />{" "}
            </span>
            <span>
              {" "}
              <LikeIcon />{" "}
            </span>
            <span>
              {" "}
              <ShareIcon />{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
