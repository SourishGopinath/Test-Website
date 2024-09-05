// Route to handle form submission
app.post('/submit-marks', (req, res) => {
    // Get form data
    const { USN, STUDENTNAME, CIE1, CIE2, CIE3, QUIZ1, QUIZ2, QUIZ3, EL } = req.body;
  
    // Create a MySQL connection
    const connection = mysql.createConnection(dbConfig);
  
    // Connect to the MySQL server
    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        res.status(500).send('Internal server error');
        return;
      }
  
      // SQL query to insert form data into the database
      const query = `
        INSERT INTO marks_auto (USN, STUDENTNAME, CIE1, CIE2, CIE3, QUIZ1, QUIZ2, QUIZ3, EL)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
      `;
  
      // Execute the SQL query with form data
      connection.query(query, [USN, STUDENTNAME, CIE1, CIE2, CIE3, QUIZ1, QUIZ2, QUIZ3, EL], (error, results) => {
        // Close the MySQL connection regardless of the query result
        connection.end();
  
        if (error) {
          console.error('Error executing MySQL query:', error);
          res.status(500).send('Internal server error');
        } else {
          res.send('Marks submitted successfully');
        }
      });
    });
  });
  