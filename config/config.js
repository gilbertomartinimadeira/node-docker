module.exports = {
    MONGO_IP: process.env.MONGO_IP || "localhost",
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_USER: process.env.MONGO_USER || "gil",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin123",
    REDIS_URL : process.env.REDIS_URL || "localhost",
    REDIS_PORT: process.env.REDIS_PORT || 6379,
    SESSION_SECRET: process.env.SESSION_SECRET || "vovómiauouvovótatá"
};