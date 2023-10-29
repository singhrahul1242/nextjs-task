import React from 'react'
import CustomInput from '../customInput/CustomInput'
import { Box } from '@chakra-ui/react';


const Requisition = ({value, onChange}:any) => {
    const option1: string[] = ["Urgent", "Immediate Joining", "Relaxed"]
    const option2: string[] = ["Male", "Female"]

    return (
        <Box>
            <CustomInput option={[]} value={value?.title} title='Requisition Title' dropdown={true} placeholder={"Enter Requisition Title"} error='' handelChange={onChange}/>
            {/* <CustomInput option={[]} value='0' title='Number of Openings' dropdown={true} placeholder={"Enter Number of Openings"} error='' handelChange={}/>
            <CustomInput option={option2} value='' title='Gender' dropdown={false} placeholder={"Enter Gender"} error='' handelChange={}/>
            <CustomInput option={option1} value='' title='Urgency' dropdown={false} placeholder={"Enter"} error='' handelChange={}/> */}
        </Box>
    )
}

export default Requisition