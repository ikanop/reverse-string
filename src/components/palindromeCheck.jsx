import {Typography, Box} from '@mui/material'
import {useState} from "react";

const PalindromeCheck = () => {
    const [text, setText] = useState("");

    const handleChange = (e) => setText(e.target.value);

    const isPalindrome = (str) => {
        return str === str.split('').reverse().join('');
    };

    const singleLetter = (str) => {
        return str.length === 1;
    };

    return (
        <Box>
            <Typography variant="h1" fontWeight="600" marginTop="2rem">{text}</Typography>
            <input type={text} value={text} onChange={handleChange}/>
            <Typography>
                {text
                    ? singleLetter(text)
                        ? "You can type more than that..."
                        : isPalindrome(text)
                            ? "Palindrome"
                            : "Not a palindrome"
                    : "Type something"}
            </Typography>
        </Box>
    );
};

export default PalindromeCheck;