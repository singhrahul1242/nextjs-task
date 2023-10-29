import React from 'react'
import CustomInput from '../customInput/CustomInput'
import { Box } from '@chakra-ui/react';


const Requisition = ({value, onChange,errors, touched}:any) => {
    const option1: string[] = ["Urgent", "Immediate Joining", "Relaxed"]
    const option2: string[] = ["Male", "Female"]
    console.log("va",value, errors)
    return (
        <Box>
            <CustomInput option={[]} value={value?.title} title='Requisition Title' dropdown={true} placeholder={"Enter Requisition Title"} error={errors?.title} handelChange={onChange} touched={touched} name={'title'}/>
            <CustomInput option={[]} value={value?.numberOfOpenings} title='Requisition Title' dropdown={true} placeholder={"Enter Requisition Title"} error={errors.numberOfOpenings} handelChange={onChange} touched={touched} name={'numberOfOpenings'}/>
            <CustomInput option={option2} value={value?.gender} title='Requisition Title' dropdown={false} placeholder={"Enter Requisition Title"} error={errors.gender} handelChange={onChange("gender")} touched={touched} name={'gender'}/>
            <CustomInput option={option1} value={value?.urgency} title='Requisition Title' dropdown={false} placeholder={"Enter Requisition Title"} error={errors.urgency} handelChange={onChange('urgency')} touched={touched} name={'urgency'}/>
        </Box>
    )
}

export default Requisition