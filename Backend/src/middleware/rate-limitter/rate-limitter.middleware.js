import rate_limit from 'express-rate-limit'

const create_rate_limit = (timeInMinutes,maxAttempts,customMessage) =>  {
    return rate_limit({
        windowMs: timeInMinutes * 60 * 1000,
        max: maxAttempts * 60 * 1000,
        message: customMessage
    });
};

export default create_rate_limit;