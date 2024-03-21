const express = require("express");
const zod = require('zod');
const app = express();

function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
  })

return schema.safeParse(obj)

}


app.post('/login', (req, res) => {
  const response = validateInput(req.body)
  if(!response.success) {
    res.json({
      msg: 'Your inputs are invalid!'
    })
  } else{
    res.json({
      msg: 'Inputs are valid!'
    })
  }

})

app.listen(3000, (req, res) => {
  console.log('server app listening on port 3000...')
})






















// const schema1 = zod.array(zod.number());

// email: string => email
// password: atleast 8 characters
// country: "IN", "US"

// const schema = zod.object({
// email: zod.string(),
// password: zod.string().min(8),
// country: zod.literal("IN").or(zod.literal("US")),
// kidneys: zod.array(zod.number())
// })

// app.use(express.json());

// app.post("/health-checkup", (req, res) => {
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys)
// if(!response.success) {
//   res.status(411).json({
//     msg: 'Input is invalid!'
//   })
// }else{
//   res.send({
//     response
//   });
// }


// });



// app.listen(3000)