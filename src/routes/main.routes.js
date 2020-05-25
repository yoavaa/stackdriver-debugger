// Import node module
console.log('running main')
import express from 'express';
const router = express.Router();

const getOjb = (input) => new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve({firstName: 'Hello', lastName: 'World', name: input})
   }, 50);
});

// Arrow functions
router.get('/', async (req, res) => {
  let input = req.query.name;
  let {firstName, lastName, name} = await getOjb(input);
  res.send({message: `${firstName} ${lastName} - ${name}`});
});
// Exporting an object as the default import for this module
export default router;
