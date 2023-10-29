import React from 'react'
import CustomInput from '../customInput/CustomInput'
import { Box } from '@chakra-ui/react';

const Interview = ({value, onChange,errors, touched}:any) => {
  
  const option1: string[] = ["Online","Offline"]
  const option2: string[] = ["Start", "Medium", "Long"]
  const option3: string[] = ["English", "Hindi"]
  
    return (
        <Box>
            <CustomInput option={option1} value={value?.interviewMode} title='Interview Mode' dropdown={false} placeholder={"Select Mode"} error={errors.interviewMode} handelChange={onChange('interviewMode')} touched={touched} name={'interviewMode'}/>
            <CustomInput option={option2} value={value?.interviewDuration} title='Interview Duration' dropdown={false} placeholder={"Select Duration"} error={errors.interviewDuration} handelChange={onChange('interviewDuration')} touched={touched} name={'interviewDuration'}/>
            <CustomInput option={option2} value={value?.interviewLangugae} title='Interview Language' dropdown={false} placeholder={"Select Language"} error={errors.interviewLangugae} handelChange={onChange('interviewLangugae')} touched={touched} name={'interviewLangugae'}/>
        </Box>
    )
}

export default Interview