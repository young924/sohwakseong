import React, { useMemo } from "react";

import * as S from "./style";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";

function SearchBar({ handleSearch, placeholder, input, handleInput }) {
  return (
    <>
      <S.Container>
        <form onSubmit={handleSearch}>
        <S.InnerContainer>
          <SearchIcon onClick={handleSearch} />
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
