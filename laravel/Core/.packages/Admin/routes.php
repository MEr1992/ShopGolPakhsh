<?php

use Illuminate\Support\Facades\Route;

Route::get('/user',"Auth\UserInfo@getInfo");
Route::post('/login',"Auth\AuthenticatedController@store");
Route::post('/logout',"Auth\AuthenticatedController@destroy");

Route::get('/langs',function(){
    \App::setLocale("fa");
    $objects = [
        "public"=>\Lang::get("AdminLang::public"),
        'local'=>\Config::get("app.locale"),
        'langs'=> \Models\Base\Language::where('status_id', 1)->get()];
    return response()->json($objects);
});

// ================ Start Routes Uploads =======================================
Route::post('tinyUpload/{dir}', 'Public\Upload@tinyUpload');
Route::post('upload/{dir}', 'Public\Upload@uploadFile');
Route::post('ckupload/{dir}', 'Public\Upload@ckUpload');
Route::get('deleteFile/{dir}/{file}', 'Public\Upload@deleteFile');
// ================ End Routes Uploads ==========================================

// ================ Start Routes Base ===========================================
Route::get('/home', 'Base\HomeController@home');
Route::resource("keywords","Base\KeywordController");
// ================ End Routes Base =============================================

// ================ Start Routes Users ==========================================
Route::get("users/change-status/get-needles", "Person\UserController@changeRoleGetNeedles");
Route::post("users/change-status/{id}", "Person\UserController@changeRole");
Route::put("users/change-password", "Person\UserController@changePassword");

Route::get("users/show-info/{id}", "Person\UserController@showInfo");
Route::get("users/get-needles", "Person\UserController@getNeedles");
Route::resource("users", "Person\UserController");

Route::get("personnels/get-needles", "Person\PersonnelController@getNeedles");
Route::resource("personnels", "Person\PersonnelController");

Route::resource("roles", "Person\RoleController");
// ================ End Routes Users =============================================

// ======================================== Start Routes Content ======================================================
Route::get("blogs/get-needles", "Content\BlogController@getNeedles");
Route::get("blogs/details/{id}", "Content\BlogController@details");
Route::resource("blogs", "Content\BlogController");
Route::post("blog-comments/send", "Content\BlogCommentController@sendComment");
Route::put("blog-comments/delete/{id}", "Content\BlogCommentController@deleteComment");
Route::get("blog-comments/details/{id}", "Content\BlogCommentController@details");
Route::resource("/blog-comments", "Content\BlogCommentController");
// ======================================== End Routes Content ======================================================

Route::resource("sliders", "Content\SliderController");

// ================ Start Routes Product =========================================
Route::get("products/get-needles", "Product\ProductController@getNeedles");
Route::resource("products","Product\ProductController");

Route::get("categories/get-needles", "Product\ProductCategoryController@getNeedles");
Route::resource("categories","Product\ProductCategoryController");
Route::resource("lines","Product\ProductLineController");

Route::resource("brands","Product\ProductBrandController");
// ================ End Routes Product ===========================================

Route::post('/breadcrumb', 'Public\Breadcrumb@getItems');


use Faker\Generator;

Route::get('/faker-locale', function (Generator $faker) {
    return $faker->locale;
});
