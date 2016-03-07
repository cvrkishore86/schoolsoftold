var express = require('express');
var router = express.Router();


router.post('/students',  function (request, response,next) {
            
            var studentDao = require('../dao/studentDao.js');
            
            console.log('body');
            console.log(request.body);
            
            studentDao.studentDao.createstudent(request.body, 
                function (status) { 
            
                response.json(status); 

                console.log(status);
            });
            
        }
    );

    router.get('/students',function (request, response,next) {
            
            var studentDao = require('../dao/studentDao.js');
            studentDao.studentDao.getAllstudents (
                function (students) {
                    console.log(students);
                    response.json(students);
            });
            
        }
    );

  


   router.get('/students/:studentId', function (request, response,next) {
            
            var studentDao = require('../dao/studentDao.js');
            studentDao.studentDao.getstudentById(request.params.studentId, 
                function (students) {
                    console.log(students);
                    response.json({ students : students });
                });
            
        }
    );

router.put('/students/:studentId',
        function (request, response,next) {
            
            console.log(request.body.firstName);

            var studentDao = require('../dao/studentDao.js');
            studentDao.studentDao.updatestudent(request.body,
                function (status) {
                console.log(status);
                response.json(status);
            });
        }
    );


    router.delete( '/deletestudentById/:studentId', function (request, response,next) {
            
            console.log(request.params.studentId);
            
            var studentDao = require('../dao/studentDao.js');
            studentDao.studentDao.deletestudentById(request.params.studentId,
                function (status) {
                console.log(status);
                response.json(status);
            });
        }

    );



module.exports = router;
