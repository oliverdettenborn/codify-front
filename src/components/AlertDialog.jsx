import React from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

export default function AlertDialogExample({ alertIsOpen, setAlertIsOpen, errorMessage }) {
  const onClose = () => setAlertIsOpen(false);
  const cancelRef = React.useRef();

  return (
    <AlertDialog
      isOpen={alertIsOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogBody>
            {errorMessage}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme="red" onClick={onClose} ml={3}>
              Fechar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
