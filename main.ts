import {serve} from './depts.ts'
const s = serve({ port: 3000 });
console.log("http://localhost:3000/");
for await (const req of s) {
  req.respond({ body: "Hello World from docker\n" });
}