import React from "react";

import * as S from "./style"
import { ReactComponent as SearchIcon } from '../../assets/icon/search.svg'

function SearchBar({ placeholder }) {

  return (
  <>
    <S.Container>
      <S.InnerContainer>
        <SearchIcon />
        <S.Input placeholder={placeholder} />
      </S.InnerContainer>
    </S.Container>
  </>
  );
}

export default SearchBar;