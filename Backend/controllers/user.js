const User = require("../models/User")

exports.regsiterUser = async (req, res) => {

    try {
        
        const { name, email, password } = req.body;

        let user = await User.findOne({ email }).select("+password");

        if(user) return res.status(400).json({
            success: false,
            message: 'User already exists'
        })

        user = await User.create({
            name, 
            email, 
            password, 
            avatar: {
                public_id:"sample_id", 
                url: "sample_url"
            },
        });

        res.status(201).json({
            success: true,
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }

};

exports.login = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(!user) return res.status(400).json({
            success: false,
            message: "User does not exist"
        })

        const isMatch = await user.matchPassword(password);

        if(!isMatch) return res.status(400).json({
            success: false,
            message: "Icorrect password"
        })

        const token = await user.generateToken();

        res.status(200).cookis("token", token).json({
            success: true,
            user,
            token,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}