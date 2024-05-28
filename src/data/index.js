import { faker } from "@faker-js/faker";// import {  } from "phosphor-react";
import {
  ChatCircleDots,  Gear,
  GearSix,
  Phone,
  Users,

  UserCircle,
  Sliders,
  ChatsCircle,
  Info ,


  ArrowBendUpLeft ,
  Smiley,
  ArrowBendUpRight,
  Star,
  Warning,
  Trash,
} from "phosphor-react";

const ProfileMenu = [
  {
    title: "Account",
    icon: <UserCircle />,
  },
  {
    title: "Settings & Privacy",
    icon: <Sliders />,
  },
  {
    title: "Chats",
    icon: <ChatsCircle />,
  },
  {
    title: "Help",
    icon: <Info  />,
  },
];

const NavButtons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const NavSetting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];


const MessageMenuItems = [
  {
    id: 0,
    icon: <ArrowBendUpLeft />,
    text: "Reply",
  },
  {
    id: 1,
    icon: <ArrowBendUpRight />,
    text: "Forward",
  },
  {
    id: 2,
    icon: <Smiley />,
    text: "React",
  },
  {
    id: 3,
    icon: <Star />,
    text: "Star",
  },
  {
    id: 4,
    icon: <Trash />,
    text: "Delete",
  },
  {
    id: 5,
    icon: <Warning />,
    text: "Report",
  },
];

const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: false,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: true,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const ChatHistory = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are you ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstract image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.city(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you please send this in file format? lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Can you please send this in file format? lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Sent file.png",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    title: "Cute Cats",
    link: "https://www.google.co.in",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a google www.google.com , click to visit google.. www.youtube.com",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "https://www.youtube.com",
    message: "This is a google www.google.com , click to visit google.. www.youtube.com",
    incoming: true,
    outgoing: false,
  },
];

const MessageOptions = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

export {
  ProfileMenu,
  NavSetting,
  NavButtons,
  MessageMenuItems,
  ChatList,
  ChatHistory,
  MessageOptions,
};
