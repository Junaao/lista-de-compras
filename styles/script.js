function addItem() {
  // Pega o valor do input
  const itemText = document.getElementById("barra").value;

  // Verifica se o input não está vazio
  if (itemText.trim() !== "") {

    // Cria um novo elemento de lista (li)
    const li = document.createElement("li");

    // Cria a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check-box");

    // Cria o ícone de lixo
    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("delete-icon");
    deleteIcon.innerHTML = '<img src="assets/asd.svg" alt="Excluir">'; // Usando um ícone de lixeira

    // Adiciona evento de clique para excluir o item
    deleteIcon.addEventListener("click", function () {
      li.remove(); // Remove o item da lista

      // Chama a função para exibir o alerta
      exibirAlerta();
    });

    const text = document.createElement("span");
    text.innerHTML = itemText;
    text.classList.add("text");

    // Adiciona o texto do item e a checkbox à lista
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteIcon); // Adiciona o ícone de lixo

    // Adiciona o novo item à lista
    document.getElementById("lista").appendChild(li);

    // Limpa o campo de entrada
    document.getElementById("barra").value = "";
  }
}

// Função para exibir o alerta com o ícone
function exibirAlerta() {
  // Cria o elemento de alerta
  const alerta = document.createElement("div");
  alerta.classList.add("alerta");

  // Cria o ícone para o alerta
  const icone = document.createElement("img");
  icone.src = "assets/warning-circle-filled.svg"; // Caminho para o ícone de sucesso
  icone.alt = "Icone dmg";
  icone.style.width = "20px";  // Define o tamanho do ícone
  icone.style.height = "20px"; // Define o tamanho do ícone
  icone.style.marginRight = "10px"; // Espaço entre o ícone e o texto

  // Adiciona o ícone e o texto ao alerta
  alerta.appendChild(icone); // Adiciona o ícone
  alerta.appendChild(document.createTextNode(" Item excluído com sucesso!")); // Adiciona o texto

  // Seleciona o container do alerta e insere o alerta
  const alertaContainer = document.getElementById("alerta-container");
  alertaContainer.innerHTML = ""; // Limpa alertas anteriores, se houver
  alertaContainer.appendChild(alerta);

  // Remove o alerta após 3 segundos
  setTimeout(() => {
    alerta.remove();
  }, 3000);
}