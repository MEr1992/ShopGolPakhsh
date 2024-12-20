<?php

namespace Admin\Controllers\Product;

use Admin\Controllers\Public\BaseAbstract;

class ProductCategoryController extends BaseAbstract
{
    protected $model = "Models\Product\Category";
    protected $request = "Publics\Requests\Product\CategoryRequest";
    // protected $needles = ["Product\Category"];

    protected $with = ["activeStatus","parent"];
    protected $showWith = ["activeStatus","parent"];
    // protected $searchFilter = ["name"];
    // protected $files = ["image"];

    public function init()
    {
        // $this->storeQuery = function ($query) {
        //     if (request()->_method != "PUT") {
        //         $query->password = bcrypt(request()->email);
        //     }
        //     $query->save();
        // };

        $this->needles = [
            \Product\Category::class => fn($query) => $query->catParent(),
        ];
    }

  
}