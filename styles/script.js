function addItem() {
//Pega o valor do input
  const itemText = document.getElementById("barra").value;

//Verifica se o input nao esta vazio
  if (itemText.trim() !=="") { 

//Cria um novo elemento de lista(li)
    const li = document.createElement("li");

// Cria a checkbox
    const checkbox =document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check-box");

// Cria o ícone de lixo
    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("delete-icon");
    deleteIcon.innerHTML = '<img src="assets/asd.svg">'; // Usando um ícone de lixeira com o emoji

// Adiciona evento de clique para excluir o item
    deleteIcon.addEventListener("click", function() {
      li.remove(); // Remove o item da lista
    });

    const text = document.createElement("span");
    text.innerHTML = itemText;
    text.classList.add("text");


// Adiciona o texto do item e a checkbox à lista
   
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteIcon); // Adiciona o ícone de lixo

//Adiciona o novo item a lista
    document.getElementById("lista").appendChild(li);

//Limpa o campo de entrada
    document.getElementById("barra").value ="";
  }
}