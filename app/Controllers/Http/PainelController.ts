// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {

  protected users = [{
      id:1,
      slug: 'Neca',
      name: 'Carlos Alberto'
    },
    {
      id:2,
      slug: 'Fulaninho',
      name: 'Fulano da Silva'
    }        
  ];  

  async index({request}) {
    
    return {
      response: 'Index do Painel',
      headers: request.headers(),
      language: request.language(),
      method: request.method(),
      ip: request.ip(),
      ips: request.ips(),
      qs: request.qs(),
      url: request.url(),
      completeUrl: request.completeUrl(),
      all: request.all(),
      only: request.only(['idade']),
      except: request.except(['idade'])
    };
  }

  async usuarioById({params}) {
    if(!params['id']) {
      return {users: this.users}
    }

    let myRequestedUserId = params['id'];
    let myUser = this.users.find(user => user.id == myRequestedUserId);
    //return myRequestUserId;
    if(myUser) {
      return myUser;
    } else {
      return {error: 'Nenhum usuário encontrado!'};
    } 
     
  }

  async usuarioBySlug({params}) {
    let myRequestedSlug = params['slug'];
    let myUser = this.users.find(user => user.slug == myRequestedSlug);
    
    if(myUser) {
      return myUser;
    } else {
      return {error: 'Nenhum usuário encontrado!'};
    }    
  }

  async docs({params}) {
    return params['*'][2];
  }
}