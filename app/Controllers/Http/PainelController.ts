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

  async index() {
    return {response: 'Index do Painel'};
  }

  async usuarios() {
    return {
      user: this.users 
    };   
  }

  async usuarioById({params}) {
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
}