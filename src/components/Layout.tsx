import { Center } from '@chakra-ui/react';
import { TChildrenProps } from '../types/props';

function Layout({ children }: TChildrenProps) {
  return (
    <Center justifyContent="center" minH="100vh" bgColor="transparent">
      {children}
    </Center>
  );
}

export default Layout;
