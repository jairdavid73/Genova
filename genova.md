# Genova

## Contexto

Estamos creando una interfaz en Next.js para un hover modular de imagenes.

## Hecho

- Se preparo una base minima de Next.js.
- Se creo el componente reutilizable `HoverCard`.
- Se creo `HoverGallery` para renderizar varias tarjetas.
- Se dejo la carpeta `public/images/genova` para que puedas poner tus imagenes.
- Las rutas de ejemplo estan en `app/page.tsx`.
- Se agrego `placeholder.svg` para que el hover se vea aunque aun no existan las imagenes finales.
- Se marco la imagen como `unoptimized` para aceptar el placeholder SVG y futuras imagenes locales sin configuracion extra.

## Pendiente tecnico

- No se pudo ejecutar `npm install` porque `npm` no esta disponible en el PATzH de esta maquina.

## Siguiente

- Agregar tus imagenes en `public/images/genova`.
- Reemplazar `imagen-1.jpg`, `imagen-2.jpg` e `imagen-3.jpg` por los nombres reales si son distintos.
- Ajustar textos, colores o animacion cuando compartas la referencia exacta del hover.
