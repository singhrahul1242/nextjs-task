import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const DisplayBox = ({value1}:any) => {
    return (
        <Box p={4} bgColor='#EEF1F8' borderRadius={10}>
            <Heading flex={1} as='h5' size='sm' pb={3}>
                    Draft
                </Heading>
            <Flex bgColor='#432B7B' p={2} mb={2} borderRadius={5} color='white'>
                <Heading flex={1} as='h6' size='' pb={3}>
                    {value1.title}
                </Heading>
                <Heading flex={1} as='h5' size='sm' >
                Opening 24
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
                            <Text flex={1} as='b' fontSize='md'>Urgency</Text>
                            <Text flex={1} as='b' fontSize='md'>Gender</Text>
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
                            <Text flex={1} as='b' fontSize='md'>CEO</Text>
                            <Text flex={1} as='b' fontSize='md'>Good</Text>
                        </Flex>
                        <Flex >
                            <Text flex={1}>Job Location</Text>
                        </Flex>
                        <Flex >
                            <Text flex={1} as='b' fontSize='md'>Pune</Text>
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
                            <Text flex={1} as='b' fontSize='md'>Short</Text>
                            <Text flex={1} as='b' fontSize='md'>English</Text>
                        </Flex>
                        <Flex >
                            <Text flex={1}>Interview Mode</Text>
                        </Flex>
                        <Flex >
                            <Text flex={1} as='b' fontSize='md'>Offline</Text>
                        </Flex>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Box>

    )
}

export default DisplayBox