import Route from '@ioc:Adonis/Core/Route';

Route.group(()=>{

  Route.group(()=>{

    Route.get('/', 'PainelController.index');
    Route.get('/usuarios', 'PainelController.usuarios');

    Route.get('/usuarios/:id', 'PainelController.usuarioById')
    .where('id', Route.matchers.number());
    Route.get('/usuarios/:slug', 'PainelController.usuarioBySlug')
    .where('id', Route.matchers.slug());

  }).prefix('/painel/');

}).prefix('/api');