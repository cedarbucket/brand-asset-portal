"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import { StyledInputBox, Box, Text, ShadowBox, Row } from "../styled";
import axios from "axios";
import { useField, useFormikContext } from "formik";
import Image from "next/image";
import { BASE_COLORS } from "@/theme";
import { Icon } from "../Icon";

export type FileInputBoxProps = {
  label?: string;
  labelColor?: keyof typeof BASE_COLORS;
  name: string;
  type: "t1" | "t2";
};

async function uploadFile(f: File) {
  const formData = new FormData();
  formData.append("image", f);
  formData.append("uploadType", "config");

  const uploadConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const uploadImageAPI = "https://uploadimage.img/imageuploadurl"; // UPLOAD ENDPOINT GOES HERE
  try {
    const uploadRequest = axios.post(uploadImageAPI, formData, uploadConfig);
    const response = await uploadRequest;
    return `${response}`; // RETURN URL GOES HERE
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const FileInputBox: React.FC<FileInputBoxProps> = ({
  name,
  label,
  type,
  labelColor,
}) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    hiddenFileInputRef.current?.click();
  };

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files ? e.currentTarget.files[0] : null;
    if (file) {
      setLoading(true);
      setError(null);
      const uploadedUrl = await uploadFile(file);
      setLoading(false);
      if (uploadedUrl) {
        setFieldValue(name, uploadedUrl);
      } else {
        setError("File upload failed. Please try again.");
      }
    }
  };
  return (
    <Box gap={"m"} width={"fit-content"}>
      {label ? (
        <Box pl={"l"} width={"100%"}>
          <Text fontSize={18} color={labelColor ? labelColor : "black"}>
            {label}
          </Text>
        </Box>
      ) : null}
      {type === "t1" ? (
        <ShadowBox
          backgroundColor={"primary"}
          borderRadius={"m"}
          width={"170px"}
          height={"170px"}
          pl={"l"}
          onClick={handleUploadButtonClick}
          style={{ cursor: "pointer" }}
          p={"xl"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"m"}
        >
          {field.value !== "" ? (
            <Image
              src={field.value}
              alt={"Preview"}
              width={160}
              height={160}
              style={{ borderRadius: "10px" }}
            />
          ) : (
            <>
              <Icon
                name={error ? "error" : "upload"}
                color={BASE_COLORS.white}
                size="2x"
              />
              <Text fontSize={18} color="white">
                {loading ? "Uploading" : error ? "Error" : "Upload"}
              </Text>
            </>
          )}
        </ShadowBox>
      ) : type === "t2" ? (
        <Row
          gap={"m"}
          px={"xxxxl"}
          py={"xl"}
          bg={"primary"}
          borderRadius={"xl"}
          alignItems={"center"}
          onClick={handleUploadButtonClick}
          position={"relative"}
          style={{ cursor: "pointer" }}
        >
          <Text fontSize={20} color="white">
            Upload Profile Picture
          </Text>
          <Icon name={"upload"} size="1x" color={BASE_COLORS.white} />
          {field.value !== "" ? (
            <ShadowBox
              borderRadius={"m"}
              overflow={"hidden"}
              position={"absolute"}
              top={"110%"}
              left={"20%"}
            >
              <Image
                src={field.value}
                alt={"Profile Picture"}
                width={190}
                height={190}
                style={{ borderRadius: "10px" }}
              />
            </ShadowBox>
          ) : null}
        </Row>
      ) : null}
      <StyledInputBox
        ref={hiddenFileInputRef}
        width={"100%"}
        name={name}
        onChange={onChange}
        type="file"
        style={{ cursor: "pointer" }}
        display={"none"}
      />
    </Box>
  );
};
