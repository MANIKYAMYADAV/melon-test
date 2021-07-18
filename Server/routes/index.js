var express = require('express');
var employee = require('../models/employee')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Post employee details to the database...*/
router.post('/create',async(req,res)=>{
  let { employeeName, employeeId} = req.body;

  let Employee = await new employee({
    employeeName: employeeName,
    employeeId: employeeId,
})

  let employeeData = await Employee.save();

  res.send('message',employeeData);
  res.status(200).json({ "success": true, "message": "Employee Created successfully", "data": employeeData })

})
router.put('/update',async(req,res)=>{
  //waite goes here and update the existing employee details....
  res.send('message');

})

router.delete('/',async(req,res)=>{
  //waite goes here and delete the existing employee details....
  res.send('message');
})

module.exports = router;
