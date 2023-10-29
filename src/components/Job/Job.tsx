import React from 'react'
import CustomInput from '../customInput/CustomInput'
import { Box } from '@chakra-ui/react';

const Job = ({value, onChange,errors, touched}:any) => {

    return (
        <Box> 
            <CustomInput option={[]} value={value?.jobTitle} title='Job Title' dropdown={true} placeholder={"Enter Job Title"} error={errors?.jobTitle} handelChange={onChange} touched={touched} name={'jobTitle'} />
            <CustomInput option={[]} value={value?.jobDetials} title='Job Details' dropdown={true} placeholder={"Enter Job Details"} error={errors?.jobDetials} name={'jobDetials'} handelChange={onChange} touched={touched}/>
            <CustomInput option={[]} value={value?.jobLocation} title='Job Location'dropdown={true} placeholder={"Enter Job Location"} error={errors?.jobLocation} name={'jobLocation'} handelChange={onChange} touched={touched}/>
        </Box>
    )
}

export default Job