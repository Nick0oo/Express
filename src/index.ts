import express, { Request, Response } from 'express';

const app = express();      // Crea una instancia de la aplicación Express
const port = 3005;          // Define el puerto

// Define una ruta en la raíz ('/') que responde con 'Hola, Mundo'

app.get('/', (_req: Request, res: Response) => {
    
    res.send('¡Hola, Nicolas Salas!');
  });

app.get('/hello', (req: Request, res: Response) => {
    console.log(req.query);
    if (req.query) {
      const name = req.query ? req.query.name: null;
      res.send(`¡Hola, ${name}!`);
      return;
  
    }
    res.send('¡Hola, Mundo!');
  });

app.get('/goodbye', (req: Request, res: Response) => {

    const name = req.query ? req.query.name: null;
    if (name) {

      res.send(`¡Bye, ${name}!`);
      return;

    }
    res.send('¡Adios, Nicko!');
});

app.get('/age', (req: Request, res: Response) => {
    const age = req.query ? req.query.age : null;
    if (age) {
      res.send(`Tienes ${age} años.`);
      return;
    }
    res.send('No proporcionaste tu edad.');
  });

  app.get('/product-info', (req: Request, res: Response) => {
    const product = req.query ? req.query.product : null;
    const descuento = req.query ? req.query.descuento : null;
    if (product && descuento) {
      res.send(`El producto ${product} está en stock y tiene un ${descuento} de descuento.`);
      return;
    }
    res.send('No especificaste un producto.');
  });

  app.get('/userinfo', (req: Request, res: Response) => {
    const nombre = req.query ? req.query.nombre : null;
    const apellido = req.query ? req.query.apellido : null;
    const edad = req.query ? req.query.edad : null;
  
    if (nombre && apellido && edad) {
      res.send(`Hola, ${nombre || '¿... Sin nombre?'} ${apellido || '¿... Sin apellido ?'}. Tienes ${edad || '¿ 0 ?'} años.`);
      return;
    }
    
    res.send('Por favor, proporciona tu nombre, apellido y edad.');
  });
  
  app.get('/json', (req: Request, res: Response) => {
    const mensaje = req.query.mensaje || '¡Este es un objeto JSON!';
    const autor = req.query.autor || 'Nicko';
    const estado = req.query.estado || 'Activo';
  
    res.json({
      mensaje,
      autor,
      fecha: new Date().toISOString(),
      estado,
    });
  });
  app.get('/html', (req: Request, res: Response) => {
    const titulo = req.query.titulo || '¡Hola desde Express!';
    const contenido = req.query.contenido || 'Este es un HTML de respuesta básico.';
    const contenido2 = req.query.contenido2 || 'Este es un HTML de respuesta básico.';
  
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>${titulo}</title>
        </head>
        <body style="font-family: Arial; background-color: #f4f4f4; color: #333;">
          <h1 style="color: #4CAF50;">${titulo}</h1>
          <p>${contenido}</p>
          <p>${contenido2}</p>
        </body>
      </html>
    `);
  });
 
  
  
// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});