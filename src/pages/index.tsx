import CustomTab from "@/components/customTab/CustomTab";
import DisplayBox from "@/components/displayBox/DisplayBox";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useFormik } from "formik";
import { RequisitionDetailsSchemas } from "../schemas/RequisitionDetailsSchema";
import { object, string } from "yup";
import { useEffect } from "react";

export default function Home() {
  const onSubmit = async () => {
    // await verifyEmail(emailId.email, true);
    console.log("helllo");
  };

  const RequisitionDetailsSchema = object({
    title: string().required("title should not be empty"),
    numberOfOpenings: string()
      .matches(/^\d+$/, "Number of Openings must be a valid number")
      .required("Number of Openings is required"),
    gender: string().required("Gender is required"),
    urgency: string().required("Urgency is required"),
  });

  const JobDetailsSchema = object({
    jobTitle: string().required("JobTitle is required"),
    jobDetials: string().required("JobDetials is required"),
    jobLocation: string().required("JobLocation is required"),
  });

  const InterviewSchema = object({
    interviewMode: string().required("Interview Mode is required"),
    interviewDuration: string().required("Interview Duration is required"),
    interviewLangugae: string().required("Interview Langugae is required"),
  });


  const { values, handleChange, handleSubmit, errors, touched, isValid,validateForm } =
    useFormik({
      initialValues: {
          title: "",
          numberOfOpenings: "",
          gender: "",
          urgency: "",
      },
      validationSchema: RequisitionDetailsSchema,
      onSubmit,
      isInitialValid:false
    });

    const { values:jobDetails, handleChange:jobDetailsCahnge, handleSubmit:jobDetailsSubmit, errors:jobDetailsError, touched:jobDetailsTouched, isValid:jobDetauilsValid } =
    useFormik({
      initialValues: {
          jobTitle: "",
          jobDetials: "",
          jobLocation: "",
      },
      validationSchema: JobDetailsSchema,
      onSubmit,
      isInitialValid:false
    });

    const { values:interviewDetails, handleChange:interviewDetailsChange, handleSubmit:interviewDetailsSubmit, errors:interviewError, touched:interviewTouched, isValid:interviewValid } =
    useFormik({
      initialValues: {
        interviewMode: "",
        interviewDuration: "",
        interviewLangugae: "",
      },
      validationSchema: InterviewSchema,
      onSubmit,
      isInitialValid:false
    });

  const values1 = {
    requisitionDetails: values,
    jobDetails: jobDetails,
    InterviewSchema :interviewDetails
  }


  return (
    <Box ml="200px">
      <Heading as="h2" size="xl">
        Create Candidate Requisition
      </Heading>
      <Flex gap={4}>
        <CustomTab
          value1={values}
          onChange={handleChange}
          onSubmit={handleSubmit}
          errors={errors}
          touched={touched}
          requistionValid={isValid}
          validateForm={validateForm}

          value2={jobDetails}
          onChange1={jobDetailsCahnge}
          onSubmit1={jobDetailsSubmit}
          errors1={jobDetailsError}
          touched1={jobDetailsTouched}
          jobValid= {jobDetauilsValid}

          value3={interviewDetails}
          onChange2={interviewDetailsChange}
          onSubmit2={interviewDetailsSubmit}
          errors2={interviewError}
          touched2={interviewTouched}
          interviewValid= {interviewValid}
        />
        <DisplayBox value1={values1} />
      </Flex>
    </Box>
  );
}
