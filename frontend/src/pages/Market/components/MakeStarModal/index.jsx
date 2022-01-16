import React, { useCallback, useState } from "react";
import Modal from "../../../../components/Modal";
import { ReactComponent as CheckSVG } from "../../../../assets/icon/checkCircle.svg";
import Picker from "emoji-picker-react";
import { useInput } from "../../../../hooks/useInput";
import * as S from "./style";
import { useMutation } from "react-query";
import { starItemApi } from "../../../../api/StarItem";
import useToken from "../../../../hooks/useToken";

function MakeStarModal({ isOpen, setIsOpen, refetch }) {
  const [isEmojiPickerOn, setIsEmojiPickerOn] = useState(false);
  const [emoji, setEmoji] = useState(null);
  const [starName, handleStarName, setStarName] = useInput("");
  const token = useToken();

  const { mutateAsync: createStarItem } = useMutation(
    () => starItemApi.createStarItem(starName, emoji, token),
    {
      onSuccess: () => {
        refetch();
        setStarName("");
        setEmoji(null);
        setIsOpen(false);
      },
    }
  );

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
    createStarItem();

    // todo: api 요청
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
            placeholder="공백 포함 12자 이하"
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
