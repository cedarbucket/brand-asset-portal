"use client";
import styled from "styled-components";
import {
  Box,
  HoverBox,
  BoxProps,
  Row,
  Text,
  ShadowBox,
  CenterBox,
} from "@/components";
import { useField, useFormikContext } from "formik";
import { BASE_COLORS } from "@/theme";
import { useState } from "react";
import { getLighterColor } from "@/utils/getLighterColor";

type DateRangePickerProps = BoxProps & {
  name: string;
  label?: string;
  labelColor?: keyof typeof BASE_COLORS;
  width?: string;
  height?: string;
};

type DateRange = {
  startDate: string | null;
  endDate: string | null;
};

const Header = styled(Box)`
  padding: 16px;
  border-bottom: 1px solid #eaeaea;
  gap: 10px;
`;

const MonthNavigation = styled(Row)`
  justify-content: space-between;
  align-items: center;
`;

const NavButton = styled(CenterBox)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: ${BASE_COLORS.primary};
`;

const MonthYear = styled.span`
  font-weight: bold;
  color: ${BASE_COLORS.foreground};
`;

const DaysGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 16px;
`;

interface DayCellProps extends BoxProps {
  isSelected?: boolean;
  isInRange?: boolean;
}

const DayCell = styled(HoverBox)<DayCellProps>`
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.16);
  aspect-ratio: 1;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected
      ? BASE_COLORS.primary
      : props.isInRange
      ? getLighterColor(BASE_COLORS.primary)
      : "transparent"};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  name,
  label,
  labelColor,
  width,
}) => {
  const [field, meta] = useField<DateRange>(name);
  const { setFieldValue } = useFormikContext();

  const [currentDate, setCurrentDate] = useState<Date>(
    new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), 1))
  );

  const { startDate, endDate } = field.value || {
    startDate: null,
    endDate: null,
  };

  // Helper function to compare dates ignoring time
  const isSameDay = (date1: string, date2: string): boolean => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return (
      d1.getUTCFullYear() === d2.getUTCFullYear() &&
      d1.getUTCMonth() === d2.getUTCMonth() &&
      d1.getUTCDate() === d2.getUTCDate()
    );
  };

  // Helper function to check if a date is between two dates, ignoring time
  const isDateBetween = (date: string, start: string, end: string): boolean => {
    const d = new Date(date);
    const s = new Date(start);
    const e = new Date(end);
    return d >= s && d <= e;
  };

  const daysInMonth = new Date(
    Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth() + 1, 0)
  ).getUTCDate();

  const firstDayOfMonth = new Date(
    Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), 1)
  ).getUTCDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => null);

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(
      Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), day)
    ).toISOString();
    let newStartDate = startDate;
    let newEndDate = endDate;

    if (!startDate || (startDate && endDate)) {
      newStartDate = clickedDate;
      newEndDate = null;
    } else if (new Date(clickedDate) > new Date(startDate)) {
      newEndDate = clickedDate;
    } else {
      newEndDate = startDate;
      newStartDate = clickedDate;
    }

    setFieldValue(name, { startDate: newStartDate, endDate: newEndDate });
  };

  const isInRange = (day: number): boolean => {
    if (!startDate || !endDate) return false;
    const date = new Date(
      Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), day)
    ).toISOString();
    return isDateBetween(date, startDate, endDate);
  };

  const isSelected = (day: number): boolean => {
    if (!startDate) return false;
    const date = new Date(
      Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), day)
    ).toISOString();
    return (
      isSameDay(date, startDate) || (!!endDate && isSameDay(date, endDate))
    );
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate(
      new Date(
        Date.UTC(
          currentDate.getUTCFullYear(),
          currentDate.getUTCMonth() + direction,
          1
        )
      )
    );
  };

  return (
    <Box width={width ? width : "300px"} height={"fit-content"} gap={"m"}>
      {label ? (
        <Box px={"l"} width={"100%"}>
          <Text fontSize={18} color={labelColor ? labelColor : "foreground"}>
            {label}
          </Text>
        </Box>
      ) : null}
      <ShadowBox
        borderRadius={"m"}
        width={"100%"}
        height={"fit-content"}
        backgroundColor={"white"}
      >
        <Header>
          <MonthNavigation>
            <NavButton onClick={() => navigateMonth(-1)}>
              <Text fontSize={22}>{`<`}</Text>
            </NavButton>
            <MonthYear>
              {currentDate.toLocaleString("en-US", {
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              })}
            </MonthYear>
            <NavButton onClick={() => navigateMonth(1)}>
              <Text fontSize={22}>{`>`}</Text>
            </NavButton>
          </MonthNavigation>
        </Header>
        <DaysGrid>
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <DayCell key={day}>{day}</DayCell>
          ))}
          {emptyDays.map((_, index) => (
            <Box key={`empty-${index}`} />
          ))}
          {days.map((day) => (
            <DayCell
              key={day}
              onClick={() => handleDateClick(day)}
              isSelected={isSelected(day)}
              isInRange={isInRange(day)}
            >
              {day}
            </DayCell>
          ))}
        </DaysGrid>
        {meta.touched && meta.error && <Box color="error">{meta.error}</Box>}
      </ShadowBox>
    </Box>
  );
};

export default DateRangePicker;
