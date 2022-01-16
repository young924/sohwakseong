import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import PageLayout from "../../components/PageLayout";
import Header from "../../components/Header";
import * as S from "./style";
import MakeStarModal from "./components/MakeStarModal";
import CartStarModal from "./components/CartStarModal";
import SearchBar from "../../components/SearchBar";
import MarketItem from "./components/MarketItem";
import { useInput } from "../../hooks/useInput";
import Loading from "../../components/Loading";
import { starItemApi } from "../../api/StarItem";
import useToken from "../../hooks/useToken";

function Market() {
  const token = useToken();
  const { data: starItemData, isLoading: isStarLoading } = useQuery(
    ["starItemData", token],
    () => starItemApi.getStarItemList(token),
    { enabled: !!token }
  );

  const [isMakeStarModalOn, setIsMakeStarModalOn] = useState(false);
  const [isCartStarModalOn, setIsCartStarModalOn] = useState(false);
  const [searchInput, handleSearchInput] = useInput();
  const [starItems, setStarItems] = useState([]);

  const [itemIdForMadal, setItemIdForModal] = useState(0);
  const [emoticonForMadal, setEmoticonForModal] = useState("⭐️");
  const [itemNameForMadal, setItemNameForModal] = useState("별 이름");

  useEffect(() => {
    if (starItemData) {
      setStarItems(() => starItemData);
    }
  }, [starItemData]);

  if (isStarLoading) {
    return <Loading />;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get("/star-api/star-items/", {
        params: {
          filter: "search",
          word: searchInput,
        },
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setStarItems(() => res.data);
      })
      .catch((e) => {
        if (e.response.status === 400) {
          alert("검색어를 입력하세요");
        }
      });
  };

  const showStarItems = (() => {
    return starItems.map((item) => (
      <MarketItem
        key={item.id}
        emoticon={item.emoticon}
        starName={item.title}
        userCount={item.user_count}
        setIsCartStarModalOn={setIsCartStarModalOn}
        setItemIdForModal={setItemIdForModal}
        setEmoticonForModal={setEmoticonForModal}
        setItemNameForModal={setItemNameForModal}
      />
    ));
  })();

  return (
    <PageLayout>
      <MakeStarModal
        isOpen={isMakeStarModalOn}
        setIsOpen={setIsMakeStarModalOn}
      />
      <CartStarModal
        itemId={itemIdForMadal}
        itemName={itemNameForMadal}
        emoticon={emoticonForMadal}
        isOpen={isCartStarModalOn}
        setIsOpen={setIsCartStarModalOn}
      />
      <Header
        type="market"
        content="별마켓⭐️"
        handleButton={() => setIsMakeStarModalOn(true)}
      />
      <SearchBar
        placeholder={"별 검색하기"}
        input={searchInput}
        handleInput={handleSearchInput}
        handleSearch={handleSearch}
      />
      <S.StarItemsContainer>{showStarItems}</S.StarItemsContainer>
    </PageLayout>
  );
}

export default Market;
