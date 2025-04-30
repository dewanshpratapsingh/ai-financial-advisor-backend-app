function jsonBodyParser(req, res, next) {
    if (req.headers['content-type'] !== 'application/json') {
      return next(); 
    }
  
    let body = '';
  
    req.on('data', chunk => {
      body += chunk;
    });
  
    req.on('end', () => {
      try {
        req.body = JSON.parse(body);
        next();
      } catch (err) {
        res.status(400).send('Invalid JSON');
      }
    });
  }
  