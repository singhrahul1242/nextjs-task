import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const DisplayBox = ({value1}:any) => {
    console.log("value1",value1)
    return (
        <Box p={4} bgColor='#EEF1F8' borderRadius={10}>
            <Heading flex={1} as='h5' size='sm' pb={3}>
                    Draft
                </Heading>
            <Flex bgColor='#432B7B' p={2} mb={2} borderRadius={5} color='white'>
                <Heading flex={1} as='h6' size='' pb={3}>
                    {value1.requisitionDetails.title}
                </Heading>
                <Heading flex={1} as='h5' size='sm' >
                Opening {value1.requisitionDetails.numberOfOpenings}
                </Heading>
            </Flex>
            <SimpleGrid spacing={4}>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Reuisition Details</Heading>
                    </CardHeader>
                    <CardBody>
                        <Flex >
                            <Text flex={1}>Urgency</Text>
                            <Text flex={1}>Gender</Text>
                        </Flex>
                        <Flex >
                            <Text flex={1} as='b' fontSize='md'>{value1.requisitionDetails.urgency}</Text>
                            <Text flex={1} as='b' fontSize='md'>{value1.requisitionDetails.gender}</Text>
                        </Flex>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Job Details</Heading>
                    </CardHeader>
                    <CardBody>
                        <Flex >
                            <Text flex={1}>Job Title</Text>
                            <Text flex={1}>Job Details</Text>
                        </Flex>
                        <Flex >
                            <Text flex={1} as='b' fontSize='md'>{value1.jobDetails.jobTitle}</Text>
                            <Text flex={1} as='b' fontSize='md'>{value1.jobDetails.jobDetials}</Text>
                        </Flex>
                        <Flex >
                            <Text flex={1}>Job Location</Text>
                        </Flex>
                        <Flex >
                            <Text flex={1} as='b' fontSize='md'>{value1.jobDetails.jobLocation}</Text>
                        </Flex>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Interview Setting</Heading>
                    </CardHeader>
                    <CardBody>
                        <Flex >
                            <Text flex={1}>Interview Duration</Text>
                            <Text flex={1}>Interview Language</Text>
                        </Flex>
                        <Flex >
                            <Text flex={1} as='b' fontSize='md'>{value1.InterviewSchema.interviewMode}</Text>
                            <Text flex={1} as='b' fontSize='md'>{value1.InterviewSchema.interviewDuration}</Text>
                        </Flex>
                        <Flex >
                            <Text flex={1}>Interview Mode</Text>
                        </Flex>
                        <Flex >
                            <Text flex={1} as='b' fontSize='md'>{value1.InterviewSchema.interviewLangugae}</Text>
                        </Flex>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Box>

    )
}

export default DisplayBox