const express = require("express");
const cors = require("cors");

const app = express();
const phrases = require("./comp.json")
globalID = 2

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req,res) => {
  const fortunes = ['A hunch is creativity trying to tell you something.',
  'A lifetime friend shall soon be made.',
  'A lifetime of happiness lies ahead of you.',
  'A light heart carries you through all the hard times.',
  'A new perspective will come with the new year.', ];
  let randomFor = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomFor];
  res.status(200).send(randomFortune)
})

app.post("/api/phrases", (req,res) => {

  const {fortune, compliment} = req.body
  console.log(req.body)

  const newPhrases ={
    fortune,
    compliment,
    id: globalID
  }
  phrases.push(newPhrases)
  console.log(phrases)
  res.status(200).send(phrases)
  globalID++
  

})

app.delete("/api/phrases", (req,res) => {
  const{id} = req.params
  let index = houses.findIndex((elem) => elem.id === +req.params.id)
  phrases.splice(index,1)
  res.status(200).send(phrases)
})

app.get("/api/numbers", (req,res) =>{

 
    const nums = []
    let randomNumber = Math.random() * 20
    for(i = 0; i < randomNumber; i++){
      nums.push(i)
    }
    res.status(200).send(nums)

})


app.listen(4000, () => console.log("Server running on 4000"));
