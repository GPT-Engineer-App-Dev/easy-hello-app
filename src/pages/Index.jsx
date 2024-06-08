import { Box, Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} centerContent>
      <VStack spacing={4} align="center" justify="center" height="100vh">
        <Heading as="h1" size="2xl">
          Hello World
        </Heading>
        <Text fontSize="lg">Welcome to your sleek and responsive React app!</Text>
      </VStack>
    </Container>
  );
};

export default Index;