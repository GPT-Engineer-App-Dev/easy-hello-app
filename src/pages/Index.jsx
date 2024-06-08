import { Box, Container, Text, VStack, Flex, Spacer, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem">
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <Box>
          <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">Hello World</Text>
          <Text fontSize="lg">Welcome to your sleek and responsive React app!</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;