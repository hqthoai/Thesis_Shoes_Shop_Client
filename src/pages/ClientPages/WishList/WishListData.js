import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Tooltip,
    IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromWishlist } from '~/redux/WishListManagement/wishlistActions';
import CustomTypography from '~/components/CustomTyporaphy/CustomTyporaphy';
import { PopUpMessage } from '~/pages/Checkout/ProductsInCard/SummaryStep/SummaryStepData/ProductsTable';
import EmptyCard from '~/pages/Checkout/EmptyCard/EmptyCard';
const CustomizeTableCell = styled(TableCell)({
    fontSize: '18px',
    borderRadius: '20px',
    align: 'center',
});

const WishListTable = () => {
    const dispatch = useDispatch();
    const selectWishlistItems = useSelector((state) => state.wishlist.wishlistItems);

    // Một state để theo dõi hàng nào đang mở hộp thoại xác nhận
    const [openConfirmationMap, setOpenConfirmationMap] = useState({});

    const handleRemoveFromWishlist = (productId) => {
        // Mở hộp thoại xác nhận khi bấm vào nút xóa
        setOpenConfirmationMap((prev) => ({ ...prev, [productId]: true }));
    };

    const handleCancelRemove = (productId) => {
        // Đóng hộp thoại xác nhận khi hủy bỏ
        setOpenConfirmationMap((prev) => ({ ...prev, [productId]: false }));
    };

    const removeItem = (productId) => {
        dispatch(removeFromWishlist(productId));
        // Đóng hộp thoại xác nhận sau khi xóa thành công
        setOpenConfirmationMap((prev) => ({ ...prev, [productId]: false }));
    };

    const handleConfirmRemove = (productId) => {
        if (productId !== null) {
            removeItem(productId);
        }
    };

    // không có sản phẩm nào trong wish list
    if (selectWishlistItems.length === 0) {
        // return <div>No items in the wishlist.</div>;
        return <EmptyCard message={'Không Có Sản Phẩm Nào Trong Danh Sách Yêu Thích!'} />;
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <CustomizeTableCell>Remove Icon</CustomizeTableCell>
                        <CustomizeTableCell>Image</CustomizeTableCell>
                        <CustomizeTableCell>Products Name</CustomizeTableCell>
                        <CustomizeTableCell>Unit Price</CustomizeTableCell>
                        <CustomizeTableCell>Stock Status</CustomizeTableCell>
                        <CustomizeTableCell>Shopping</CustomizeTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {selectWishlistItems.map((product) => (
                        <TableRow
                            key={product.productId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <CustomizeTableCell align="left">
                                <Tooltip
                                    arrow
                                    title={
                                        <CustomTypography fontSize="11px">Delete</CustomTypography>
                                    }
                                >
                                    <IconButton
                                        onClick={() => handleRemoveFromWishlist(product.productId)}
                                    >
                                        <DeleteIcon fontSize="large" />
                                    </IconButton>
                                    {openConfirmationMap[product.productId] && (
                                        <PopUpMessage
                                            open={openConfirmationMap}
                                            title="Confirm Removal"
                                            message="Are you sure you want to remove this item from your wishlist?"
                                            onCancel={() => handleCancelRemove(product.productId)}
                                            onConfirm={() => handleConfirmRemove(product.productId)}
                                        />
                                    )}
                                </Tooltip>
                            </CustomizeTableCell>
                            <CustomizeTableCell borderRadius="20px">
                                <img
                                    src={product.image}
                                    alt={`Product: ${product.title}`}
                                    style={{ width: '50px' }}
                                />
                            </CustomizeTableCell>
                            <CustomizeTableCell>{product.title}</CustomizeTableCell>
                            <CustomizeTableCell>{product.price}</CustomizeTableCell>
                            <CustomizeTableCell>
                                {product.stockStatus ? 'In Stock' : 'Sold Out'}
                            </CustomizeTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default WishListTable;
