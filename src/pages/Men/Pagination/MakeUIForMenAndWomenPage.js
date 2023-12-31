import React from 'react';
import { Box, Grid, Typography, styled, Stack } from '@mui/material';
import CustomTypography from '~/components/CustomTyporaphy/CustomTyporaphy';
function MakeUIForMenAndWomenPage({ forWomen }) {
    const src =
        'https://res.cloudinary.com/dd4gcajeh/image/upload/v1700368488/Gimme-shoes-images/Women-Page/fmale-adidas_tocvrf.webp';
    const src2 =
        'https://res.cloudinary.com/dd4gcajeh/image/upload/v1700368487/Gimme-shoes-images/Women-Page/girl-shoes_ojheny.webp';

    return (
        <Box>
            <CustomTypography sx={{ fontWeight: 'bold', fontSize: '20px', mb: 2 }}>
                Outstanding
            </CustomTypography>
            <Box
                sx={{
                    flexGrow: 1,
                    textAlign: 'center',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box borderRadius={'10px'}>
                            {forWomen ? (
                                <img
                                    src={src}
                                    alt={'Adidas '}
                                    height="500px"
                                    width="90%"
                                    style={{
                                        borderRadius: '10px',
                                        boxShadow: ' 0 3px 10px rgb(0 0 0 / 0.95)',
                                    }}
                                />
                            ) : (
                                <img
                                    src={
                                        'https://res.cloudinary.com/dd4gcajeh/image/upload/v1700285598/Gimme-shoes-images/Men-Shop-Page/adidas-sneakers.jpg'
                                    }
                                    alt={'Adidas '}
                                    height="500px"
                                    width="90%"
                                    style={{
                                        borderRadius: '10px',
                                        boxShadow: ' 0 3px 10px rgb(0 0 0 / 0.95)',
                                    }}
                                />
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box borderRadius={'10px'}>
                            {forWomen ? (
                                <img
                                    src={src2}
                                    alt={'Adidas '}
                                    height="500px"
                                    width="90%"
                                    style={{
                                        borderRadius: '10px',
                                        boxShadow: ' 0 3px 10px rgb(0 0 0 / 0.95)',
                                    }}
                                />
                            ) : (
                                <img
                                    src="https://res.cloudinary.com/dd4gcajeh/image/upload/v1700285597/Gimme-shoes-images/Men-Shop-Page/men-nike-air-max.webp"
                                    alt="Nike "
                                    height="500px"
                                    width="90%"
                                    style={{
                                        borderRadius: '10px',
                                        boxShadow: ' 0 3px 10px rgb(0 0 0 / 0.95)',
                                    }}
                                />
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <CustomTypography sx={{ fontWeight: 'bold', fontSize: '20px', mt: 4, mb: 2 }}>
                    Newest
                </CustomTypography>
                <DirectionStack forWomen={forWomen} />
            </Box>
        </Box>
    );
}

const featuredDataForMen = [
    {
        desc1: 'Run Your Run',
        desc2: 'Find Your Next Running Shoes',

        img: 'https://res.cloudinary.com/dd4gcajeh/image/upload/v1700316528/Gimme-shoes-images/Men-Shop-Page/running-shoes-not.jpg',
    },
    {
        desc1: 'Look Good. Feel Good. Run Better.',
        desc2: 'Find Styles Shoes You Like',
        img: 'https://res.cloudinary.com/dd4gcajeh/image/upload/v1700297694/Gimme-shoes-images/Men-Shop-Page/runner-headphones-nike_toj9bs.jpg',
    },
    {
        desc1: 'Look Good. Feel Good. Run Better.',
        desc2: 'Search Shoes You Like',
        img: 'https://res.cloudinary.com/dd4gcajeh/image/upload/v1700297693/Gimme-shoes-images/Men-Shop-Page/shoes-run-banner_plzi3f.jpg',
    },
];

const featuredDataForWomen = [
    {
        desc1: 'Run Your Run',
        desc2: 'Find Your Next Running Shoes',

        img: 'https://res.cloudinary.com/dd4gcajeh/image/upload/v1702272502/Gimme-shoes-images/Men-Shop-Page/women-1_vo2nhl.jpg',
    },
    {
        desc1: 'Look Good. Feel Good. Run Better.',
        desc2: 'Find Styles Shoes You Like',
        img: 'https://res.cloudinary.com/dd4gcajeh/image/upload/v1702272501/Gimme-shoes-images/Men-Shop-Page/women-2_mwlo47.webp',
    },
    {
        desc1: 'Look Good. Feel Good. Run Better.',
        desc2: 'Search Shoes You Like',
        img: 'https://res.cloudinary.com/dd4gcajeh/image/upload/v1702272501/Gimme-shoes-images/Men-Shop-Page/women-3_mcxty9.jpg',
    },
];

const CustomTypographyGenderPage = styled(Typography)(({ fontSize, fontWeight, color, top }) => ({
    fontSize: fontSize || '14px',
    fontWeight: fontWeight || 'normal',
    color: color || '#fff',
    position: 'absolute',
    bottom: '0',
    left: '15%',
    top: top || '80%',
    zIndex: '1',
    padding: '10px',
}));

// use to show image and description for some activities
export function DirectionStack({ forWomen }) {
    const featuredData = forWomen ? featuredDataForWomen : featuredDataForMen;
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    ml: '16px',
                    alignItems: 'center',
                }}
            >
                {featuredData.map((item, index) => (
                    <Box sx={{ mr: '16px', position: 'relative' }}>
                        <CustomTypographyGenderPage sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                            {item.desc1}
                        </CustomTypographyGenderPage>
                        <CustomTypographyGenderPage
                            sx={{ fontWeight: '500', fontSize: '14px', top: '85%' }}
                        >
                            {item.desc2}
                        </CustomTypographyGenderPage>
                        <img
                            src={item.img}
                            alt={'Adidas'}
                            height="500px"
                            width="415px"
                            style={{ borderRadius: '10px', objectFit: 'fill' }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default MakeUIForMenAndWomenPage;
