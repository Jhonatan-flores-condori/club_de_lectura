
fetch("mienbros.json")
.then(function(response){
	return response.json();
})
.then(function(mienbros){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let mienbro of mienbros){
		out += `
			<tr>
				<td>${mienbro.usuario}</td>
				<td>${mienbro.contra}</td>
				<td>${mienbro.email}</td>
				<td>${mienbro.genero}</td>
				<td>${mienbro.menbresia}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});