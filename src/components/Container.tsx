import { Image, Container as UIContainer } from '@chakra-ui/react';
import { TChildrenProps } from '../types/props';
import { CRAZY_PIZZA_LOGO } from '../constants/assets';

function Container({ children }: TChildrenProps) {
  return (
    <UIContainer
      w="full"
      minH="320px"
      maxW="1200px"
      position="relative"
      bgColor="whiteAlpha.800"
      borderRadius="32px 2px"
      boxShadow="0px 10px 15px -3px rgba(0,0,0,0.5);"
      padding={6}
    >
      <Image
        position="absolute"
        right="4"
        top="4"
        boxSize="140px"
        objectFit="cover"
        src={CRAZY_PIZZA_LOGO}
        alt="Crazy Pizza Logo"
      />
      {children}
    </UIContainer>
  );
}

export default Container;
