import React, {useEffect, useState} from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from '@chakra-ui/react';

const FeedbackModal = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [hasClicked, setHasClicked] = useState(false);

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const targetDate = new Date('2024-10-05T15:00:00-06:00');

            // Check if it's after October 5, 2024, 3:00 PM
            if (now >= targetDate) {
                // Check if the user hasn't clicked before
                const hasClickedBefore = localStorage.getItem('modalClicked');
                if (!hasClickedBefore) {
                    onOpen();
                }
            }
        };

        checkTime();
        // Check every minute
        const interval = setInterval(checkTime, 60000);

        return () => clearInterval(interval);
    }, [onOpen]);

    const handleExternalClick = () => {
        setHasClicked(true);
        localStorage.setItem('modalClicked', 'true');
        // Replace with your external URL
        window.open('https://example.com', '_blank');
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen && !hasClicked}
            onClose={onClose}
            isCentered // This ensures the modal is centered
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>¡Queremos saber tu opinion!</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Text>

                        Gracias por participar en el AWS Community Day México 2024. Nos encantaría conocer tu
                        experiencia.
                    </Text>
                    <br/>
                    <Text>
                        ¿Podrías tomarte un momento para compartir tu feedback? Tu opinión nos ayudará a mejorar futuros
                        eventos.
                    </Text>
                </ModalBody>
                <ModalFooter alignItems="center">
                    <Button colorScheme="blue" mr={3} onClick={handleExternalClick} width={"100%"}>
                        Compartir mi feedback
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default FeedbackModal;