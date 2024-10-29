import * as fs from 'fs';
export default function handler(req, res ) {
  if (req.method === 'POST') {
    // Process a POST request

    fs.writeFile('contactdata/1.json', JSON.stringify(req.body), ()=>{})
    res.status(200).json(["yes post request"])


  } else {
    // Handle any other HTTP method
    res.status(200).json(["allBlogs"])

  }
}