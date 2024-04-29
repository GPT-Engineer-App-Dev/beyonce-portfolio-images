import { Box, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Index = () => {
  const galleryImages = [
    { src: '/assets/images/beyonce1.jpg', alt: 'Beyonce performing' },
    { src: '/assets/images/beyonce2.jpg', alt: 'Beyonce on red carpet' },
    { src: '/assets/images/beyonce3.jpg', alt: 'Beyonce in a music video' },
    { src: '/assets/images/beyonce4.jpg', alt: 'Beyonce at an event' }
  ];

  return (
    <VStack spacing={8} p={5}>
      <Text fontSize="4xl" fontWeight="bold">Beyoncé</Text>
      <Text fontSize="md">Singer, Songwriter, Actress, and Record Producer</Text>
      <Box as="section" w="full">
        <Text fontSize="2xl" mb={4}>Gallery</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
          {galleryImages.map((image, index) => (
            <Image key={index} src={image.src} alt={image.alt} boxSize="250px" objectFit="cover" />
          ))}
        </SimpleGrid>
      </Box>
      <Box as="footer" pt={10}>
        <Text fontSize="lg" fontWeight="bold">Follow Beyoncé</Text>
        <Box d="flex" alignItems="center" justifyContent="center" gap={4}>
          <FaInstagram size="24px" />
          <FaTwitter size="24px" />
          <FaFacebookF size="24px" />
        </Box>
      </Box>
    </VStack>
  );
};

export default Index;