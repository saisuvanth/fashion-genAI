import React, {useState} from 'react'
import {Avatar, Divider, Flex, Heading, IconButton, Text} from '@chakra-ui/react'
import {FiMenu} from 'react-icons/fi'
import NavItem from './NavItem'
import {HiOutlinePencilSquare} from "react-icons/hi2";
import {FaMagic} from "react-icons/fa";
import {RiLogoutCircleRLine} from "react-icons/ri";
import {useLocation} from "react-router";

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    const location = useLocation();

    const currentPath = location.pathname;

    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{background: 'none'}}
                    icon={<FiMenu/>}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                {
                    (currentPath === "/recommender") ?
                        <NavItem navSize={navSize}
                                 icon={FaMagic}
                                 title="Editor"
                                 description="This is the description for the dashboard."
                                 active/> :
                        <NavItem navSize={navSize}
                                 icon={FaMagic}
                                 title="Editor"
                                 description="This is the description for the dashboard."
                        />
                }

                {
                    (currentPath === "/editor") ? <NavItem
                            navSize={navSize}
                            icon={HiOutlinePencilSquare}
                            title="Editor"
                            active/> :
                        <NavItem
                            navSize={navSize}
                            icon={HiOutlinePencilSquare}
                            title="Editor"/>
                }


                <NavItem navSize={navSize} icon={RiLogoutCircleRLine} title="Logout"/>
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"}/>
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg"/>
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}