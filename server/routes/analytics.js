const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');

// Example analytics summary route
router.get('/summary', auth, role(['admin', 'user', 'viewer']), (req, res) => {
  // Replace with real analytics logic
  res.json({ users: 100, records: 500, stats: { active: 80, new: 10 } });
});

module.exports = router;
