import { ContainerProps as UIContainerProps, Image, Container as UIContainer } from '@chakra-ui/react';
import { TChildrenProps } from '../types/props';
import { CRAZY_PIZZA_LOGO } from '../constants/assets';

type OmitUIContainerProps = Partial<
  Omit<UIContainerProps, 'w' | 'width' | 'maxW' | 'position' | 'bgColor' | 'borderRadius' | 'boxShadow'>
>;

type ContainerProps = TChildrenProps & OmitUIContainerProps;

function Container({ children, ...otherProps }: ContainerProps) {
  return (
    <UIContainer
      w="full"
      minH="320px"
      maxW="1280px"
      position="relative"
      bgColor="whiteAlpha.800"
      borderRadius="32px 2px"
      boxShadow="0px 10px 15px -3px rgba(0,0,0,0.5);"
      padding={5}
      {...otherProps}
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
