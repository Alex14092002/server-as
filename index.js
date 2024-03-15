const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const brandRoutes = require('./routes/brandRoutes');
const fs = require('fs'); // Import module for file system operations

const https = require('https');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Cấu hình cho HTTPS
const privateKey = fs.readFileSync('key.pem', 'utf8');
const certificate = fs.readFileSync('cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Sử dụng các credentials cho máy chủ HTTPS
const httpsServer = https.createServer(credentials, app);

// Kết nối tới MongoDB
mongoose.connect('mongodb://150.95.112.132:27017/data-as', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Sử dụng routes
app.use('/api/products', productRoutes);
app.use('/api/brands' , brandRoutes)

// Lắng nghe cổng HTTPS
const PORT = process.env.PORT || 3000;
httpsServer.listen(PORT, () => console.log(`Server running on port ${PORT} with HTTPS`));
