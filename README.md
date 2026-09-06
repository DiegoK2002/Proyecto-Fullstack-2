# Proyecto-Fullstack-2


Comandos en consola (F12) para actualizar el LocalStorage:
localStorage.clear();
location.reload();



------------------------
Limpia los productos antiguos de localStorage


Abrir el proyecto en el navegador y presionar:

F12

Luego ir a:

Console

Escribir:

localStorage.removeItem("productos");

Presiona Enter.

Después escribe:

localStorage.getItem("productos");

Debería devolver:

null

Eso significa que los productos antiguos fueron eliminados correctamente.
