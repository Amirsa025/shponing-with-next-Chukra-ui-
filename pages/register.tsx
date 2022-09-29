import React, {memo} from 'react';
import {
    Avatar,
    AvatarGroup,
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    IconProps,
    SimpleGrid,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import type { NextPage } from 'next'
import BlurComponent from '../Components/shared/Blur'
import RegisterForm from "../app/forms/authentication/register-Form";

const avatars = [
    {
        name: 'Ryan Florence',
        url: 'https://bit.ly/ryan-florence',
    },
    {
        name: 'Segun Adebayo',
        url: 'https://bit.ly/sage-adebayo',
    },
    {
        name: 'Kent Dodds',
        url: 'https://bit.ly/kent-c-dodds',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'https://bit.ly/prosper-baba',
    },
    {
        name: 'Christian Nwamba',
        url: 'https://bit.ly/code-beast',
    },
];

const Register:NextPage= () => {
    return (
        <Stack>
            <Box position={'relative'}>
                <Container
                    as={SimpleGrid}
                    maxW={'7xl'}
                    columns={{base: 1, md: 2}}
                    spacing={{base: 10, lg: 32}}
                    py={{base: 10, sm: 20, lg: 32}}>
                    <Stack spacing={{base: 10, md: 20}}>
                        <Heading
                            lineHeight={1.1}
                            fontSize={{base: '3xl', sm: '4xl', md: '5xl', lg: '6xl'}}>
                            Shopping Cart{' '}
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text">
                                &
                            </Text>{' '}

                            Register to sign up
                        </Heading>
                        <Stack direction={'row'} spacing={4} align={'center'}>
                            <AvatarGroup>
                                {avatars.map((avatar) => (
                                    <Avatar
                                        key={avatar.name}
                                        name={avatar.name}
                                        src={avatar.url}
                                        size={useBreakpointValue({base: 'md', md: 'lg'})}
                                        position={'relative'}
                                        zIndex={2}
                                        _before={{
                                            content: '""',
                                            width: 'full',
                                            height: 'full',
                                            rounded: 'full',
                                            transform: 'scale(1.125)',
                                            bgGradient: 'linear(to-bl, red.400,pink.400)',
                                            position: 'absolute',
                                            zIndex: -1,
                                            top: 0,
                                            left: 0,
                                        }}
                                    />
                                ))}
                            </AvatarGroup>
                            <Text fontFamily={'heading'} fontSize={{base: '4xl', md: '6xl'}}>
                                +
                            </Text>
                            <Flex
                                align={'center'}
                                justify={'center'}
                                fontFamily={'heading'}
                                fontSize={{base: 'sm', md: 'lg'}}
                                bg={'gray.800'}
                                color={'white'}
                                rounded={'full'}
                                width={useBreakpointValue({base: '44px', md: '60px'})}
                                height={useBreakpointValue({base: '44px', md: '60px'})}
                                position={'relative'}
                                _before={{
                                    content: '""',
                                    width: 'full',
                                    height: 'full',
                                    rounded: 'full',
                                    transform: 'scale(1.125)',
                                    bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                                    position: 'absolute',
                                    zIndex: -1,
                                    top: 0,
                                    left: 0,
                                }}>
                                YOU
                            </Flex>
                        </Stack>
                    </Stack>
                    <Stack
                        bg={'gray.50'}
                        rounded={'xl'}
                        p={{base: 4, sm: 6, md: 8}}
                        spacing={{base: 8}}
                        maxW={{lg: 'lg'}}>
                        <Stack spacing={4}>
                            <Heading
                                color={'gray.800'}
                                lineHeight={1.1}
                                fontSize={{base: '2xl', sm: '3xl', md: '4xl'}}>
                                Join our team
                                <Text
                                    as={'span'}
                                    bgGradient="linear(to-r, red.400,pink.400)"
                                    bgClip="text">
                                    !
                                </Text>
                            </Heading>
                            <Text color={'gray.500'} fontSize={{base: 'sm', sm: 'md'}} textAlign="right">
                                برای ورود به سایت با توجه مقادیر زیر برای پر کنید.
                            </Text>
                        </Stack>
                        <RegisterForm/>
                    </Stack>
                </Container>
                <BlurComponent
                    position={'absolute'}
                    top={-10}
                    left={-10}
                    style={{filter: 'blur(70px)'}}
                />
            </Box>
        </Stack>
    );
}
export default memo(Register)
