<?php

namespace Admin\Controllers\Product;

use Admin\Controllers\Public\BaseAbstract;

class ProductController extends BaseAbstract
{
    protected $model = "Models\Product\Product";
    protected $request = "Publics\Requests\Product\ProductRequest";
    protected $with = ["activeStatus","brand","categoryParent","category"];
    protected $needles = ['Product\Brand',"Product\Category"];
    protected $showWith = ["activeStatus","brand","categoryParent","category"];
    // protected $searchFilter = ["name"];
    // protected $files = ["image"];

    public function init()
    {
        // $this->storeQuery = function ($query) {
           
        //     $query->save();
        // };

    }
    
}