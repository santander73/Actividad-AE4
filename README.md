# Sistema de Pedidos en Línea 

Este proyecto es una solución en JavaScript para gestionar pedidos de una tienda de comida rapida, calculando totales y aplicando descuentos automáticos según el volumen de compra.

##  Descripción
El script simula un flujo de caja que permite seleccionar productos de un catálogo, sumar sus precios y aplicar reglas de negocio para descuentos.

## Funcionalidades
El sistema cumple con los siguientes requerimientos:

**Catálogo de Productos:** Muestra los ítems disponibles y sus precios.

**Cálculo de Totales:** Suma el valor de los productos seleccionados en un arreglo.

**Sistema de Descuentos:** Aplica lógica condicional anidada:

    10% de descuento para compras mayores a $50.
    20% de descuento para compras mayores a $100.
    
**Procesamiento de Pedidos:** Genera el ticket final con el monto a pagar y confirmación.

## Requisitos
* Visual Studio Code (o cualquier editor de texto).
* Node.js instalado para ejecutar el script desde la terminal.

## Cómo ejecutar
1.  Clona este repositorio o descarga el archivo `sistema_pedidos.js`.
2.  Abre una terminal en la carpeta del proyecto.
3.  Ejecuta el siguiente comando:

```bash
node sistema_pedidos.js
