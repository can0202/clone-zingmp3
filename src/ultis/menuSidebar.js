import icons from "./icons";
const {
  AiOutlineCompass,
  AiOutlineStock,
  AiOutlineTrademarkCircle,
  AiOutlineVideoCameraAdd,
  AiOutlineCustomerService,
  AiOutlineSketch,
} = icons;
export const sidebarMenu = [
  {
    path: "discover",
    title: "Khám phá",
    icon: <AiOutlineCompass />,
  },
  {
    path: "zing-chart",
    title: "#zingchart",
    icon: <AiOutlineStock />,
  },
  {
    path: "radio",
    title: "Radio",
    icon: <AiOutlineTrademarkCircle />,
  },
  {
    path: "mymusic",
    title: "Thư viện",
    icon: <AiOutlineVideoCameraAdd />,
  },
  {
    path: "moi-phat-hanh",
    title: "BXH Nhạc mới",
    icon: <AiOutlineCustomerService />,
  },
  {
    path: "top100",
    title: "Top 100",
    icon: <AiOutlineSketch />,
  },
];
