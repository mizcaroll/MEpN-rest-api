const express = require("express");
const router = express.Router();
const alien = require("../models/alien")


router.get("/", async(req, res) => {
try {
const aliens = await alien.find();
res.json(aliens); 
} catch(err){
   res.send("Error: "+ err); 
}
});

router.get("/:id", async(req, res) => {
   try {
   const unoAlien = await alien.findById(req.params.id);
   res.json(unoAlien); 
   } catch(err){
      res.send("Error: "+ err); 
   }
   });

router.post("/", async(req, res) => {
const aliens = new alien({
   name: req.body.name,
   tech: req.body.tech,
   sub: req.body.sub
});
try {
  const data = await aliens.save();
  res.json(data);
} catch(err) {
   res.send("Error: "+ err); 
}
});

router.patch("/:id", async(req, res) => {
try {
   const editAlien = await alien.findById(req.params.id);
   editAlien.tech = req.body.tech;
   const updated = await editAlien.save();
   res.json(updated);
} catch(err) {
   res.send("Error: "+ err);
}
});

router.delete("/:id", async(req, res) => {
try {
   const deleteAlien = await alien.findById(req.params.id);
   const deleted = await deleteAlien.remove();
   res.json(deleted);
} catch(err) {
   res.send("Error: "+ err);
}
});

module.exports = router;