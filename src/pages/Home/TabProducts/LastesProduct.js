import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import RecipeReviewCard from './ProductsCard';
// call some components are defined
import { CustomizeButton } from '~/components/CustomizeButton/CustomizeButton';
import { MakeProductsCard } from '~/components/MakeProductCards/MakeProductCards';
import { ToastMessage2 } from '~/components/MakeProductCards/MakeProductCards';
import productService from '~/services/productServices';
import Loading from '../Loading/Loading';

function LastesProduct() {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [listLastest, setListLastest] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // call api
    useEffect(() => {
        const fetchData = async () => {
            const listProduct = await productService.getLastestProduct();
            setListLastest(listProduct);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const handleNavigateToShop = () => {
        navigate('/shop');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Box sx={{ mt: 4 }}>
            <Box display="flex" sx={{ justifyContent: 'space-between' }}>
                {listLastest.length > 0 &&
                    listLastest.map((product, index) => {
                        if (index < 4) {
                            return (
                                <MakeProductsCard
                                    key={product._id}
                                    _id={product._id}
                                    images={product.images}
                                    name={product.name}
                                    price={product.price.toLocaleString()}
                                    rating={product.rating}
                                    label={product.priceSale}
                                    // labelNew={product.labelNew}
                                    // labelNew={true}
                                    sx={{ margin: '0 20px' }}
                                    mr={0}
                                    showToast={showToast}
                                    setShowToast={setShowToast}
                                    // show suitable toast message
                                    toastMessage={toastMessage}
                                    setToastMessage={setToastMessage}
                                />
                            );
                        }
                    })}
            </Box>
            <ToastMessage2
                message={toastMessage}
                type="success"
                showToast={showToast}
                setShowToast={setShowToast}
            />
            <CustomizeButton
                variant="contained"
                onClick={handleNavigateToShop}
                sx={{ mt: 0, mb: 6 }}
            >
                More Items
            </CustomizeButton>
        </Box>
    );
}

export default LastesProduct;
