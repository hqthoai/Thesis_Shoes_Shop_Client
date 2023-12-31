import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Link, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { CustomizeTextField } from '~/components/CustomizeTextField/CustomizeTextField';
import CustomTypography from '~/components/CustomTyporaphy/CustomTyporaphy';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 400,
}));

// customize for form Profile
function CustomizeGridProfile({ label, textField, forPassword, checkValidation }) {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
            <Box
                // located in the middle of the screen
                sx={{
                    margin: '0 auto',
                    p: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
                    <Box sx={{ minWidth: '170px' }}>
                        <CustomTypography noWrap>{label}</CustomTypography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <CustomizeTextField
                            label={textField}
                            inputProps={{
                                style: {
                                    width: '400px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                },
                            }}
                            variant="outlined"
                            required
                        >
                            {textField}
                        </CustomizeTextField>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default CustomizeGridProfile;
