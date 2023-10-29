import React from "react";
import { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import Requisition from "@/components/Requisition/Requisition";
import Job from "@/components/Job/Job";
import Interview from "@/components/Interview/Interview";

const CustomTab = ({
  value1,
  onChange,
  onSubmit,
  errors,
  touched,
  requistionValid,
  validateForm,
  
  value2,
  onChange1,
  onSubmit1,
  errors1,
  touched1,
  jobValid,

  value3,
  onChange2,
  onSubmit2,
  errors2,
  touched2,
  interviewValid
}: any) => {
  const [value, setValue] = useState(0); // Initialize with the index of the first tab (0)


  console.log(requistionValid,jobValid)

  const handleNext = () => {
    if (value < 2) {
      if (value === 0) {
        onSubmit();
        requistionValid ? setValue(value + 1) : ''
      } else if (value === 1) {
        onSubmit1();
        jobValid ? setValue(value + 1) : ''
      }
    } else {
      onSubmit2();
      interviewValid ? alert("Candidate Details Successfully Submited") : ''
    }
  };

  const handlePrevious = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <Box width="50%">
      <Tabs isLazy index={value}>
        <TabList>
          <Tab>Requisition details</Tab>
          <Tab>Job details</Tab>
          <Tab>Interview settings</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Requisition
              value={value1}
              onChange={onChange}
              errors={errors}
              touched={touched}
            />
          </TabPanel>
          <TabPanel>
            <Job
              value={value2}
              onChange={onChange1}
              errors={errors1}
              touched={touched1}
            />
          </TabPanel>
          <TabPanel>
            <Interview
              value={value3}
              onChange={onChange2}
              errors={errors2}
              touched={touched2}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box mt={4} display="flex" flexDirection="row" justifyContent="flex-end">
        {value > 0 ? (
          <Button onClick={handlePrevious} isDisabled={value === 0}>
            Previous
          </Button>
        ) : (
          ""
        )}
        <Button onClick={handleNext} variant="solid" colorScheme="red">
          {value < 2 ? "Next" : "Submit"}
        </Button>
      </Box>
    </Box>
  );
};

export default CustomTab;
