import React, { useState } from "react";

import {
  Box,
  Stack,
  Avatar,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material";

import { faker } from "@faker-js/faker";
import {
  Phone,
  VideoCamera,
  CaretRight,
  Star,
  BellSimpleZ,
  Trash,
  Prohibit,
} from "phosphor-react";

import { useDispatch } from "react-redux";
import { UpdateSidebar } from "../../redux/slices/app";

import { IOSSwitch, ReportButton, DialogBlock } from "./utils";

const GroupTab = ({}) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"start"}
      alignContent={"center"}
      spacing={1}
      sx={{
        fontSize: "16px",
      }}
    >
      <Avatar
        src={faker.image.avatar()}
        sx={{
          width: 50,
          height: 50,
        }}
      />
      <Stack justifyContent={"center"} spacing={0}>
        <Typography variant="body1" display="block" gutterBottom>
          {faker.name.firstName()}
        </Typography>
        <Typography variant="body1">{faker.phone.number()}</Typography>
      </Stack>
    </Stack>
  );
};

const Profile = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [openDialogBlock, setOpenDialogBlock] = useState(false);
  const [blogDialogType, setBlogDialogType] = useState("DELETE");

  const handleClickOpenDelete = () => {
    setOpenDialogBlock(true);
    setBlogDialogType("DELETE");
  };

  const handleClickOpenReport = () => {
    setOpenDialogBlock(true);
    setBlogDialogType("REPORT");
  };

  const handleClose = () => {
    setOpenDialogBlock(false);
  };

  return (
    <>
      <Stack
        direction={"row"}
        width={"100%"}
        height={"100%"}
        justifyContent={"start"}
        alignContent={"center"}
        spacing={3}
        p={3}
      >
        <Avatar
          src={faker.image.avatar()}
          sx={{
            width: 75,
            height: 75,
          }}
        />
        <Stack justifyContent={"center"} spacing={0}>
          <Typography variant="body1" display="block" gutterBottom>
            {faker.name.firstName()}
          </Typography>
          <Typography variant="body1">{faker.phone.number()}</Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={3}
        sx={{
          padding: "0 0 2rem 0",
        }}
      >
        <IconButton
          sx={{
            width: "75px",
            height: "75px",
            padding: "10px",
          }}
        >
          <Stack alignItems={"center"} justifyContent={"center"}>
            <VideoCamera />
            <Typography>Video</Typography>
          </Stack>
        </IconButton>
        <IconButton
          sx={{
            width: "75px",
            height: "75px",
            padding: "10px",
          }}
        >
          <Stack alignItems={"center"} justifyContent={"center"}>
            <Phone />
            <Typography>Voice</Typography>
          </Stack>
        </IconButton>
      </Stack>
      <Divider variant="middle" />
      <Stack p={2}>
        <Typography variant="h6">About</Typography>
        <Typography variant="caption">
          {faker.lorem.paragraph().slice(0, 100).concat("...")}
        </Typography>
      </Stack>
      <Divider variant="middle" />
      <Stack spacing={1} p={2}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6">Media, Links & Docs</Typography>
          <IconButton
            onClick={() => {
              dispatch(UpdateSidebar("MEDIA"));
            }}
          >
            <CaretRight />
          </IconButton>
        </Stack>
        <Stack
          direction={"row"}
          maxWidth={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          <img
            alt="image 1"
            src={faker.image.cats()}
            style={{
              width: "75px",
              aspectRatio: "1/1",
            }}
          />
          <img
            alt="image 1"
            src={faker.image.abstract()}
            style={{
              width: "75px",
              aspectRatio: "1/1",
            }}
          />
          <img
            alt="image 1"
            src={faker.image.animals()}
            style={{
              width: "75px",
              aspectRatio: "1/1",
            }}
          />
        </Stack>
      </Stack>
      <Divider variant="middle" />
      <Stack
        spacing={2}
        justifyContent={"space-between"}
        direction={"row"}
        alignItems={"center"}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"start"}
          spacing={1}
        >
          <Star weight="fill" size={18} />
          <Typography variant="h6">Starred Messages</Typography>
        </Stack>
        <IconButton
          onClick={() => {
            dispatch(UpdateSidebar("STARRED"));
          }}
        >
          <CaretRight />
        </IconButton>
      </Stack>
      <Divider variant="middle" />
      <Stack
        spacing={2}
        justifyContent={"space-between"}
        direction={"row"}
        alignItems={"center"}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"start"}
          spacing={1}
        >
          <BellSimpleZ size={18} weight="fill" />
          <Typography variant="h6">Mute notifications</Typography>
        </Stack>
        <IOSSwitch />
      </Stack>
      <Divider variant="middle" />

      <Stack spacing={2} p={2}>
        <Typography variant="h6">Common groups</Typography>
        <Stack spacing={1}>
          <GroupTab />
          <GroupTab />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
          <ReportButton
            variant="outlined"
            startIcon={<Prohibit />}
            sx={{
              flexGrow: "1",
            }}
            onClick={handleClickOpenReport}
          >
            Report
          </ReportButton>
          <Button
            variant="outlined"
            color="error"
            startIcon={<Trash />}
            sx={{
              flexGrow: "1",
            }}
            onClick={handleClickOpenDelete}
          >
            Delete
          </Button>
          {openDialogBlock && (
            <DialogBlock 
              open={openDialogBlock} 
              handleClose={handleClose} 
              DialogType={blogDialogType}
            />
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default Profile;
