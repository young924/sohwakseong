import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import Header from "../../components/Header";
import * as S from "./style";
import MakeStarModal from "./components/MakeStarModal";
import SearchBar from "../../components/SearchBar";
import MarketItem from "./components/MarketItem";
import { useInput } from "../../hooks/useInput";

function Market() {
  const [isMakeStarModalOn, setIsMakeStarModalOn] = useState(true);
  const [searchInput, handleSearchInput] = useInput();

  return (
    <PageLayout>
      <MakeStarModal
        isOpen={isMakeStarModalOn}
        setIsOpen={setIsMakeStarModalOn}
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
        handleButton
      />
      <MarketItem />
    </PageLayout>
  );
}

export default Market;
