import {Group, Text, useMantineTheme} from "@mantine/core";
import {Dropzone, MIME_TYPES} from "@mantine/dropzone";
import {IconFile, IconUpload, IconX} from "@tabler/icons";

export default function LabelFn() {
    const theme = useMantineTheme();

    return <div>
        <Dropzone
            onDrop={(files) => console.log('accepted files', files)}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={3 * 1024 ** 2}
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
    </div>
}