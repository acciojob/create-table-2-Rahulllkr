function createTable() {
    //Write your code here
	const table = document.getElementById("myTable");
	let row = prompt("Input number of rows");
	let col = prompt("Input number of columns");
	for(let i = 0 ; i < row ; i++){
		let tr = document.createElement("tr")
		for(let j = 0 ; j < col ; j++){
			let td = document.createElement("td")
			td.innerText = `Row-${i} Column-${j}`
		tr.appendChild(td)	
	}
		table.appendChild(tr);
	}
}
