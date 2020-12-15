import * as React from "react";
import axios from "axios";
import "./Sandbox.css";

const { useEffect, useState } = React;

interface UserName {
  first: string;
  last: string;
  title: string;
}

interface UserPicture {
  thumbnail: string;
}

interface UserInfo {
  name: {};
  picture: UserPicture;
}

const fetchRandomData = async (pageNumber) => {
  return await axios
    .get(`https://randomuser.me/api?page=${pageNumber}`)
    .then(({ data }) => {
      // console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getFullUserName = (userInfo: UserInfo) => {
  const {
    name: { first, last },
  } = userInfo;
  return `${first} ${last}`;
};

export default function Sandbox() {
  const [counter, setCounter] = useState(0);
  const [nextPageNumber, setNextPageNumber] = useState(1);
  const [userInfos, setUserInfos] = useState([]);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");

  const fetchNextUser = async () => {
    async function fetchRandomUserData() {
      const randomData = await fetchRandomData();
      await setRandomUserDataJSON(
        JSON.stringify(randomData, null, 2) || "No user data found"
      );
      if (randomData === undefined) return;
      const newUserInfos = [...userInfos, ...randomData.results];
      setUserInfos(newUserInfos);
      setNextPageNumber(nextPageNumber + 1);
    }
    await fetchRandomUserData();
  };

  // on page load
  useEffect(() => {
    fetchNextUser();
  }, []);

  return (
    <div className="container">
      <h1>In Sandbox</h1>
      <h2>The basics</h2>
      <div>
        {/*  */}
        <h4>Basic Counter</h4>
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increase Counter
        </button>
        {/*  */}
        <h4>Basic API</h4>
        <button
          onClick={() => {
            fetchNextUser();
          }}
        >
          Fetch Next Random User
        </button>
        {userInfos.map((userInfo, idx) => (
          <>
            <p>{getFullUserName(userInfo)}</p>
            <img src={userInfo.picture.thumbnail} />
          </>
        ))}
        {/* <pre>{randomUserDataJSON}</pre> */}
        {/*https://randomuser.me/api */}
      </div>
    </div>
  );
}
