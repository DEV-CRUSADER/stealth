import { faker } from "@faker-js/faker";// import {  } from "phosphor-react";
import {
  ChatCircleDots,
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

  Bell,
  Lock,
  Key,
  PencilCircle,
  Image,
  Keyboard,
  Note,
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

const SettingsOptions = [
  {
    id: 0,
    icon: <Bell size={21}/>,
    text: "Notificatios",
    action: "NOTIFICATION_SETTINGS"
  },
  {
    id: 1,
    icon: <Lock size={21}/>,
    text: "Privacy",
    action: "PRIVACY_SETTINGS"
  },
  {
    id: 2,
    icon: <Key size={21}/>,
    text: "Security",
    action: "SECURITY_SETTINGS"
  },
  {
    id: 3,
    icon: <PencilCircle size={21}/>,
    text: "Theme",
    action: "THEME_SETTINGS"
  },
  {
    id: 4,
    icon: <Image size={21}/>,
    text: "Chat wallpaper",
    action: "CHAT_WALLPAPER_SETTINGS"
  },
  {
    id: 5,
    icon: <Note size={21}/>,
    text: "Request account info",
    action: "REQUEST_ACCOUNT_INFO_SETTINGS"
  },
  {
    id: 6,
    icon: <Keyboard size={21}/>,
    text: "Keyboard shortcuts",
    action: "KEYBOARD_SHORTCUT_SETTINGS"
  },
  {
    id: 7,
    icon: <Info size={21}/>,
    text: "Help", 
    action: "HELP_SETTINGS"
  }
]


const ShortcutsList = [
  {
    key: 0,
    title: "Mark as unread",
    combination: ["Ctrl", "Shift", "U"],
  },
  {
    key: 1,
    title: "Mute",
    combination: ["Ctrl", "Shift", "M"],
  },
  {
    key: 2,
    title: "Archive Chat",
    combination: ["Ctrl", "Shift", "E"],
  },
  {
    key: 3,
    title: "Delete Chat",
    combination: ["Ctrl", "Shift", "D"],
  },
  {
    key: 4,
    title: "Pin Chat",
    combination: ["Ctrl", "Shift", "P"],
  },
  {
    key: 5,
    title: "Search",
    combination: ["Ctrl", "F"],
  },
  {
    key: 6,
    title: "Search Chat",
    combination: ["Ctrl", "Shift", "F"],
  },
  {
    key: 7,
    title: "Next Chat",
    combination: ["Ctrl", "N"],
  },
  {
    key: 8,
    title: "Next Step",
    combination: ["Ctrl", "Tab"],
  },
  {
    key: 9,
    title: "Previous Step",
    combination: ["Ctrl", "Shift", "Tab"],
  },
  {
    key: 10,
    title: "New Group",
    combination: ["Ctrl", "Shift", "N"],
  },
  {
    key: 11,
    title: "Profile & About",
    combination: ["Ctrl", "P"],
  },
  {
    key: 12,
    title: "Increase speed of voice message",
    combination: ["Shift", "."],
  },
  {
    key: 13,
    title: "Decrease speed of voice message",
    combination: ["Shift", ","],
  },
  {
    key: 14,
    title: "Settings",
    combination: ["Shift", "S"],
  },
  {
    key: 15,
    title: "Emoji Panel",
    combination: ["Ctrl", "E"],
  },
  {
    key: 16,
    title: "Sticker Panel",
    combination: ["Ctrl", "Shift", "S"],
  },
];


// Template Data Only for development

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
    starred: true,
  },
  {
    type: "divider",
    text: "26 Oct, 2024",
    starred: true,
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
    starred: false,
  },
  {
    type: "msg",
    message: "Can you send me an abstract image?",
    incoming: false,
    outgoing: true,
    starred: false,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
    starred: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
    starred: false,
  },
  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.city(),
    incoming: false,
    outgoing: true,
    starred: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format? lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Can you please send this in file format? lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    incoming: false,
    outgoing: true,
    starred: true,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
    starred: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Sent file.png",
    incoming: false,
    outgoing: true,
    starred: false,
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
    starred: true,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a google www.google.com , click to visit google.. www.youtube.com",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
    starred: true,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "https://www.youtube.com",
    message: "This is a google www.google.com , click to visit google.. www.youtube.com",
    incoming: true,
    outgoing: false,
    starred: false,
  },
  {
    type: "msg",
    message: "Good",
    incoming: false,
    outgoing: true,
    starred: true,
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

const SharedImages = [
  {
    type: "img",
    message: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.animals(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.business(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.cats(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.city(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.food(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.fashion(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.nature(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.people(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.sports(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.technics(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.transport(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.animals(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.business(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.cats(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.city(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.food(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.fashion(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.nature(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.people(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.sports(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.technics(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.transport(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.animals(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.business(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.cats(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.city(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.food(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.fashion(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.nature(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.people(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.sports(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.technics(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.transport(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.animals(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.business(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.cats(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.city(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.food(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.fashion(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.nature(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.people(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.sports(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.technics(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.transport(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.animals(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.business(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.cats(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.city(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.food(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.fashion(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.nature(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.people(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.sports(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.technics(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.transport(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.animals(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.business(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.cats(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.city(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.food(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.fashion(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.nature(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.people(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.sports(),
    incoming: false,
    outgoing: true,
  },
  {
    type: "img",
    message: faker.image.technics(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "img",
    message: faker.image.transport(),
    incoming: false,
    outgoing: true,
  },
]

const SharedLinks = [
  {
    type: "link",
    preview: faker.image.cats(),
    title: "Cute Cats",
    link: "https://www.google.com/search?q=React+js+chat+appliaction&sca_esv=b1ced915f33cbde0&sca_upv=1&source=hp&ei=TXZkZtDaBcKAvr0PrZmYwA8&iflsig=AL9hbdgAAAAAZmSEXRXBDtItfu_GRtoUs6Cp-lgGNN40&ved=0ahUKEwiQtYfxpsyGAxVCgK8BHa0MBvgQ4dUDCA0&uact=5&oq=React+js+chat+appliaction&gs_lp=Egdnd3Mtd2l6IhlSZWFjdCBqcyBjaGF0IGFwcGxpYWN0aW9uMhAQABgDGOUCGOoCGIwDGI8BMhAQABgDGOUCGOoCGIwDGI8BMhAQABgDGOUCGOoCGIwDGI8BMhAQABgDGOUCGOoCGIwDGI8BMhAQLhgDGOUCGOoCGIwDGI8BMhAQABgDGOUCGOoCGIwDGI8BMhAQABgDGOUCGOoCGIwDGI8BMhAQABgDGOUCGOoCGIwDGI8BMhAQABgDGOUCGOoCGIwDGI8BMhAQLhgDGOUCGOoCGIwDGI8BSIU0UABY9DFwAXgAkAEAmAGQAaABkAGqAQMwLjG4AQPIAQD4AQGYAgKgAqoBqAIKwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxiDARiKBcICBRAAGIAEwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDmAMPkgcDMS4xoAf2CA&sclient=gws-wiz",
    incoming: true,
    outgoing: false,
  },
  {
    type: "link",
    preview: faker.image.abstract(),
    title: "Abstract",
    link: "https://www.google.co.in",
    incoming: false,
    outgoing: true,
  },
  {
    type: "link",
    preview: faker.image.animals(),
    title: "Animals",
    link: "https://www.google.co.in",
    incoming: true,
    outgoing: false,
  },
  {
    type: "link",
    preview: faker.image.business(),
    title: "Business",
    link: "https://www.google.co.in",
    incoming: false,
    outgoing: true,
  },
  {
    type: "link",
    preview: faker.image.cats(),
    title: "Cute Cats",
    link: "https://www.google.co.in",
    incoming: true,
    outgoing: false,
  },
  {
    type: "link",
    preview: faker.image.abstract(),
    title: "Abstract",
    link: "https://www.google.co.in",
    incoming: false,
    outgoing: true,
  },
  {
    type: "link",
    preview: faker.image.animals(),
    title: "Animals",
    link: "https://www.google.co.in",
    incoming: true,
    outgoing: false,
  },
  {
    type: "link",
    preview: faker.image.business(),
    title: "Business",
    link: "https://www.google.co.in",
    incoming: false,
    outgoing: true,
  },
  {
    type: "link",
    preview: faker.image.cats(),
    title: "Cute Cats",
    link: "https://www.google.co.in",
    incoming: true,
    outgoing: false,
  },
  {
    type: "link",
    preview: faker.image.abstract(),
    title: "Abstract",
    link: "https://www.google.co.in",
    incoming: false,
    outgoing: true,
  },
  {
    type: "link",
    preview: faker.image.animals(),
    title: "Animals",
    link: "https://www.google.co.in",
    incoming: true,
    outgoing: false,
  },
]

const SharedDocs = [
  {
    type: "doc",
    message: "Sent file.png",
    incoming: true,
    outgoing: false,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: true,
    outgoing: false,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: true,
    outgoing: false,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: true,
    outgoing: false,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: true,
    outgoing: false,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: true,
    outgoing: false,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: true,
    outgoing: false,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: true,
    outgoing: false,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: true,
    outgoing: false,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: true,
    outgoing: false,
  },
  {
    type: "doc",
    message: "Sent file.png",
    incoming: false,
    outgoing: true,
  },
]

export {
  ProfileMenu,
  NavSetting,
  NavButtons,
  MessageMenuItems,
  SettingsOptions,
  ShortcutsList,

  ChatList,
  ChatHistory,
  MessageOptions,
  SharedImages,
  SharedLinks,
  SharedDocs,
};
