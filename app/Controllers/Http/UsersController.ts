// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database";
import { schema } from '@ioc:Adonis/Core/Validator'
import CreateArticleValidator from "App/Validators/CreateArticleValidator";
import User from "App/Models/User";

export default class UsersController {

    public async view({view,params}) {
        // const users = await Database.from('users').select('*')
        const users = await User.all()//using model
     
        return view.render("news/view",{users});
    }

    //create news
    public async create({view}){
        return view.render("news/create")
    }
    public async store({response,request}){

        const payload= await request.validate(CreateArticleValidator)
        // await Database.table('users').insert({...payload})
        await User.create(payload)
        return response.redirect().back();
     
    }

    public async edit({view,params}){
        // const {id} = params
        // const user = await Database.from('users').where('id',id).first();
        const user = await User.findBy('id',params.id)

        return view.render("news/edit",{user})
    }

    public async update({response,request,params}){
        // const user = await Database.from('users').where('id',id).first();
        const payload= await request.validate(CreateArticleValidator)
        // await Database.from('users').where('id',params.id).update(payload)
        await User.query().where('id',params.id).update(payload)
        return response.redirect().back();
    }
    public async destroy({response,params}){
        // await Database.from('users').where('id',params.id).delete();
        const user = await User.findBy('id',params.id)
        if(user){
            user.delete()
        }
        return response.redirect().back()

    }
    public async search({view,params}){
        // const user = await Database.from('users').where('id',params.id).first();
        const user = await User.findBy('id',params.id)//using model
        return view.render('news/search',{user}) 
    }
}
