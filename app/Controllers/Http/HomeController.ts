//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {

  async index({view}) {
       
    return view.render('homepage');
  }

  async sobre({view}) {
    return view.render('sobre');
  }

}
