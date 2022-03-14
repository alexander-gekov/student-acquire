import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Image,
} from "@chakra-ui/react";

export function ListingCard() {
  return (
    <Flex p={50} w="full" alignItems="center">
      <Flex
        mx="auto"
        p={8}
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
      >
        <Box
          w={1 / 3}
          bgSize="cover"
          style={{
            backgroundImage:
              "url('https://www.pushkeep.com/assets/img/logo.png')",
            width: "200px",
            height: "200px",
          }}
        ></Box>

        <Box w={2 / 3} p={{ base: 4, md: 4 }}>
          <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            PushKeep
          </chakra.h1>

          <chakra.p
            mt={2}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            PushKeep brings all of your devices together and lets you share
            text, links, and files seamlessly between them.
          </chakra.p>

          <HStack spacing={2} mt={4} display="flex" alignItems="start">
            <Flex alignItems="center">
              <Image
                src="https://bit.ly/dan-abramov"
                boxSize="40px"
                rounded="full"
                mr={2}
              ></Image>
              <chakra.p>Aleksandar Gekov</chakra.p>
            </Flex>
            <Flex alignItems="center">
              <Image
                src="https://randomuser.me/api/portraits/men/4.jpg"
                boxSize="40px"
                rounded="full"
                mr={2}
              ></Image>
              <chakra.p>Georgi Manev</chakra.p>
            </Flex>
            <Flex alignItems="center">
              <Image
                src="https://api.uifaces.co/our-content/donated/ukegoVAy.jpg"
                boxSize="40px"
                rounded="full"
                mr={2}
              ></Image>
              <chakra.p>Viktor Naydenov</chakra.p>
            </Flex>
            <Flex alignItems="center">
              <Image
                src="https://randomuser.me/api/portraits/women/65.jpg"
                boxSize="40px"
                rounded="full"
                mr={2}
              ></Image>
              <chakra.p>Elena Nikolova</chakra.p>
            </Flex>
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
}
