

var mysqlConnectionString = {
    
    connection  :{
        
        dev : {
            host: 'localhost',
            user: 'root',
            password : 'root',
            database : 'schoolsoft'
        }

        ,
        
        qa : {
            host: 'yourhost',
            user: 'yourdatabaseusername',
            password : 'yourpasssword',
            database : 'yourdatabasename'
        }
        ,prod : {
            host: 'yourhost',
            user: 'yourdatabaseusername',
            password : 'yourpasssword',
            database : 'yourdatabasename'
        }
    
    }

};

module.exports.mysqlConnectionString = mysqlConnectionString;
