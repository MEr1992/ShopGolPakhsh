<?php
Route::get('/clear-cache', function() {
    $exitCode = Artisan::call('cache:clear');
    $exitCode = Artisan::call('config:clear');
    $exitCode = Artisan::call('config:clear');
    $exitCode = Artisan::call('optimize:clear');
    $exitCode = Artisan::call('view:clear');
    return $exitCode;
});

Route::middleware(['auth:web'])->get('/user', function () {
    return request()->user();
});

Route::group(['middleware' => ['SiteInit'], 'prefix' => '{lang}'], function ($lang) {
    // dd($lang);
    // Authentication routes...
    Route::get('/login/google', 'Auth\GoogleController@redirectToGoogle')->name('auth.google');

    // routes for user authentication and registration
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/logout', 'Auth\AuthController@logout');
    });

    // public  routes that do not require authintication
    Route::get('/', 'Home\HomeController@index');
    Route::get('/get-menus', 'Home\HomeController@getMenus');
    // Route::get('/about', 'Home\HomeController@about');
    // Route::get('/contact', 'Home\HomeController@contact');

    Route::get('/products', 'Product\ProductController@index');
    Route::get('/products/{id}', 'Product\ProductController@show');

    // Route::get('/blogs', 'Blog\BlogController@index');
    // Route::get('/blogs/{id}', 'Blog\BlogController@show');
    // Route::resource('contact-us', 'ContactController');
    // Route::resource('about-us', 'AboutController');
    // Route::post('send-message', 'ContactController@comment');

    //footer
    Route::get('/footer', 'PublicController@footer');
});

require __DIR__ . '/auth.php';