import { useState } from "react";
import { Button, Container, Flex, Group, Loader, Stepper, Text, useMantineTheme } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconDownload, IconFile, IconUpload, IconX } from "@tabler/icons";

export default function ExportImgFn() {
    const theme = useMantineTheme();
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));

    function handleFileDrop(files) {
        console.log(files);
        nextStep();
    }

    return <Container>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm" allowNextStepsSelect={false}>
            <Stepper.Step label="Upload file" pt={15} mb={20} pl={10}>
                <Dropzone
                    onDrop={(files) => handleFileDrop(files)}
                    accept={[MIME_TYPES.pdf]}
                >
                    <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                            <IconUpload
                                size={50}
                                stroke={1.5}
                                color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                size={50}
                                stroke={1.5}
                                color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconFile size={50} stroke={1.5} />
                        </Dropzone.Idle>
                        <div>
                            <Text size="xl" inline>
                                Drag PDF here or click to select PDF
                            </Text>
                            <Text size="sm" color="dimmed" inline mt={7}>
                                The file size should not exceed 5mb.
                            </Text>
                        </div>
                    </Group>
                </Dropzone>
                <Flex align="center" justify="center" my={20}>
                    <Button>
                        Convert
                    </Button>
                </Flex>
            </Stepper.Step>
            <Stepper.Step label="Convert file" pt={15} mb={20}>
                <Flex align="center" justify="center" my={20}>
                    <Loader />
                    <Text fz="md" ml={20}>
                        Converting file...
                    </Text>
                </Flex>
            </Stepper.Step>
            <Stepper.Step label="Download file" pt={15} mb={20} pr={10}>
                <Text fw={500} fz="md" align="center">
                    Done converting file.
                </Text>
                <Flex justify="center" py={15}>
                    <Button leftIcon={<IconDownload size="1rem" />}>
                        Download
                    </Button>
                </Flex>
            </Stepper.Step>
        </Stepper>
    </Container>
}