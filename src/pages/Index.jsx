import { Box, Button, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" m="0 auto" minH="100vh" bg="white">
        <Box as="header" w="full" py={4} px={8} boxShadow="sm">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg" letterSpacing="tighter">
              Jane Doe Art
            </Heading>
            <Flex align="center">
              <Link href="#gallery" mx={2}>
                Gallery
              </Link>
              <Link href="#about" mx={2}>
                About
              </Link>
              <Link href="#contact" mx={2}>
                Contact
              </Link>
            </Flex>
          </Flex>
        </Box>

        <VStack spacing={8} mt={10} px={8} align="stretch">
          <Box align="center">
            <Heading as="h2" size="xl" mb={4}>
              Welcome to My Art World
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Explore my collection of paintings and artwork.
            </Text>
          </Box>
          <Image src="https://images.unsplash.com/flagged/photo-1567934150921-7632371abb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nfGVufDB8fHx8MTcxNTQ0MTc3OXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" boxShadow="lg" />

          <Box id="gallery" pt={10}>
            <Heading as="h3" size="lg" mb={4}>
              Gallery
            </Heading>
            <Flex wrap="wrap" justify="center" gap={4}>
              <Image src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhaW50aW5nfGVufDB8fHx8MTcxNTQ0MTk0M3ww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" borderRadius="md" boxShadow="md" />
              <Image src="https://images.unsplash.com/photo-1579541814924-49fef17c5be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBwYWludGluZ3xlbnwwfHx8fDE3MTU0NDE3ODB8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" borderRadius="md" boxShadow="md" />
              <Image src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwYWludGluZ3xlbnwwfHx8fDE3MTU0NDE3Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" borderRadius="md" boxShadow="md" />
            </Flex>
          </Box>

          <Box id="about" pt={10}>
            <Heading as="h3" size="lg" mb={4}>
              About Me
            </Heading>
            <Text fontSize="md" color="gray.700">
              I am Jane Doe, a passionate painter based in New York. My work explores the relationship between modernity and nature.
            </Text>
          </Box>

          <Box id="contact" pt={10} pb={20}>
            <Heading as="h3" size="lg" mb={4}>
              Contact
            </Heading>
            <VStack spacing={3}>
              <Button colorScheme="blue" size="lg">
                Email Me
              </Button>
              <Flex>
                <Link href="https://instagram.com" isExternal>
                  <FaInstagram size="28px" />
                </Link>
                <Link href="https://twitter.com" isExternal mx={4}>
                  <FaTwitter size="28px" />
                </Link>
                <Link href="https://facebook.com" isExternal>
                  <FaFacebookSquare size="28px" />
                </Link>
              </Flex>
            </VStack>
          </Box>
        </VStack>

        <Box as="footer" w="full" py={4} px={8} bg="gray.100" mt="auto">
          <Flex justify="space-between" align="center">
            <Text fontSize="sm">© 2023 Jane Doe Art. All rights reserved.</Text>
            <Flex>
              <Link href="#privacy" mx={2}>
                Privacy Policy
              </Link>
              <Link href="#terms" mx={2}>
                Terms of Service
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
