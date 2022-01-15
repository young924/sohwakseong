import React, { useMemo } from "react";

import * as S from "./style";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";

function SearchBar({ placeholder, handleSearchButton, input, handleInput }) {
  return (
    <>
      <S.Container>
        <S.InnerContainer>
          <SearchIcon onClick={handleSearchButton} />
          <S.Input
            placeholder={placeholder}
            value={input}
            onChange={handleInput}
          />
        </S.InnerContainer>
      </S.Container>
    </>
  );
}

export default SearchBar;
