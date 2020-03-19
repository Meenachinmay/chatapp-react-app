const users = [];

const addUser = ({id, name, room}) => {
	name = name.trim().toLowerCase();
	room = room.trim().toLowerCase();

	const existingUser = users.find(user => user.room === room && user.name === name);

	// checking for pre-existing user in the room
	if (existingUser){
		return { error: "User is already exists, please try again with some other user name"};
	}

	// create a new user
	const user = { id, name, room };

	users.push(user);

	return { user };
}

// removing the user from the room
const removeUser = (id) => {
	const index = users.findIndex(user => user.id === id);

	if (index !== -1){
		return users.splice(index, 1)[0];
	}
}

// getting a single user
const getUser = (id) => users.find(user => user.id === id);

// get all the users in the room
const getUsersInRoom = (room) => users.filter(user => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };