const responseFunction = (res, status, message, data, ok) => {
    res.status(status).json({
        message: message,
        data: data,
        ok: ok
    });
}

console.log("HI");

module.exports = responseFunction;