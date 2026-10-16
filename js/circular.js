/* ============================================================
   CIRCULAR DIGITAL SEMANAL - Latin Fresh Market
   ------------------------------------------------------------
   COMO ACTUALIZAR (para el manager):
   1. Edita los precios/nombres de cada semana abajo (4 semanas).
   2. Sube el archivo. Listo. El sitio muestra SOLO la semana
      vigente de forma automatica (ciclo miercoles-martes).
   3. Las fechas de vigencia se calculan solas: nunca hay que
      escribir fechas a mano.
   4. Cuando quieras cambiar precios, edita y vuelve a subir.
      La rotacion sigue sola: cero mantenimiento semanal.
   ============================================================ */
var CIRCULAR = {
  inicio_ciclo: "2026-10-14",
  nota_demo_es: "* Precios de muestra para la demostración.",
  nota_demo_en: "* Sample prices for demonstration.",
  semanas: [
    { items: [
        { cat:"deli", img:"imgs/cubano.jpg", badge_es:"EL FAVORITO", badge_en:"THE FAVORITE", nombre_es:"Sándwich cubano", nombre_en:"Cuban sandwich", precio:"$7.99", antes:"$9.99", unidad_es:"", unidad_en:"", tiendas:["tampa","riverview"] },
        { cat:"fruteria", img:"imgs/platanos.jpg", badge_es:"FRESCO", badge_en:"FRESH", nombre_es:"Plátanos", nombre_en:"Plantains", precio:"3 x $1", antes:"", unidad_es:"", unidad_en:"", tiendas:["tampa","riverview"] },
        { cat:"carniceria", img:"imgs/pernil.jpg", badge_es:"CARNICERÍA", badge_en:"BUTCHER SHOP", nombre_es:"Pernil de cerdo", nombre_en:"Pork shoulder", precio:"$1.99", antes:"$2.49", unidad_es:"/lb", unidad_en:"/lb", tiendas:["tampa"] },
        { cat:"deli", img:"imgs/cafeleche.jpg", badge_es:"DELI", badge_en:"DELI", nombre_es:"Café con leche grande", nombre_en:"Large café con leche", precio:"$2.50", antes:"", unidad_es:"", unidad_en:"", tiendas:["tampa","riverview"] },
        { cat:"fruteria", img:"imgs/produce.jpg", badge_es:"COSECHA", badge_en:"HARVEST", nombre_es:"Vegetales frescos", nombre_en:"Fresh produce", precio:"$0.99", antes:"$1.49", unidad_es:"/lb", unidad_en:"/lb", tiendas:["riverview"] },
        { cat:"panaderia", img:"imgs/tienda.jpg", badge_es:"HECHO AQUÍ", badge_en:"MADE HERE", nombre_es:"Pan cubano", nombre_en:"Cuban bread", precio:"$1.25", antes:"", unidad_es:"c/u", unidad_en:"each", tiendas:["tampa","riverview"] } ] },
    { items: [
        { cat:"carniceria", img:"imgs/pernil.jpg", badge_es:"OFERTA", badge_en:"DEAL", nombre_es:"Costillas de cerdo", nombre_en:"Pork ribs", precio:"$2.29", antes:"$2.99", unidad_es:"/lb", unidad_en:"/lb", tiendas:["tampa","riverview"] },
        { cat:"deli", img:"imgs/cubano.jpg", badge_es:"2x1", badge_en:"2x1", nombre_es:"Croquetas de jamón (8)", nombre_en:"Ham croquettes (8)", precio:"$5.99", antes:"", unidad_es:"", unidad_en:"", tiendas:["tampa"] },
        { cat:"fruteria", img:"imgs/platanos.jpg", badge_es:"FRESCO", badge_en:"FRESH", nombre_es:"Plátano maduro", nombre_en:"Ripe plantain", precio:"4 x $1", antes:"", unidad_es:"", unidad_en:"", tiendas:["tampa","riverview"] },
        { cat:"deli", img:"imgs/colada.jpg", badge_es:"DELI", badge_en:"DELI", nombre_es:"Colada cubana", nombre_en:"Cuban colada", precio:"$3.00", antes:"$3.75", unidad_es:"", unidad_en:"", tiendas:["riverview"] },
        { cat:"panaderia", img:"imgs/tienda.jpg", badge_es:"HECHO AQUÍ", badge_en:"MADE HERE", nombre_es:"Pastelitos de guayaba (4)", nombre_en:"Guava pastries (4)", precio:"$4.50", antes:"", unidad_es:"", unidad_en:"", tiendas:["tampa","riverview"] },
        { cat:"fruteria", img:"imgs/produce.jpg", badge_es:"COSECHA", badge_en:"HARVEST", nombre_es:"Yuca fresca", nombre_en:"Fresh yuca", precio:"$0.79", antes:"$1.09", unidad_es:"/lb", unidad_en:"/lb", tiendas:["tampa","riverview"] } ] },
    { items: [
        { cat:"deli", img:"imgs/cafeleche.jpg", badge_es:"MAÑANAS", badge_en:"MORNINGS", nombre_es:"Café cubano + pastelito", nombre_en:"Cuban coffee + pastry", precio:"$3.25", antes:"$4.00", unidad_es:"combo", unidad_en:"combo", tiendas:["tampa","riverview"] },
        { cat:"carniceria", img:"imgs/pernil.jpg", badge_es:"CARNICERÍA", badge_en:"BUTCHER SHOP", nombre_es:"Bistec de palomilla", nombre_en:"Palomilla steak", precio:"$6.99", antes:"$8.49", unidad_es:"/lb", unidad_en:"/lb", tiendas:["tampa"] },
        { cat:"fruteria", img:"imgs/produce.jpg", badge_es:"FRESCO", badge_en:"FRESH", nombre_es:"Aguacate", nombre_en:"Avocado", precio:"2 x $3", antes:"", unidad_es:"", unidad_en:"", tiendas:["tampa","riverview"] },
        { cat:"deli", img:"imgs/cubano.jpg", badge_es:"EL FAVORITO", badge_en:"THE FAVORITE", nombre_es:"Sándwich cubano", nombre_en:"Cuban sandwich", precio:"$7.49", antes:"$9.99", unidad_es:"", unidad_en:"", tiendas:["riverview"] },
        { cat:"panaderia", img:"imgs/tienda.jpg", badge_es:"HECHO AQUÍ", badge_en:"MADE HERE", nombre_es:"Pan de agua (2)", nombre_en:"Pan de agua (2)", precio:"$2.00", antes:"", unidad_es:"", unidad_en:"", tiendas:["tampa","riverview"] },
        { cat:"fruteria", img:"imgs/platanos.jpg", badge_es:"COSECHA", badge_en:"HARVEST", nombre_es:"Plátano verde", nombre_en:"Green plantain", precio:"5 x $1", antes:"", unidad_es:"", unidad_en:"", tiendas:["tampa"] } ] },
    { items: [
        { cat:"carniceria", img:"imgs/pernil.jpg", badge_es:"FIN DE SEMANA", badge_en:"WEEKEND", nombre_es:"Lechón asado por encargo", nombre_en:"Roast pork by order", precio:"$4.99", antes:"$5.99", unidad_es:"/lb", unidad_en:"/lb", tiendas:["tampa","riverview"] },
        { cat:"deli", img:"imgs/colada.jpg", badge_es:"DELI", badge_en:"DELI", nombre_es:"Colada + 4 cortaditos", nombre_en:"Colada + 4 cortaditos", precio:"$5.00", antes:"", unidad_es:"", unidad_en:"", tiendas:["tampa"] },
        { cat:"fruteria", img:"imgs/produce.jpg", badge_es:"FRESCO", badge_en:"FRESH", nombre_es:"Mango", nombre_en:"Mango", precio:"3 x $2", antes:"", unidad_es:"", unidad_en:"", tiendas:["riverview"] },
        { cat:"panaderia", img:"imgs/tienda.jpg", badge_es:"HECHO AQUÍ", badge_en:"MADE HERE", nombre_es:"Cake de tres leches", nombre_en:"Tres leches cake", precio:"$14.99", antes:"$18.99", unidad_es:"entero", unidad_en:"whole", tiendas:["tampa","riverview"] },
        { cat:"deli", img:"imgs/cubano.jpg", badge_es:"EL FAVORITO", badge_en:"THE FAVORITE", nombre_es:"Medianoche", nombre_en:"Medianoche sandwich", precio:"$8.49", antes:"$9.99", unidad_es:"", unidad_en:"", tiendas:["tampa","riverview"] },
        { cat:"fruteria", img:"imgs/platanos.jpg", badge_es:"COSECHA", badge_en:"HARVEST", nombre_es:"Tostones congelados", nombre_en:"Frozen tostones", precio:"$2.99", antes:"", unidad_es:"bolsa", unidad_en:"bag", tiendas:["tampa","riverview"] } ] }
  ]
};
var CIRC_CATS = {
  todas:      { es:"Todo",        en:"All" },
  deli:       { es:"Deli",        en:"Deli" },
  carniceria: { es:"Carnicería",  en:"Butcher shop" },
  fruteria:   { es:"Frutas y vegetales", en:"Produce" },
  panaderia:  { es:"Panadería",   en:"Bakery" }
};
