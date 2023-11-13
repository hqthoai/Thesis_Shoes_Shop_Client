import React from 'react';
import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    ToggleButton,
    Typography,
    styled,
} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import PaidIcon from '@mui/icons-material/Paid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArchiveIcon from '@mui/icons-material/Archive';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SyncIcon from '@mui/icons-material/Sync';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import CustomTableCell from '~/pages/AdminPages/CustomTableCell/CustomTableCell';

const dataPie = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const StyledTypography = styled(Typography)({
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#6C737F',
    letterSpacing: '0.05rem',
    lineHeight: '3rem',
    mb: '0.35rem',
    textTransform: 'uppercase',
});

const StyledMenuItem = styled(MenuItem)({
    fontSize: '1.4rem',
});

const data = [
    {
        name: 'Tháng 1',
        current: 4000,
        lastYear: 4000,
    },
    {
        name: 'Tháng 2',
        current: 3000,
        lastYear: 3000,
    },
    {
        name: 'Tháng 3',
        current: 2000,
        lastYear: 2000,
    },
    {
        name: 'Tháng 4',
        current: 2780,
        lastYear: 2780,
    },
    {
        name: 'Tháng 5',
        current: 1890,
        lastYear: 1890,
    },
    {
        name: 'Tháng 6',
        current: 2390,
        lastYear: 2390,
    },
    {
        name: 'Tháng 7',
        current: 3490,
        lastYear: 3490,
    },
    {
        name: 'Tháng 8',
        current: 2490,
        lastYear: 2490,
    },
    {
        name: 'Tháng 9',
        current: 3440,
        lastYear: 3440,
    },
    {
        name: 'Tháng 10',
        current: 3030,
        lastYear: 3030,
    },
    {
        name: 'Tháng 11',
        current: 1290,
        lastYear: 1290,
    },
    {
        name: 'Tháng 12',
        current: 6490,
        lastYear: 6490,
    },
];

const getIntroOfPage = (label) => {
    if (label === 'Page A') {
        return "Page A is about men's clothing";
    }
    if (label === 'Page B') {
        return "Page B is about women's dress";
    }
    if (label === 'Page C') {
        return "Page C is about women's bag";
    }
    if (label === 'Page D') {
        return 'Page D is about household goods';
    }
    if (label === 'Page E') {
        return 'Page E is about food';
    }
    if (label === 'Page F') {
        return 'Page F is about baby food';
    }
    return '';
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <p className="intro">{getIntroOfPage(label)}</p>
                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }

    return null;
};

function Dashboard() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                {/* Total earning */}
                <Grid xs={6} md={3}>
                    <Paper elevation={0} sx={{ position: 'relative', boxShadow: 'none' }}>
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardContent
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    sx={{
                                        boxShadow: 'none',
                                    }}
                                >
                                    <StyledMenuItem onClick={handleClose}>
                                        <ArchiveIcon sx={{ mr: 1 }} />
                                        Archive
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={handleClose}>
                                        <PictureAsPdfIcon sx={{ mr: 1 }} />
                                        Export
                                    </StyledMenuItem>
                                </Menu>
                                <Grid
                                    container
                                    sx={{
                                        mt: 2,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Grid>
                                        <StyledTypography>Total Earning</StyledTypography>
                                        <Typography
                                            variant="h1"
                                            component="h4"
                                            sx={{ fontSize: 32, fontWeight: 600 }}
                                            gutterBottom
                                        >
                                            $50000
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Avatar sx={{ bgcolor: '#f04438', width: 56, height: 56 }}>
                                            <PaidIcon sx={{ width: 24, height: 24 }}></PaidIcon>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                {/* Total customer */}
                <Grid xs={6} md={3}>
                    <Paper elevation={0} sx={{ position: 'relative', boxShadow: 'none' }}>
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardContent
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                    <StyledMenuItem onClick={handleClose}>
                                        <ArchiveIcon sx={{ mr: 1 }} />
                                        Archive
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={handleClose}>
                                        <PictureAsPdfIcon sx={{ mr: 1 }} />
                                        Export
                                    </StyledMenuItem>
                                </Menu>
                                <Grid
                                    container
                                    sx={{
                                        mt: 2,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Grid>
                                        <StyledTypography>Total Customers</StyledTypography>
                                        <Typography
                                            variant="h1"
                                            component="h4"
                                            sx={{ fontSize: 32, fontWeight: 600 }}
                                            gutterBottom
                                        >
                                            5000
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Avatar sx={{ bgcolor: '#10B981', width: 56, height: 56 }}>
                                            <PeopleAltIcon
                                                sx={{ width: 24, height: 24 }}
                                            ></PeopleAltIcon>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                {/* Total order */}
                <Grid xs={6} md={3}>
                    <Paper elevation={0} sx={{ position: 'relative', boxShadow: 'none' }}>
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardContent
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                    <StyledMenuItem onClick={handleClose}>
                                        <ArchiveIcon sx={{ mr: 1 }} />
                                        Archive
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={handleClose}>
                                        <PictureAsPdfIcon sx={{ mr: 1 }} />
                                        Export
                                    </StyledMenuItem>
                                </Menu>
                                <Grid
                                    container
                                    sx={{
                                        mt: 2,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Grid>
                                        <StyledTypography>Total Orders</StyledTypography>
                                        <Typography
                                            variant="h1"
                                            component="h4"
                                            sx={{ fontSize: 32, fontWeight: 600 }}
                                            gutterBottom
                                        >
                                            500
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Avatar sx={{ bgcolor: '#f79009', width: 56, height: 56 }}>
                                            <ShoppingBasketIcon
                                                sx={{ width: 24, height: 24 }}
                                            ></ShoppingBasketIcon>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                {/* Total profit */}
                <Grid xs={6} md={3}>
                    <Paper elevation={0} sx={{ position: 'relative', boxShadow: 'none' }}>
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardContent
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    sx={{
                                        boxShadow: 'none',
                                    }}
                                >
                                    <StyledMenuItem onClick={handleClose}>
                                        <ArchiveIcon sx={{ mr: 1 }} />
                                        Archive
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={handleClose}>
                                        <PictureAsPdfIcon sx={{ mr: 1 }} />
                                        Export
                                    </StyledMenuItem>
                                </Menu>
                                <Grid
                                    container
                                    sx={{
                                        mt: 2,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Grid>
                                        <StyledTypography>Total Profit</StyledTypography>
                                        <Typography
                                            variant="h1"
                                            component="h4"
                                            sx={{ fontSize: 32, fontWeight: 600 }}
                                            gutterBottom
                                        >
                                            $42000
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Avatar sx={{ bgcolor: '#6366f1', width: 56, height: 56 }}>
                                            <PaidIcon sx={{ width: 24, height: 24 }}></PaidIcon>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                {/* Sales Chart  */}
                <Grid xs={12} md={12} lg={8}>
                    <Paper
                        elevation={0}
                        sx={{ position: 'relative', boxShadow: 'none', fontSize: '1.3rem' }}
                    >
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardHeader
                                title={
                                    <Typography
                                        sx={{
                                            fontSize: '2rem',
                                            fontWeight: 600,
                                            paddingLeft: 4,
                                        }}
                                    >
                                        Sales
                                    </Typography>
                                }
                                action={
                                    <IconButton>
                                        <SyncIcon sx={{ width: 24, height: 24 }} />
                                    </IconButton>
                                }
                            />

                            <CardContent
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <BarChart
                                    width={550}
                                    height={350}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <XAxis
                                        dataKey="name"
                                        padding={{ left: 10, right: 10 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        padding={{ bottom: 10 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <Tooltip content={<CustomTooltip />} />

                                    <Bar dataKey="current" fill="#6366f1" />
                                    <Bar dataKey="lastYear" fill="#badaf9" />
                                </BarChart>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                {/* Pie Chart */}
                <Grid xs={12} md={6} lg={4}>
                    <Paper elevation={0} sx={{ position: 'relative' }}>
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardHeader
                                title={
                                    <Typography
                                        sx={{
                                            fontSize: '2rem',
                                            fontWeight: 600,
                                            paddingLeft: 4,
                                        }}
                                    >
                                        Traffic Source
                                    </Typography>
                                }
                            />
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center', // Canh giữa theo chiều ngang
                                    justifyContent: 'center', // Canh giữa theo chiều dọc
                                    minHeight: 0, // Đảm bảo CardContent có kích thước tối thiểu
                                }}
                            >
                                <PieChart width={280} height={350}>
                                    <Pie
                                        data={dataPie}
                                        cx={140} // Điều chỉnh vị trí theo chiều ngang
                                        cy={175} // Điều chỉnh vị trí theo chiều dọc
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {dataPie.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>
                                    <Legend />
                                </PieChart>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                {/* Lastest Product  */}
                <Grid xs={12} md={6} lg={4}>
                    <Paper
                        elevation={0}
                        sx={{ position: 'relative', boxShadow: 'none', fontSize: '1.3rem' }}
                    >
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardHeader
                                title={
                                    <Typography
                                        sx={{
                                            fontSize: '2rem',
                                            fontWeight: 600,
                                            paddingLeft: 4,
                                        }}
                                    >
                                        Latest Products
                                    </Typography>
                                }
                            />
                            <CardContent sx={{ justifyContent: 'space-between' }}>
                                <Stack
                                    spacing={2}
                                    divider={<Divider orientation="horizontal" flexItem />}
                                >
                                    <Stack spacing={2} direction="row" alignItems="center">
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 151, height: 50 }}
                                            image="https://img.vn/uploads/version/img24-png-20190726133727cbvncjKzsQ.png"
                                            alt="Live from space album cover"
                                        />
                                        <Typography component="div" variant="h5">
                                            Adidas Nike Puma
                                        </Typography>
                                        <IconButton>
                                            <MoreVertIcon sx={{ height: 25, width: 25 }} />
                                        </IconButton>
                                    </Stack>
                                    <Stack spacing={2} direction="row" alignItems="center">
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 151, height: 50 }}
                                            image="https://img.vn/uploads/version/img24-png-20190726133727cbvncjKzsQ.png"
                                            alt="Live from space album cover"
                                        />
                                        <Typography component="div" variant="h5">
                                            Adidas Nike Puma
                                        </Typography>
                                        <IconButton>
                                            <MoreVertIcon sx={{ height: 25, width: 25 }} />
                                        </IconButton>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                {/* Lastest Orders  */}
                <Grid xs={12} md={12} lg={8}>
                    <Paper
                        elevation={0}
                        sx={{ position: 'relative', boxShadow: 'none', fontSize: '1.4rem' }}
                    >
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardHeader
                                title={
                                    <Typography
                                        sx={{
                                            fontSize: '2rem',
                                            fontWeight: 600,
                                            paddingLeft: 4,
                                        }}
                                    >
                                        Latest Orders
                                    </Typography>
                                }
                            />
                            <Box>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 600 }}>
                                        <TableHead>
                                            <TableRow>
                                                <CustomTableCell>ORDER</CustomTableCell>
                                                <CustomTableCell align="left">
                                                    CUSTOMER
                                                </CustomTableCell>
                                                <CustomTableCell align="left">DATE</CustomTableCell>
                                                <CustomTableCell align="left">
                                                    STATUS
                                                </CustomTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow
                                                key="1"
                                                sx={{
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0,
                                                    },
                                                }}
                                            >
                                                <CustomTableCell component="th" scope="row">
                                                    DEV1049
                                                </CustomTableCell>
                                                <CustomTableCell align="left">
                                                    Ekaterina Tankova
                                                </CustomTableCell>
                                                <CustomTableCell align="left">
                                                    12/04/2019
                                                </CustomTableCell>
                                                <CustomTableCell align="left">
                                                    Pending
                                                </CustomTableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboard;
