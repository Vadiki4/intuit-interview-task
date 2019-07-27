const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
app.use(cors());
require('./Routes/appRoutes')(app);

app.listen(port, () => console.log(`API is running on ${port}`));
