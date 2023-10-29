import React from 'react'
import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button } from '@chakra-ui/react';
import Requisition from '@/components/Requisition/Requisition';
import Job from '@/components/Job/Job';
import Interview from '@/components/Interview/Interview';

const CustomTab = ({ value1, onChange }: any) => {

    const [value, setValue] = useState(0); // Initialize with the index of the first tab (0)

    const handleNext = () => {
        if (value < 2) {
            setValue(value + 1);
        }
        else {
            alert("sdas")
        }
    };

    const handlePrevious = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };
    return (
        <Box width='50%'>
            <Tabs isLazy index={value}>
                <TabList>
                    <Tab>Requisition details</Tab>
                    <Tab>Job details</Tab>
                    <Tab>Interview settings</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Requisition value={value1} onChange={onChange} />
                    </TabPanel>
                    <TabPanel>
                        <Job />
                    </TabPanel>
                    <TabPanel>
                        <Interview />
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Box mt={4} display='flex' flexDirection='row' justifyContent='flex-end'>
                {
                    value > 0 ? <Button onClick={handlePrevious} isDisabled={value === 0}>
                        Previous
                    </Button> : ''
                }
                <Button onClick={handleNext} variant="solid" colorScheme="red" >
                    {value < 2 ? "Next" : "Submit"}
                </Button>
            </Box>
        </Box>
    )
}

export default CustomTab