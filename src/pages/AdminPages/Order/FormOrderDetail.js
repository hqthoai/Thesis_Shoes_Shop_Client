import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import orderService from '~/services/orderServices';
import CustomTypography from '~/components/CustomTyporaphy/CustomTyporaphy';
import Loading from '~/pages/Home/Loading/Loading';
export default function FormOrderDetail({ handleClose, id }) {
    const [order, setOrder] = React.useState({});
    const [open, setOpen] = React.useState(true);
    const [isLoadingData, setIsLoadingData] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    React.useEffect(() => {
        async function fetchOrder() {
            const order = await orderService.getOrderById(id);
            setIsLoadingData(false);
            setOrder(order);
        }
        fetchOrder();
    }, []);

    if (isLoadingData) {
        return <Loading />;
    }

    return (
        <React.Fragment>
            <Dialog open={true} onClose={handleClose}>
                <DialogTitle sx={{ fontSize: '3rem' }}>{'Order Details'}</DialogTitle>
                {order && (
                    <DialogContent sx={{ width: '500px' }}>
                        <Box>
                            <List
                                sx={{
                                    width: '100%',
                                    maxWidth: 500,
                                    bgcolor: 'background.paper',
                                }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SendIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<CustomTypography>ID:</CustomTypography>}
                                    />
                                    <CustomTypography> {order._id}</CustomTypography>
                                </ListItemButton>

                                <ListItemButton onClick={handleClick}>
                                    <ListItemIcon>
                                        <SendIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<CustomTypography>Sản phẩm:</CustomTypography>}
                                    />

                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                {order.items?.length > 0 &&
                                    order.items.map((item) => {
                                        return (
                                            <>
                                                <Collapse in={open} timeout="auto" unmountOnExit>
                                                    <List component="div" sx={{ ml: '4px' }}>
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                // alignItems: 'start',
                                                            }}
                                                        >
                                                            <Box sx={{ ml: 0 }}>
                                                                <img
                                                                    src={item.images}
                                                                    alt={item.name}
                                                                    height="50px"
                                                                    width="50px"
                                                                />
                                                            </Box>
                                                            <Box sx={{ ml: 2, mr: 'auto' }}>
                                                                <CustomTypography>
                                                                    {item.name}
                                                                </CustomTypography>
                                                                <CustomTypography>
                                                                    x{item.quantity}
                                                                </CustomTypography>
                                                            </Box>
                                                            <Box>
                                                                <CustomTypography>
                                                                    size: {item.size}
                                                                </CustomTypography>
                                                                <CustomTypography>
                                                                    {item.price} VND
                                                                </CustomTypography>
                                                            </Box>

                                                            {/* "{item.name}" "{item.price}" "
                                                            {item.quantity}" */}
                                                        </Box>
                                                    </List>
                                                </Collapse>
                                            </>
                                        );
                                    })}
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SendIcon />
                                    </ListItemIcon>

                                    <ListItemText
                                        primary={<CustomTypography>Tổng:</CustomTypography>}
                                    />
                                    <CustomTypography> {order.totalAmount}</CustomTypography>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SendIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <CustomTypography>
                                                Phương thức thanh toán:
                                            </CustomTypography>
                                        }
                                    />

                                    <CustomTypography> {order.paymentMethod}</CustomTypography>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SendIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <CustomTypography>Phí giao hàng:</CustomTypography>
                                        }
                                    />

                                    <CustomTypography> {order.shippingFee}</CustomTypography>
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SendIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<CustomTypography>Tình trạng:</CustomTypography>}
                                    />

                                    <CustomTypography> {order.status}</CustomTypography>
                                </ListItemButton>
                            </List>
                        </Box>
                    </DialogContent>
                )}
            </Dialog>
        </React.Fragment>
    );
}
