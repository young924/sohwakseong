import React, { useCallback, useEffect, useState } from "react";
import Modal from "../../../../components/Modal";
import { ReactComponent as CheckSVG } from "../../../../assets/icon/checkCircle.svg";
import Picker from "emoji-picker-react";
import { useInput } from "../../../../hooks/useInput";
import * as S from "./style";

function MakeStarModal({ isOpen, setIsOpen }) {
  const [isEmojiPickerOn, setIsEmojiPickerOn] = useState(false);
  const [emoji, setEmoji] = useState(null);
  const [starName, handleStarName, setStarName] = useInput("");

  const onEmojiClick = (event, emojiObject) => {
    setEmoji(() => emojiObject.emoji);
    setIsEmojiPickerOn(false);
  };

  const handleButton = useCallback(() => {
    if (starName === "") {
      alert("별 이름을 적어주세요");
      return;
    }
    if (emoji === null) {
      alert("이모티콘을 선택해주세요");
      return;
    }

    // todo: api 요청

    setStarName("");
    setEmoji(null);
    setIsOpen(false);
  }, [starName, emoji]);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      styleInWhiteBox={{ backgroundColor: "#E6E7E8" }}
    >
      <S.Container>
        <h2>별 만들기</h2>
        <S.InputWrapper>
          <p>이모티콘</p>
          <S.EmojiInput onClick={() => setIsEmojiPickerOn(true)}>
            {emoji || "이모티콘을 선택해주세요"}
          </S.EmojiInput>
          {isEmojiPickerOn && (
            <Picker
              disableSearchBar
              disableSkinTonePicker
              onEmojiClick={onEmojiClick}
              pickerStyle={{ width: "100%" }}
            />
          )}
        </S.InputWrapper>
        <S.InputWrapper>
          <p>별 이름</p>
          <S.Input
            maxLength={12}
            placeholder="12자 이하"
            value={starName}
            onChange={handleStarName}
          />
        </S.InputWrapper>
        <CheckSVG onClick={handleButton} />
      </S.Container>
    </Modal>
  );
}

export default MakeStarModal;
