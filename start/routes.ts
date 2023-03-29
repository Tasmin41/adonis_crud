

import Route from '@ioc:Adonis/Core/Route'
import View from '@ioc:Adonis/Core/View'
import Database from '@ioc:Adonis/Lucid/Database'
import UsersController from 'App/Controllers/Http/UsersController'

Route.on('/').render("welcome")


Route.get("/news","UsersController.view").as("news_view")
//create news
Route.get("/news/create","UsersController.create").as("news_create")
Route.post("/news","UsersController.store").as("news_store")
Route.get("/news/:id/edit","UsersController.edit").as("news_edit")
Route.patch("/news/:id","UsersController.update").as("news_update")
Route.delete("/news/:id","UsersController.destroy").as("news_delete")
Route.get("/news/:id","UsersController.search").as("news_search")





// Route.post("/news",({request})=>{
//   return request.body();
// }).as("news.create")





// Route.patch('/news/:id',({params})=>{

//   return {params};
// }).as("news.update")

// Route.delete('/news/:id',({params})=>{
//   return {params};
// }).where('id', {
//   match: /^[0-9]+$/,
//   cast: (id) => Number(id),
// }).as("news.delete")


