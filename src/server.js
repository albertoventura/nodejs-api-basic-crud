const { PORT } = require('./constants/general');
const app = require('./app');

app.listen(PORT, () => {
    console.log(`server running at: localhost:${PORT}`);
})