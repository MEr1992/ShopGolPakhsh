<?php

namespace Site\Controllers\Product;

use App\Http\Controllers\Controller;
use \Models\Content\Slider;
use \Models\Product\Category;
use \Models\Product\Brand;
use \Models\Product\Line;
use \Models\Product\Product;

class ProductController extends Controller
{
    public function index()
    {
        $items = [
            'products' => $this->products(),
            'categories' => $this->category(),
        ];
        return response()->json($items);
    }
    /**
     * get All Products
     */
    public function products()
    {
        return Product::with("category")->active()->orderByDesc("id")->paginate(9);
    }
    /**
     * get All Categories
     */
    public function category()
    {
        return Category::with("childs")->active()->catParent()->get();
    }
    /**
     * get Info a Product By $id
     */
    public function show($id)
    {
        $product = Product::with("category","categoryParent","keywords")->active()->find($id);
        $products = Product::where("id", "!=", $id)->where("category_id", $product->category_id)->active()->get();
        $data = [
            'product'=>$product,
            'products'=>$products,
        ];
        return $data;
    }
}
