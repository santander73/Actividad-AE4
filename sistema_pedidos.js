// Paso 1: Crear el catálogo y mostrarlo
const catalogo = {
    "Pizza": 15,
    "Hamburguesa": 10,
    "Papas Fritas": 5,
    "Refresco": 3
};

// Función para mostrar el catálogo
function mostrarCatalogo() {
    console.log("--- Catálogo de Productos ---");
    for (let producto in catalogo) {
        // Imprime producto y precio
        console.log(`${producto}: $${catalogo[producto]}`); 
    }
}



// Paso 2 y 3: Calcular Total y Aplicar Descuentos
// 3. Función para aplicar descuentos (Funciones anidadas)
function aplicarDescuento(total) {
    if (total > 100) {
        // Aplica 20% si es mayor a 100
        return total * 0.80; 
    } else if (total > 50) {
        // Aplica 10% si es mayor a 50
        return total * 0.90; 
    } else {
        // Sin descuento
        return total; 
    }
}

// 2. Función para calcular el total del pedido
function calcularTotal(pedido) {
    let total = 0;
    
    // Recorremos el arreglo del pedido
    for (let i = 0; i < pedido.length; i++) {
        let producto = pedido[i];
        // Verificamos si el producto existe en el catálogo para sumar el precio
        if (catalogo[producto]) {
            total += catalogo[producto];
        } else {
            console.log(`El producto "${producto}" no está en el catálogo.`);
        }
    }

    console.log(`Total bruto: $${total}`);

    // Llamamos a la función de descuento ANTES de devolver el total final 
    let totalFinal = aplicarDescuento(total);
    
    return totalFinal;
}


// Paso 4: Simular el proceso de compra
// 4. Función para realizar el pedido
function realizarPedido(pedido) {
    // 1. Mostrar qué hay disponible
    mostrarCatalogo(); 
    
    console.log("\n--- Procesando Pedido ---");
    console.log("Productos seleccionados:", pedido);

    // 2. Llamar a calcularTotal (que ya incluye el descuento internamente)
    let costoFinal = calcularTotal(pedido);

    // 3. Mostrar total con descuento y confirmación
    console.log(`Total a pagar (con descuentos aplicados): $${costoFinal.toFixed(2)}`);
    console.log("¡Pedido confirmado! Gracias por su compra.");
}



// --- PRUEBAS ---

// Caso 1: Pedido pequeño (Sin descuento)
console.log("\n>>> CASO 1");
realizarPedido(["Hamburguesa", "Refresco"]); 

// Caso 2: Pedido mediano (> $50, 10% descuento)
console.log("\n>>> CASO 2");
realizarPedido(["Pizza", "Pizza", "Pizza", "Hamburguesa"]); 
// Total bruto sería 15+15+15+10 = 55. Descuento 10% -> Paga 49.5

// Caso 3: Pedido grande (> $100, 20% descuento)
console.log("\n>>> CASO 3");
realizarPedido(["Pizza", "Pizza", "Pizza", "Pizza", "Pizza", "Pizza", "Pizza"]); 
// Total bruto 105. Descuento 20% -> Paga 84