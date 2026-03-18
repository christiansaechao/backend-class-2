import app from "./src/app.js";
import "dotenv/config";

// how do we start our server in express?
const PORT = process.env.PORT || 3000;

// http methods
// endpoint |  params  | query
// amazon.com/category/shoes/children?shoes=red&size=7&
// req.params, req.query, req.body 
// {
//   firstName: "John",
//   lastName: "Doe"
// }
// 

/**
 * 1. GET
 * 2. POST
 * 3. PUT/UPDATE
 * 3.5 PATCH
 * 4. DELETE
 */


app.listen(PORT, () => console.log("Server starting now on port: " + PORT));
