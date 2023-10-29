import React from 'react'
import { Text, Input, Select, Box } from '@chakra-ui/react'

interface CustomInputInterface {
    option: string[],
    value: string,
    title: string,
    dropdown: boolean,
    placeholder: string,
    error: string,
    handelChange: any
}

const CustomInput = ({ option, value, title, dropdown, placeholder, error, handelChange }: CustomInputInterface) => {
    return (
        <Box>
            <Text mb='8px'>{title}</Text>
            {
                dropdown ?
                    <Input
                        value={value}
                        onChange={(event)=>handelChange(event)}
                        placeholder={placeholder}
                        size='sm'
                        name= 'title'
                    />
                    :
                    <Select placeholder='Select option'>
                        {
                            option.map((value: any) => {
                                return (
                                    <option value={value}>{value}</option>
                                )
                            })
                        }
                    </Select>
            }
            { error &&  <Text mb='8px'>{"Arr lavde"}</Text>}
        </Box>
    )
}

export default CustomInput;