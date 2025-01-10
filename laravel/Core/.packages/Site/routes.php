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
    // Authentication routes...
    Route::get('/login/google', 'Auth\GoogleController@redirectToGoogle')->name('auth.google');

    // routes for user authentication and registration
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/logout', 'Auth\AuthController@logout');
    });

    // public  routes that do not require authintication
    Route::get('/', 'Home\HomeController@index');
    Route::get('/get-data-public', 'Home\HomeController@getDataPublic');
    // Route::get('/about', 'Home\HomeController@about');
    // Route::get('/contact', 'Home\HomeController@contact');

    Route::get('/products/add-to-cart/{id}', 'Product\ProductController@addToCart');
    Route::get('/products/add-to-favorites/{id}', 'Product\ProductController@addToFavorites');
    Route::get('/products/{id}', 'Product\ProductController@show');
    Route::get('/products', 'Product\ProductController@index');

    Route::get('/blog/{id}', 'Blog\BlogController@show');
    Route::get('/blog', 'Blog\BlogController@index');
});

require __DIR__ . '/auth.php';