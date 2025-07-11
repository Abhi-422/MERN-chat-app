import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d',

    })

    res.cookie('jwt', token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
        htttpOnly: true,    // prevent XSS attacks cross-site scripting attacks
        sameSite: 'None',   // ✅ allow cross-site cookie
        secure: true        // ✅ required for sameSite: None on HTTPS
    })

};

export default generateTokenAndSetCookie;