"use client";
import { Box, Row, Text } from "@/components";
import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import { FileInputBox } from "@/components/FileInputBox";
import { Icon } from "@/components/Icon";
import { InputBox } from "@/components/InputBox";
import { TextArea } from "@/components/TextArea";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { BASE_COLORS } from "@/theme";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";

export default function Components() {
  const router = useRouter();

  const handleNavigationToHome = () => {
    router.push("/");
  };
  return (
    <Box width={"100%"} height={"100%"} backgroundColor={"background"}>
      <Box width={"100%"} alignItems={"center"} p={"xl"} position={"relative"}>
        <Text color="foreground" variant="heading" letterSpacing={5}>
          Components
        </Text>
        <Row alignItems={"center"} position={"absolute"} right={20} gap={"m"}>
          <Box onClick={handleNavigationToHome} style={{ cursor: "pointer" }}>
            <Icon name={"home"} color={"foreground"} size="xl" />
          </Box>
          <ThemeSwitch />
        </Row>
      </Box>
      <Box width={"100%"} height={"100%"} p={"l"}>
        <Formik
          initialValues={{ name: "", description: "", url: "" }}
          onSubmit={() => {}}
        >
          {({}) => (
            <Form style={{ width: "100%", height: "100%" }}>
              <Box width={"100%"} borderRed height={"100%"} p={"m"} gap={"m"}>
                <Row gap={"m"}>
                  <InputBox
                    boxShadow
                    name={"name"}
                    placeholder={"Name"}
                    label="Name"
                  />
                  <InputBox
                    name={"name"}
                    placeholder={"Name"}
                    label="Name"
                    border={`1px solid ${BASE_COLORS.primary}`}
                  />
                </Row>
                <Row gap={"m"}>
                  <TextArea
                    boxShadow
                    name={"description"}
                    placeholder={"Description"}
                    label="Description"
                  />
                  <TextArea
                    name={"description"}
                    placeholder={"Description"}
                    label="Description"
                    border={`1px solid ${BASE_COLORS.primary}`}
                  />
                </Row>
                <Row gap={"m"}>
                  <FileInputBox
                    name={"url"}
                    type={"square"}
                    label={"Upload Image"}
                  />
                  <FileInputBox
                    name={"url"}
                    type={"rectangle"}
                    label={"Upload Image"}
                  />
                  <DateRangePicker
                    name={"dateRange"}
                    width="300px"
                    label="Date Range"
                  />
                </Row>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
