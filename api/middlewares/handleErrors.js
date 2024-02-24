

const handleErrors = (req, res, err) => {

    res.status(422).json({ message: err.message })
}

module.exports = {
    handleErrors
}