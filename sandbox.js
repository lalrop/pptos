const table = document.querySelector('#table');
const buttonAdd = document.querySelector('#buttonAdd');
const tableContent = document.querySelector('#tableContent');
const totalInput = document.querySelector('#total');
const switchIva = document.querySelector('#flexSwitchCheckDefault');
const iva = document.querySelector('#iva');
const neto = document.querySelector('#neto');
const buttons = document.querySelector('.buttons');

const btnPrint = document.querySelector('#btnPrint')




// Plantilla de lineas detalle y precio
const htmlTable = `
    <tr class="row">
        <td class="border-top border-bottom">
            <input type="text" placeholder="__" min="0" class="col-9 border-0">
            <input type="number" class="values col-2 border-0" placeholder="." min="0" >
        </td>
    </tr>
`;


// funcion suma de valores

function suma(valores) {
    let result = 0;
    for (let i = 0; i< valores.length; i++) {
        result = Number(result) + Number(valores[i]);
        
    }
    return result;
}

// values.addEventListener('change', suma)

// Boton para agregar lineas
buttonAdd.addEventListener('click',e =>{
    e.preventDefault();
    tableContent.insertAdjacentHTML('beforeend', htmlTable);
    const inputValues = Array.from(document.querySelectorAll('.values'))
    let values = inputValues.map(e => e.value)
    let total = suma(values)
    totalInput.innerHTML = `${total}`;
});

// Boton para remover lineas
buttonRemove.addEventListener('click',e =>{
    e.preventDefault();
    table.lastChild.remove();
});

// Switch de IVA    
switchIva.addEventListener('click', e =>{
    const itemsIVA = Array.from(document.querySelectorAll('.ivaNeto'));
    if(e.target.checked){
        itemsIVA.forEach(element => {element.classList.remove('visually-hidden')});
        const total = Number(totalInput.textContent); 
        const valorIva = total*0.19;
        const valorNeto = total+valorIva;
        iva.innerHTML=`${valorIva}`
        neto.innerHTML=`${valorNeto}`
    }else if (!e.target.checked) {
        itemsIVA.forEach(element => {element.classList.add('visually-hidden')});    
    }
});

btnPrint.addEventListener('click', e =>{
    e.preventDefault();
    buttons.classList.toggle('visually-hidden');
    switchIva.classList.toggle('visually-hidden')
    window.print()
    buttons.classList.toggle('visually-hidden');
    switchIva.classList.toggle('visually-hidden')
})



