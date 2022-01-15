import React, { useMemo } from "react";

import * as S from "./style"
import { ReactComponent as SearchIcon } from '../../assets/icon/search.svg'

function SearchBar({ placeholder }) {
  const containerStyle = useMemo(() => ({
    
    height: "8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }));

  const inputStyle = useMemo(() => ({
    marginLeft: "1.2rem",
    color: "#F2EAA9",
    fontSize: "1.8rem",
    background: "transparent",
    border: "none",
    width: "32rem",
    outline: "none",
  }))

  return (
  <>
    <div style={containerStyle}>
      <S.InnerContainer>
        <SearchIcon />
        <input style={inputStyle} placeholder={placeholder}/>
      </S.InnerContainer>
    </div>
  </>
  );
}

export default SearchBar;