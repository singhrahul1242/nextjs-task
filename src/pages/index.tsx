import CustomTab from "@/components/customTab/CustomTab";
import DisplayBox from "@/components/displayBox/DisplayBox";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useFormik } from 'formik';
import {RequisitionDetailsSchemas} from '../schemas/RequisitionDetailsSchema';
import { object, string } from "yup";


export default function Home() {


  const onSubmit = async () => {
    // await verifyEmail(emailId.email, true);
  };

const RequisitionDetailsSchema = object({
  title: string().required(),
  // Define other fields and their validations here
});


const schemaInstance = RequisitionDetailsSchema;

const { values, handleChange, handleSubmit, errors, touched, isValid } = useFormik({
  initialValues: {
      title: '',
  },
  validationSchema: schemaInstance,
  onSubmit,
});


  return (
    <Box ml='200px'>
      <Heading as='h2' size='xl'>
        Create Candidate Requisition
      </Heading>
      <Flex gap={4}>
        <CustomTab value1={values} onChange={handleChange}/>
        <DisplayBox value1={values}/>
      </Flex>
    </Box>

  );
}
