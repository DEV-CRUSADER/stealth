import React, { useCallback, useState } from "react";
import * as Yup from "yup";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../../components/hook-form/FormProvider";
import { RHFTextField, RHFUploadAvatar } from "../../../components/hook-form";
import { Stack, Typography } from "@mui/material";
import { IOSSwitch } from "../../../components/utils";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { faker } from "@faker-js/faker";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();

  const ProfileSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    firstName: Yup.string().required("Name is required"),
    about: Yup.string().required("About is required"),
    anonymous: Yup.boolean().required("Anonymous is required"),
    anonymousName: Yup.string(),
    avatar: Yup.string().required("Avatar is required").nullable(true),
  });

  const defaultValues = {
    username: "saurabh",
    firstName: "Saurabh Yadav",
    about: "My bio",
    anonymous: false,
    anonymousName: "",
    avatar: faker.image.avatar(),
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = methods;

  const values = watch();

  const onSubmit = async (data) => {
    try {
      // TODO:  Send API request
      console.log("DATA", data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      setFile(file);

      // TODO: Send API request to upload file
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("avatar", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleOnChange = (e) => {
    setValue("anonymous", !getValues("anonymous"));

    if (getValues("anonymous")) {
      setValue("anonymousName", "12309akdsln12983");
    } else {
      setValue("anonymousName", "");
    }
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} p={4}>
        <RHFUploadAvatar name="avatar" maxSize={3145728} onDrop={handleDrop} />

        <RHFTextField
          helperText={"This name is visible to all the user in the platform"}
          name="username"
          label="Username"
        />
        <RHFTextField
          helperText={"This name is visible to your contacts"}
          name="firstName"
          label="First Name"
        />
        <RHFTextField multiline rows={4} name="about" label="About" />

        <Stack
          justifyContent={"space-between"}
          direction={"row"}
          alignItems={"center"}
        >
          <Typography variant="body1">Be anonymous</Typography>
          <IOSSwitch onChange={handleOnChange}/>
        </Stack>

        <RHFTextField
          helperText={"This name is visible to everyone as anonymous"}
          name="anonymousName"
          label="Anonymous Name"
          disabled={true}
        />

        <Stack direction={"row"} justifyContent="end">
          <LoadingButton
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            // loading={isSubmitSuccessful || isSubmitting}
          >
            Save
          </LoadingButton>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
