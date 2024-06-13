import { faker } from "@faker-js/faker";
import React from "react";
import * as Yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../hook-form/FormProvider";
import { Alert, Stack, Button } from "@mui/material";
import { RHFTextField } from "../../hook-form";
import RHFAutocomplete from "../../hook-form/RHFAutocomplete";

// FIXME: DUMMY DATA
const MEMBERS = [
  {
    id: 1,
    name: faker.name.firstName(),
  },
  {
    id: 2,
    name: faker.name.firstName(),
  },
  {
    id: 2,
    name: faker.name.firstName(),
  },
  {
    id: 4,
    name: "Bootki🦁",
  },
];

const MEMBERS_NAMES = MEMBERS.map((member) => member.name);

// FIXME: END OF DUMMY DATA

const CreateGroupForm = ({ handleClose }) => {
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Group name is required"),
    members: Yup.array().min(1, "Must have at least 2 members including you"),
  });

  const defaultValues = {
    title: null,
    members: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSucessful, isValid },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // TODO: Add api call
    } catch {
      console.log(errors);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={1}
        sx={{
          padding: "10px 0",
        }}
      >
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField name="title" label="Group name" />
        <RHFAutocomplete
          multiple
          freeSolo
          name="members"
          label="Select members"
          options={MEMBERS_NAMES.map((option) => option)}
          ChipProps={{ size: "medium" }}
        />
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={1}
      >
        <Button onClick={handleClose} variant="outlined" sx={{ flexGrow: 1 }}>
          Cancel
        </Button>
        <Button type="submit" variant="outlined" sx={{ flexGrow: 1 }}>
          Create
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default CreateGroupForm;
