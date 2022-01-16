import React, { useState } from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import PageLayout from "../../components/PageLayout";
import { useHistory } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import axios from "axios";
import { ReactComponent as Arrow } from "../../assets/icon/arrow.svg";
import * as S from "./style";
import prince1Img from "../../assets/image/prince1.png";
import prince2Img from "../../assets/image/prince2.png";
import prince3Img from "../../assets/image/prince3.png";
import prince4Img from "../../assets/image/prince4.png";

function FriendSearch() {
  const history = useHistory();
  const imageList = [prince1Img, prince2Img, prince3Img, prince4Img];
  const [users, setUsers] = useState([{ id: 0, nickname: "" }]);
  const [searchInput, handleSearchInput] = useInput("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput === "") {
      alert("닉네임을 입력하세요!");
      return;
    }
    axios
      .get(`/account-api/users/?word=${searchInput}`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickUser = (id) => {
    history.push(`/friendplanet/${id}/`);
  };

  return (
    <PageLayout>
      <Header type="friendSearch" content="💫행성 놀러가기" />
      <SearchBar
        placeholder={"닉네임 검색"}
        input={searchInput}
        handleInput={handleSearchInput}
        handleSearch={handleSearch}
      />
      <S.NoResult>
        {users.length === 0 && (
          <div className="no-result">닉네임이 존재하지 않습니다.</div>
        )}
      </S.NoResult>
      <S.UsersContainer>
        {users.length > 0 &&
          users[0].id !== 0 &&
          users.map((user) => {
            return (
              <div
                key={user.id}
                className="user-container"
                onClick={() => onClickUser(user.id)}
              >
                <S.UserContent className="user-content">
                  <img src={imageList[user.id % 4]} />
                  <div className="user-nickname">{user.nickname}</div>
                </S.UserContent>
                <Arrow />
              </div>
            );
          })}
      </S.UsersContainer>
    </PageLayout>
  );
}

export default FriendSearch;
