import { useRef } from "react";
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Stack, TextField } from "@mui/material";

export default function RHFCodes({ keyName = "", inputs = [], ...other }) {
  const codesRef = useRef(null);
  const pinsRef = useRef([]);

  const { control } = useFormContext();

  const handleKeyDown = (event, index) => {
    const { key, target } = event;
    if (key === "Backspace" && !target.value) {
      const prevField = pinsRef.current[index - 1];
      if (prevField) {
        prevField.focus();
      }
    }
  };

  const handleChangeWithNextField = (event, handleChange) => {
    const { maxLength, value, name } = event.target;

    if (!/^\d*$/.test(value)) {
      return; 
    }
  
    const fieldIndex = name.replace(keyName, "");
    const fieldIntIndex = Number(fieldIndex);
  
    const nextfield = document.querySelector(
      `input[name=${keyName}${fieldIntIndex + 1}]`
    );
  
    if (
      value.length >= maxLength &&
      fieldIntIndex < 6 &&
      nextfield !== null
    ) {
      nextfield.focus();
    }
  
    handleChange(event); // Proceed to update form state with the numeric value
  };
  

  return (
    <Stack direction="row" spacing={2} justifyContent="center" ref={codesRef}>
      {inputs.map((name, index) => (
        <Controller
          key={name}
          name={`${keyName}${index + 1}`}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              inputRef={(el) => (pinsRef.current[index] = el)}
              type="number"
              error={!!error}
              autoFocus={index === 0}
              placeholder="-"
              onChange={(event) => {
                handleChangeWithNextField(event, field.onChange);
              }}
              onKeyDown={(event) => handleKeyDown(event, index)}
              onFocus={(event) => event.currentTarget.select()}
              InputProps={{
                sx: {
                  width: { xs: 36, sm: 56 },
                  height: { xs: 36, sm: 56 },
                  "& input": { p: 0, textAlign: "center" },
                },
              }}
              inputProps={{
                maxLength: 1,
                type: "number",
              }}
              {...other}
            />
          )}
        />
      ))}
    </Stack>
  );
}
