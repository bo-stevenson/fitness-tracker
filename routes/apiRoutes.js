const { Workout } = require("../models");
const db = require("../models");

module.exports = (app) => {
    //get workouts
    app.get("/api/workouts", (req,res) => {
        db.Workout.find({}, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        });
    });
//create new workout
    app.post("/api/workouts", (req,res) => {
        db.Workout.create({}).then(data => {
            res.json(data);
        });
    });
    // update
    app.put("/api/workouts/:id", (req,res) => {
        const id = req.params.id;
        const workout = req.body;

        Workout.findByIdAndUpdate(id, { $push: {exercises: workout} }, {new: true})
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                res.send(err);
            });
    });
    //get range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
    });
}