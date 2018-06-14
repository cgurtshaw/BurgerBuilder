import axios from 'axios';

const instance = axios.create({
	//Add firebase url here
	baseURL: ''
});

export default instance;