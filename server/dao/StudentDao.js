


var connectionProvider = require('./mysqlConnectionStringProvider.js');

var studentDao = {
    
    createstudent : function (studentform, OnSuccessfulCallback) {
        
        var insertStatement = "INSERT INTO student SET?";
         student = {
       student_id : studentform.studentId,
       first_name:studentform.studentFirstName,
       last_name:studentform.studentLastName,
       admission_no:1234,
       admission_date:new Date(),
       roll_no:123,
       date_of_birth:new Date(),
       gender:1,
       phone1:9642993329
   };
   console.log('inside studentdao');
        console.log(student);
        
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        
        if (connection) {
            
            connection.query(insertStatement, student, function (err, result) {
                
                if (err) { 
                    console.log(err);
                }
                
                OnSuccessfulCallback({ status : 'successful' });
                console.log('my result'+JSON.stringify(result));
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }

    ,

    getAllstudents : function (callback) { 
    
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "SELECT * FROM student ORDER BY student_id DESC";
        
        if (connection) {
            
            connection.query(queryStatement, function (err, rows, fields) {
                
                if (err) { throw err; }
                
                
                console.log(rows);

                callback(rows);
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }

    ,

    getstudentById : function (studentId, callback) {
        
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "SELECT * FROM student WHERE student_id = ?";
        
        if (connection) {
            
            connection.query(queryStatement, [studentId] ,  function (err, rows, fields) {
                
                if (err) { throw err; }
                
                
                console.log(rows);
                
                callback(rows);
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }


    ,

    updatestudent: function (studentform) {
    
  
    
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "UPDATE  student SET first_name= ? ,  last_name = ?, date_of_birth = ?  WHERE student_id = ?";
        
        if (connection) {
            
            connection.query(queryStatement, [ studentform.studentFirstName, studentform.studentLastName,  studentform.dateOfBirth, 1] , function (err, rows, fields) {
                if (err) { throw err; }
                console.log(rows);
                
                if (rows) { 

                
                    callback({ status : 'successful' });
                }
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }
    ,

    deletestudentById : function (studentId, callback) {
    
    
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "DELETE  FROM  student   WHERE id = ?";
        
        if (connection) {
            
            connection.query(queryStatement, [studentId] , function (err, rows, fields) {
                if (err) { throw err; }
                console.log(rows);
                
                if (rows) {
                    
                    callback({ status : 'successful' });
                }
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }

}

module.exports.studentDao = studentDao; 
                
    

