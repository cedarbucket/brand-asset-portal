"use client";
import { BASE_COLORS } from "@/theme";
import {
  Box,
  Column,
  Row,
  ShadowBox,
  StyledInputBox,
  StyledInputBoxProps,
  Text,
} from "../styled";
import { ChangeEvent } from "react";
import { useField } from "formik";
import { useCallback } from "react";

export type InputBoxProps = {
  name: string;
  placeholder: string;
  placeholderColor?: string;
  type?: "text" | "number" | "email";
  label?: string;
  labelColor?: keyof typeof BASE_COLORS;
  width?: string;
  boxShadow?: boolean;
  errors?: {
    [key: string]: string;
  };
  touched?: {
    [key: string]: boolean;
  };
} & Omit<
  StyledInputBoxProps,
  "type" | "name" | "onChange" | "onBlur" | "value"
>;

export const InputBox: React.FC<InputBoxProps> = ({
  name,
  placeholder,
  type,
  label,
  labelColor,
  width,
  boxShadow,
  placeholderColor,
  errors,
  touched,
  ...rest
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta, helpers] = useField(name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(e.target.value);
  };

  const handleBlur = useCallback(() => {
    helpers.setTouched(true);
  }, [helpers]);

  const errorMessage = errors ? errors[name] : "";
  const isTouched = touched ? touched[name] : "";

  return (
    <Column gap={label ? "m" : "none"} width={width ? width : "100%"}>
      <Row px={"l"} width={"100%"} justifyContent={"space-between"}>
        {label ? (
          <Text fontSize={18} color={labelColor ? labelColor : "foreground"}>
            {label}
          </Text>
        ) : null}
        {errorMessage && isTouched ? (
          <Box>
            <Text fontSize={18} color={"error"}>
              {errorMessage}
            </Text>
          </Box>
        ) : null}
      </Row>
      {boxShadow ? (
        <ShadowBox borderRadius={"m"} overflow={"hidden"}>
          <StyledInputBox
            border={"none"}
            height={"50px"}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            type={type}
            value={field.value}
            placeholderColor={
              placeholderColor ? placeholderColor : "foreground"
            }
            {...rest}
          />
        </ShadowBox>
      ) : (
        <StyledInputBox
          borderRadius={"m"}
          border={"none"}
          height={"50px"}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          type={type}
          value={field.value}
          placeholderColor={placeholderColor ? placeholderColor : "foreground"}
          {...rest}
        />
      )}
    </Column>
  );
};
