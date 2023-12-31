import React, { useState, useEffect } from 'react';
import { Box, ButtonGroup, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomTypography from '~/components/CustomTyporaphy/CustomTyporaphy';
import EmptyCard from '~/pages/Checkout/EmptyCard/EmptyCard';
import SortingSection from '~/pages/Shop/Pagination/SortingSection';
import { LoadMoreProduct } from './RenderProductForGender';
import useProductFilter from '../Filter/MakeUseProductFilter';
import FilterBrandPriceByAccordion from '../FilterProductForGender';
import Loading from '~/pages/Home/Loading/Loading';

export default function ProductPageForGender({ selectedGender }) {
    const {
        storeValue,
        getValue,
        filteredProducts,
        hasProducts,
        brandFilteredProducts,
        _DATA,
        sorting,
        selectedPriceRange,
        selectedBrands,
        handleBrandFilter,
        handlePriceFilter,
        handleSortChange,
    } = useProductFilter();

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for 2 seconds
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, []); // Run this effect only once when the component mounts

    return (
        <Box sx={{ flexGrow: 1, minHeight: '100vh', mt: 4 }}>
            {/* <Box sx={{ flexGrow: 1, minHeight: '500vh', mt: 4 }}> */}
            <Box>
                <CustomTypography sx={{ fontWeight: 'bold', fontSize: '18px', mt: 4, mb: 2 }}>
                    {/* Lọc Sản Phẩm */}
                    Filter Products
                </CustomTypography>
                {/* filter by brand and price */}
                <FilterBrandPriceByAccordion
                    handleBrandFilter={handleBrandFilter}
                    selectedBrands={selectedBrands}
                    handlePriceFilter={handlePriceFilter}
                    selectedPriceRange={selectedPriceRange}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        ml: 6,
                        mr: 6,
                        mb: 2,
                    }}
                >
                    <Box sx={{ mt: 4 }}>
                        <SortingSection sorting={sorting} handleSortChange={handleSortChange} />
                    </Box>
                </Box>
            </Box>
            <Box>
                {hasProducts ? (
                    // <Box sx={{ ml: '100px', mr: '163px' }}>
                    <Box sx={{ ml: '140px', mr: '143px' }}>
                        <LoadMoreProduct
                            getValue={getValue}
                            _DATA={_DATA}
                            storeValue={storeValue}
                            filteredProducts={filteredProducts}
                            brandFilteredProducts={brandFilteredProducts}
                            sorting={sorting}
                            hasProducts={hasProducts}
                            navigate={navigate}
                            // selectedGender={'Nam'}
                            selectedGender={selectedGender}
                        />
                    </Box>
                ) : (
                    // <EmptyCard message={'No result is found'} />
                    <Loading />
                )}
            </Box>
        </Box>
    );
}
