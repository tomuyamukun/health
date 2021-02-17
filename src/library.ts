import axios from "axios";
axios.get("https://google.com");

import _ from "lodash";

_.shuffle([1, 2, 3, 4]);

namespace myApp {
	const hello = "hello in namespace";
	export const name = "quill";
	export interface Nameable {
		name: string;
	}
}
interface name {
	first: string;
}
interface name {
	last: string;
}

let tmp: name;
namespace name {
	const first: string = "peter";
}

const hello = myApp.name;
let Nameable: myApp.Nameable;
