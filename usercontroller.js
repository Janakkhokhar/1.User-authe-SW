const User = require("../model/userpanel");



module.exports.adduser = async (req, res) => {
    try {

        if (req.body) {
            const checkData = await User.findOne({ task: req.body.task });
            if (checkData) {
                return res.status(200).json({ mes: "Post Data insert already", status: 1 })
            }
            else {
                req.body.Create = adminData.id;

                const newpost = await User.create(req.body);
                if (newpost) {
                    return res.status(200).json({ mes: "Post Data successfully insert", newpost: newpost, status: 1 })
                }
                else {
                    return res.status(200).json({ mes: "post not found", status: 0 })
                }

            }
        }
        else {
            return res.status(200).json({ mes: "User not found", status: 0 })
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ mes: "something worng", status: 0 })
    }
}


module.exports.edituser = async (req, res) => {
    try {
        let editdata = await User.findByIdAndUpdate(req.params.id, req.body)
        if (editdata) {
            return res.status(200).json({ mes: "Edit record sucessfully", editdata: editdata, status: 1 });
        }
        else {
            return res.status(200).json({ mes: "invliad Data", status: 0 });

        }
    } catch (error) {
        console.log(error);
        return req.status(400).json({ mes: "something worng", status: 0 })
    }
}

module.exports.deleteuser = async (req, res) => {
    try {
        let deletedata = await User.findByIdAndDelete(req.params.id, req.body)
        if (deletedata) {
            return res.status(200).json({ mes: "Delete record sucessfully", deletedata: deletedata, status: 1 });
        }
        else {
            return res.status(200).json({ mes: "invliad Data", status: 0 });

        }
    } catch (error) {
        console.log(error);
        return req.status(400).json({ mes: "something worng", status: 0 })
    }
}

