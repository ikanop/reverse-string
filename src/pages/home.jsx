import PalindromeCheck from '../components/palindromeCheck.jsx';
import {Box} from '@mui/material'

const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center",
            gap: '2rem',
            height: '100vh',
        }}>
            <PalindromeCheck/>
        </Box>
    );
};

export default Home;