"use client";
import { Box, Button, CenterBox, Text } from "@/components";
import { InputBox } from "@/components/InputBox";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginPage = () => {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");

  const handleLogin = (values: { pin: string }) => {
    if (values.pin !== "007711") {
      setMessage("Invalid Pin");
    } else {
      if (typeof window !== "undefined") {
        setMessage("Login Successful");
        localStorage.setItem("cedar-token", "cedarbuckettoken0987654321");
        router.push("/logos");
      }
    }
  };

  return (
    <CenterBox width={"100%"} height={"100%"}>
      <Box
        borderRed
        width={["80%", "30%"]}
        height={["30%", "30%"]}
        border={"1px solid white"}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        borderRadius={"m"}
        p={"l"}
      >
        <Formik initialValues={{ pin: "" }} onSubmit={handleLogin}>
          {({}) => (
            <Form style={{ width: "100%", height: "100%" }}>
              <Box
                width={"100%"}
                height={"100%"}
                justifyContent={"space-between"}
              >
                <InputBox
                  labelColor="white"
                  label="Pin"
                  name={"pin"}
                  placeholder={"6 Digit Pin"}
                />
                <Button variant="primary">Login</Button>
                <Text fontSize={14} textAlign={"center"} color="white">
                  {message}
                </Text>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </CenterBox>
  );
};
