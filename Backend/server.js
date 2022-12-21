const app = require('./app');
const { connectDatabase } = require('./configs/database');
const PORT = process.env.PORT;
connectDatabase();

app.listen(PORT, () => {
    console.log(`Server is listing at http://localhost:${PORT}`);
})