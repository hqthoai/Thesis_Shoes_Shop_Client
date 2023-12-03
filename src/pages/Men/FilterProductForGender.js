import React from 'react';
import { Box, ListItemText, ListItemButton, Checkbox } from '@mui/material';
import { AttachMoneyOutlined } from '@mui/icons-material';
import StoreIcon from '@mui/icons-material/Store';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomTypography from '~/components/CustomTyporaphy/CustomTyporaphy';

// filter product for men and women page
// filter product by brand and price
function FilterBrandPriceByAccordion({
    handleBrandFilter,
    selectedBrands,
    handlePriceFilter,
    selectedPriceRange,
}) {
    const brands = ['Nike', 'Adidas', 'Puma', 'New Balance', 'Nai Kì'];
    const prices = [
        'Dưới 1,000,000đ',
        '1,000,000đ - 2,000,000đ',
        '2,000,000đ - 3,000,000đ',
        'Trên 3,000,000đ',
    ];
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <StoreIcon fontSize="large" />
                        <CustomTypography sx={{ ml: 4, fontSize: '16px', fontWeight: 'bold' }}>
                            Thương Hiệu
                        </CustomTypography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    {brands.map((brand, index) => (
                        <ListItemButton
                            key={index}
                            selected={selectedBrands.includes(brand)}
                            onClick={() => handleBrandFilter(brand)}
                        >
                            <Checkbox
                                checked={selectedBrands.includes(brand)}
                                onChange={() => handleBrandFilter(brand)}
                            />
                            <ListItemText
                                primary={
                                    <CustomTypography sx={{ fontSize: '14px' }} variant="body1">
                                        {brand}
                                    </CustomTypography>
                                }
                            />
                        </ListItemButton>
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <AttachMoneyOutlined fontSize="large" />
                        <CustomTypography sx={{ ml: 4, fontSize: '16px', fontWeight: 'bold' }}>
                            Giá
                        </CustomTypography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    {prices.map((price, index) => (
                        <ListItemButton
                            key={index}
                            selected={selectedPriceRange.includes(price)}
                            onClick={() => handlePriceFilter(price)}
                        >
                            <Checkbox
                                checked={selectedPriceRange.includes(price)}
                                onChange={() => handlePriceFilter(price)}
                            />
                            <ListItemText
                                primary={
                                    <CustomTypography sx={{ fontSize: '14px' }} variant="body1">
                                        {price}
                                    </CustomTypography>
                                }
                            />
                        </ListItemButton>
                    ))}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default FilterBrandPriceByAccordion;