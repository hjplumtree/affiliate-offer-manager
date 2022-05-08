import { Flex, Box, Text } from "@chakra-ui/react";
import RouterLink from "./RouterLink";
import Image from "next/image";

export default function NetworkSiteList({
  imageUrl,
  name,
  subtitle,
  endpoint,
}) {
  return (
    <Flex alignItems="center">
      <Image src={imageUrl} alt={name} width={30} height={30} />
      <Box marginLeft={3}>
        <Text>
          <strong>{name}</strong>
        </Text>
        <Text>{subtitle}</Text>
      </Box>
      {endpoint ? (
        <Flex
          marginLeft="auto"
          border="1px solid #3A0CA3"
          color="#3A0CA3"
          borderRadius={5}
        >
          <RouterLink to={`/networks/${endpoint}`}>Setting</RouterLink>
        </Flex>
      ) : (
        <Box p={1} borderRadius={5} marginLeft="auto" bg="#A3EED6">
          <Text fontSize="xs" color="#1AD598">
            Checking
          </Text>
        </Box>
      )}
    </Flex>
  );
}
