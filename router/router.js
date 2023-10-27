const express = require('express');
const router = express.Router()
const{getAllStaff,getStaffById,deleteStaff,createStaff,} = require('../Controller/controller');

// Call the functions using the router
router.get('/', getAllStaff);
router.get('/:id', getStaffById);
router.post('/', createStaff);
//router.put('/:id', updateStaff);
router.delete('/:id',deleteStaff);

module.exports = router;