const createError = (status, message)=>{
    const err = new Error();
    err.status = 404;
    err.message = "user not found!";

    return err;
}

export default createError;