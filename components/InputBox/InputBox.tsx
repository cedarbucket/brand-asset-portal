"use client";
import { BASE_COLORS } from "@/theme";
import { Box, Column, Row, ShadowBox, StyledInputBox, Text } from "../styled";
import { ChangeEvent } from "react";
import { useField } from "formik";
import { useCallback } from "react";

export type InputBoxProps = {
  name: string;
  placeholder: string;
  placeholderColor?: string;
  type?: "text" | "number" | "email" | "file";
  border?: boolean;
  label?: string;
  labelColor?: keyof typeof BASE_COLORS;
  boxShadow?: boolean;
  height?: number;
  errors?: {
    [key: string]: string;
  };
  touched?: {
    [key: string]: boolean;
  };
};
export const InputBox: React.FC<InputBoxProps> = ({
  name,
  placeholder,
  type,
  border,
  label,
  labelColor,
  boxShadow,
  height,
  placeholderColor,
  errors,
  touched,
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
    <Column gap={label ? "m" : "none"} width={"100%"}>
      <Row px={"l"} width={"100%"} justifyContent={"space-between"}>
        {label ? (
          <Text fontSize={18} color={labelColor ? labelColor : "white"}>
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
            border={border ? `1px solid ${BASE_COLORS.primary}` : "none"}
            width={"100%"}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            height={height ? `${height}px` : "60px"}
            placeholder={placeholder}
            type={type}
            value={field.value}
            placeholderColor={placeholderColor}
          />
        </ShadowBox>
      ) : (
        <StyledInputBox
          border={"none"}
          borderBottom={`1px solid ${BASE_COLORS.primary}`}
          width={"100%"}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          backgroundColor="black"
          height={height ? `${height}px` : "60px"}
          placeholder={placeholder}
          color={"white"}
          type={type}
          value={field.value}
        />
      )}
    </Column>
  );
};
