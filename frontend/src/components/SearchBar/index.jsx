import React, { useMemo } from "react";

import * as S from "./style";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";

function SearchBar({ handleEnter, placeholder, handleSearchButton, input, handleInput }) {
  return (
    <>
      <S.Container>
        <form onSubmit={handleEnter}>
        <S.InnerContainer>
          <SearchIcon onClick={handleSearchButton} />
          <S.Input
            placeholder={placeholder}
            value={input}
            onChange={handleInput}
          />
        </S.InnerContainer>
        </form>
      </S.Container>
    </>
  );
}

export default SearchBar;
