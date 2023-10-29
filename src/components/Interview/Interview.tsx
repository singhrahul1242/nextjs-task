import React from 'react'
import CustomInput from '../customInput/CustomInput'
import { Box } from '@chakra-ui/react';

const Interview = () => {
  
  const option1: string[] = ["Online","Offline"]
  const option2: string[] = ["Start", "Medium", "Long"]
  const option3: string[] = ["English", "Hindi"]
  
    return (
        <Box>
            <CustomInput option={option1} value='' title='Interview Mode'dropdown={false} placeholder={"Select Mode"} error='' />
            <CustomInput option={option2} value='' title='Interview Duration'dropdown={false} placeholder={"Select Duration"} error='' />
            <CustomInput option={option3} value='' title='Interview Language'dropdown={false} placeholder={"Select Language"} error='' />
        </Box>
    )
}

export default Interview