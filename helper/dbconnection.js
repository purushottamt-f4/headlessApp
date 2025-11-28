import { createConnection } from "mysql";
import serverlessMysql from "serverless-mysql";



const database = serverlessMysql({
	config: {
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
	}
});

export default function queryExe(query,param = []){
  return new Promise((resolve,reject) => {
try {
    database.query(query,param).then(results=>{
      database.end();
      let data = JSON.parse(JSON.stringify(results));
			resolve(data);
      console.log('heres');
      console.log(data);
    })
    
  
} catch (error) {
  console.log('error - '+error);
}

  });

}
// export default function queryExe(query, param = []) {
//   return new Promise((resolve, reject) => {
//     database.query(query, param)
//       .then(results => {
        
//         const data = JSON.parse(JSON.stringify(results));
//         console.log("DB Result:", data);
        
//         resolve(data);
        
//       })
//       .catch(error => {
//         console.log("Database error:", error);
//         reject(error);
//       });
//   });
// }
//queryExe();
// const connect = createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '123456',
//   database : 'magento2.4.5'
// });

// connect.connect();
 
// connect.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });


// connect.end();


