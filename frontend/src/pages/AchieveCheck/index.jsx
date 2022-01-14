import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import * as S from "./style";

function AchieveCheck() {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).format("YYYY-MM-DD")
  );
  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);
  return (
    <PageLayout>
      <Header type="achieveCheck" content="성취 확인표" />
      <S.CalendarWrapper>
        <Calendar
          formatDay={(locale, date) => dayjs(date).format("D")}
          view="month"
          onChange={(value) =>
            setSelectedDate(() => dayjs(value).format("YYYY-MM-DD"))
          }
        />
      </S.CalendarWrapper>
    </PageLayout>
  );
}

export default AchieveCheck;
