"use client";
import { BASE_COLORS } from "@/theme";
import { Box, Column, Row, ShadowBox, Text } from "../styled";
import { ChangeEvent } from "react";
import { useField } from "formik";
import { useCallback } from "react";
import { StyledTextArea, StyledTextAreaProps } from "../styled/StyledTextArea";

export type TextAreaProps = {
  name: string;
  placeholder: string;
  placeholderColor?: string;
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
  StyledTextAreaProps,
  "type" | "name" | "onChange" | "onBlur" | "value"
>;

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  label,
  labelColor,
  boxShadow,
  placeholderColor,
  errors,
  touched,
  width,
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
          <StyledTextArea
            borderRadius={"m"}
            border={"none"}
            height={"100px"}
            width={"100%"}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            value={field.value}
            placeholderColor={
              placeholderColor ? placeholderColor : "foreground"
            }
            {...rest}
          />
        </ShadowBox>
      ) : (
        <StyledTextArea
          borderRadius={"m"}
          border={"none"}
          height={"100px"}
          width={"100%"}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          value={field.value}
          placeholderColor={placeholderColor ? placeholderColor : "foreground"}
          {...rest}
        />
      )}
    </Column>
  );
};
