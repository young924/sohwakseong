import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import Header from "../../components/Header";
import * as S from "./style";
import MakeStarModal from "./components/MakeStarModal";

function Market() {
  const [isMakeStarModalOn, setIsMakeStarModalOn] = useState(false);
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
    </PageLayout>
  );
}

export default Market;
