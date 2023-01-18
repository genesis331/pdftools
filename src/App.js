import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import {AppShell, Center, Flex, Group, Header, Navbar, Stack, Text, ThemeIcon, UnstyledButton} from "@mantine/core";
import { IconPhoto, IconLayersLinked, IconLock, IconFileInfo, IconStack2, IconFileDigit, IconFileZip } from "@tabler/icons";
import MergeFn from "./pages/MergeFn";
import CompressFn from "./pages/CompressFn";
import OrganizeFn from "./pages/OrganizeFn";
import ExportImgFn from "./pages/ExportImgFn";
import LabelFn from "./pages/LabelFn";
import GetInfoFn from "./pages/GetInfoFn";
import LockFn from "./pages/LockFn";

function NavBarButtons({color, icon, label, onClick}) {
    return <UnstyledButton
        sx={(theme) => ({
            display: 'block',
            width: '100%',
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            }
        })}
        onClick={onClick}
    >
        <Group>
            <ThemeIcon color={color} variant="light">
                {icon}
            </ThemeIcon>
            <Text size="sm">{label}</Text>
        </Group>
    </UnstyledButton>
}
function NavbarComponent() {
    const navigate = useNavigate();
    return (
        <Navbar width={{ base: 260 }} height="100%" p="md">
            <Stack>
                <NavBarButtons color="blue" icon={<IconLayersLinked />} label="Merge PDFs" onClick={() => {navigate("/merge");}}/>
                <NavBarButtons color="blue" icon={<IconFileZip />} label="Compress PDF" onClick={() => {navigate("/compress");}}/>
                <NavBarButtons color="blue" icon={<IconPhoto />} label="PDF to PNG" onClick={() => {navigate("/exportimg");}}/>
                <NavBarButtons color="blue" icon={<IconStack2 />} label="Organize PDF" onClick={() => {navigate("/organize");}}/>
                <NavBarButtons color="blue" icon={<IconFileDigit />} label="Add Page Numbers" onClick={() => {navigate("/label");}}/>
                <NavBarButtons color="blue" icon={<IconFileInfo />} label="Extract Metadata" onClick={() => {navigate("/getinfo");}}/>
                <NavBarButtons color="blue" icon={<IconLock />} label="Protect PDF" onClick={() => {navigate("/lock");}}/>
            </Stack>
        </Navbar>
    );
}

function HeaderComponent() {
    return (
        <Header height={60} p="xs">
            <Flex align="center" justify="space-between" style={{height: "100%"}}>
                <Text fw={700} style={{paddingInline: 20}}>
                    <Link to="/" style={{textDecoration: "none", color: "initial"}}>pdftools</Link>
                </Text>
            </Flex>
        </Header>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppShell
                padding="md"
                navbar={<NavbarComponent />}
                header={<HeaderComponent />}
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}
            >
                <Routes>
                    <Route path="/" element={<Center>&nbsp;</Center>} />
                    <Route path="/compress" element={<CompressFn />} />
                    <Route path="/merge" element={<MergeFn />} />
                    <Route path="/organize" element={<OrganizeFn />} />
                    <Route path="/exportimg" element={<ExportImgFn />} />
                    <Route path="/label" element={<LabelFn />} />
                    <Route path="/getinfo" element={<GetInfoFn />} />
                    <Route path="/lock" element={<LockFn />} />
                </Routes>
            </AppShell>
        </BrowserRouter>
    );
}

export default App;
