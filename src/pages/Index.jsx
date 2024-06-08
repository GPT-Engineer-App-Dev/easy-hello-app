import { Box, Container, Text, VStack, Heading } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box
        as="nav"
        w="100%"
        p={4}
        bg="blue.500"
        color="white"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={8}
      >
        <Box display="flex" alignItems="center">
          <FaHome size="24px" />
          <Text ml={2} fontSize="xl" fontWeight="bold">
            Home
          </Text>
        </Box>
      </Box>
      <VStack spacing={4} align="center" justify="center" height="70vh">
        <Heading as="h1" size="2xl">
          Hello World
        </Heading>
        <Text fontSize="lg">Welcome to your sleek and responsive React app!</Text>
      </VStack>
    </Container>
  );
};

export default Index;