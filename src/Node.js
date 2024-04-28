const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.post('/api/search', (req, res) => {
    const query = req.body.query;
    // Implement search logic here
    const results = searchData(query); // Assume searchData is a function you'll implement
    res.json(results);
  });

 