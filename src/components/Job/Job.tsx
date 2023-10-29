import React from 'react'
import CustomInput from '../customInput/CustomInput'
import { Box } from '@chakra-ui/react';

const Job = () => {

    return (
        <Box>
            <CustomInput option={[]} value='' title='Job Title' dropdown={true} placeholder={"Enter Job Title"} error='' />
            <CustomInput option={[]} value='' title='Job Details' dropdown={true} placeholder={"Enter Job Details"} error='' />
            <CustomInput option={[]} value='' title='Job Location'dropdown={true} placeholder={"Enter Location"} error='' />
        </Box>
    )
}

export default Job