

var cors = require("cors");
require("./connection");
var empModel = require("./model/student");
var app = express();

// midd
app.use(express.json());
app.use(cors());
// api to add
app.post("/add", async (req, res) => {
  try {
    await empModel(req.body).save();
    res.send({ message: "Data added!!" });
  } catch (error) {
    console.log(error);
  }
});

// api to view
app.get("/view", async (req, res) => {
  try {
    var data = await empModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// to delete an emp
app.delete("/remove/:id", async (req, res) => {
    try {
       await empModel.findByIdAndDelete(req.params.id)
       res.send({message:"Deleted successfully!!!"})
    } catch (error) {
        console.log(error)
    }
});


// to update
app.put("/edit/:id", async (req, res) => {
    try {
      var data = await empModel.findByIdAndUpdate(req.params.id, req.body);
      res.send({message:'updated successfully',data})
    } catch (error) {
      console.log(error)
    }
  });
app.listen(3004, () => {
  
  console.log("port is up");
});
