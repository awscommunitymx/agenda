import {Alert, AlertDescription, AlertIcon, AlertTitle} from "@chakra-ui/react";
import {IconType} from "react-icons";
import React from "react";


export interface AnnouncementProps {
    icon?: IconType,
    title: string,
    description: string
}

const Announcement: React.FC<AnnouncementProps> = ({icon, title, description}) => {

    return <Alert
        status='info'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
    >
        <AlertIcon boxSize='40px' mr={0} as={icon}/>
        <AlertTitle mt={4} mb={1} fontSize='lg'>
            {title}
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
            {description}
        </AlertDescription>
    </Alert>

}

export default Announcement;