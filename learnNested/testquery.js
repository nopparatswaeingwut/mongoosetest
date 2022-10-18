//connect
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/geeksforgeeks",);

const studentSchema = new mongoose.Schema({
	name: { 
        type: String,
        required: true },
	age: { 
        type: Number, 
        default: 8 },
	highschool: { 
        type: Boolean, 
        default: false },
});
const Student = mongoose.model("Student", studentSchema);

const saveStudent = async (name, age) => {
	let query  = new Student({
		name: name,
		age: age,
	});
      console.log( query.name);
};
const updateHighSchool = async () => {
	await Student.updateMany(
		{ age: { $gt: 10 } },
		{ highschool: true });
	console.log("Updated name fields");
};

const start = async () => {
	await saveStudent("มะนาว", 5);
	await saveStudent("มะเขือ", 13);
	await saveStudent("มะขาม", 15);
    await saveStudent("มีนา", 16);
    await saveStudent("หญิง", 1);
    await saveStudent("นานะ", 2);
    await saveStudent("รานี", 3);
    await saveStudent("ภานุ", 4);
    await saveStudent("ผา", 7);

	updateHighSchool();
};

start();
