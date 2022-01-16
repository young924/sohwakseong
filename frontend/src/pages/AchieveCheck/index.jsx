import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import * as S from "./style";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ReactComponent as UncompletdCheckSVG } from "../../assets/icon/uncompleted-check.svg";
import { ReactComponent as CompletdCheckSVG } from "../../assets/icon/completed-check.svg";

function AchieveCheck() {
  const history = useHistory();

  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).format("YYYY-MM-DD")
  );

  const [stars, setStars] = useState({
    uncompleted_stars: [],
    completed_stars: [],
  });

  useEffect(() => {
    getStarsOnSelectedDate(selectedDate);
  }, [selectedDate]);

  const getStarsOnSelectedDate = (date) => {
    axios
      .get(`/star-api/stars?filter=calendar&date=${date}`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setStars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeSelectedDate = (value) => {
    setSelectedDate(() => dayjs(value).format("YYYY-MM-DD"));
    if (!localStorage.getItem("token")) {
      alert("다시 로그인해주세요!");
      history.push("/login");
    }
  };

  const onClickCheck = (id) => {
    const data = {
      date: selectedDate,
      star_id: id,
    };
    axios
      .post(`/star-api/daily-achvs/`, data, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        getStarsOnSelectedDate(selectedDate);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PageLayout>
      <Header type="achieveCheck" content="성취 확인표" />
      <S.CalendarWrapper>
        <Calendar
          formatDay={(locale, date) => dayjs(date).format("D")}
          view="month"
          onChange={(value) => onChangeSelectedDate(value)}
        />
      </S.CalendarWrapper>
      <S.Background></S.Background>
      <S.StarsContainer>
        <div className="stars">
          {stars.uncompleted_stars.map((star) => {
            return (
              <div key={star.id} className="star uncompleted-star">
                <div className="star-content">
                  <div className="star-emoticon">{star.emoticon}</div>
                  <div className="star-title">{star.title}</div>
                  <div className="star-count">
                    남은 횟수 : {star.rest_count}
                  </div>
                </div>
                {star.is_achieved ? (
                  <CompletdCheckSVG
                    className="icon"
                    onClick={() => onClickCheck(star.id)}
                  />
                ) : (
                  <UncompletdCheckSVG
                    className="icon"
                    onClick={() => onClickCheck(star.id)}
                  />
                )}
              </div>
            );
          })}
          {stars.completed_stars.map((star) => {
            return (
              <div key={star.id} className="star completed-star">
                <div className="star-content">
                  <div className="star-emoticon">{star.emoticon}</div>
                  <div className="star-title">{star.title}</div>
                </div>
                <CompletdCheckSVG
                  className="icon"
                  onClick={() => onClickCheck(star.id)}
                />
              </div>
            );
          })}
        </div>
      </S.StarsContainer>
    </PageLayout>
  );
}

export default AchieveCheck;
