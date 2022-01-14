import React, { useState, useEffect } from "react";
import * as S from "./style";

function BottomModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);
  return <S.Container isOpen={isOpen}></S.Container>;
}

export default BottomModal;
