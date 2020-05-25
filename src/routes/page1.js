console.log('running page 1')
export default function foo(req, res) {
  let x = 1;
  let y = x * 2;
  let z = [];
  for (let i=0; i < 100; i ++ ){
    z.push(x*i)
  }
  let a = z.join(',');
  res.send('hello world ' + y + a);
}