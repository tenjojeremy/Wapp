import styled from 'styled-components';
export const Wrapper = styled.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "luhka4-0"
})(["width:100%;display:grid;grid-auto-flow:row;grid-gap:10px;"]);
export const WeekDaysTitles = styled.div.withConfig({
  displayName: "styles__WeekDaysTitles",
  componentId: "luhka4-1"
})(["display:grid;grid-auto-flow:column;grid-auto-columns:1fr;span{font-family:var(--font-primary);font-style:normal;font-weight:bold;font-size:14px;text-align:center;}"]);
export const DatePickersCon = styled.div.withConfig({
  displayName: "styles__DatePickersCon",
  componentId: "luhka4-2"
})(["display:grid;justify-content:space-between;grid-auto-flow:column;"]);
export const DayGrid = styled.div.withConfig({
  displayName: "styles__DayGrid",
  componentId: "luhka4-3"
})(["display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(5,1fr);grid-gap:10px 1px;"]);