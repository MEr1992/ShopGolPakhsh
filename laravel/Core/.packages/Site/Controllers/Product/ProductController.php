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
    public $search;
    public $line_id;
    public $cat_id;
    public $min;
    public $max;

    public function index()
    {
        $this->search = request()->search;
        $this->line_id = request()->line;
        $this->cat_id = request()->category;
        $this->min = request()->min;
        $this->max = request()->max;
        if(request()->type == "first")
        {
            $items = [
                'products' => $this->products(),
                'categories' => $this->category(),
            ];
        }
        else
        {
            $items = [
                'products' => $this->filterProducts(),
                // 'categories' => $this->category(),
            ];
        }
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
     * get filter In Products By $search || $line_id || $cat_id
     */
    public function filterProducts()
    {
        $products = Product::with("category")->active();
        if($this->search)
        {
            $search_like = $this->search;
            $products = $products->where(function ($q) use($search_like) { $q->where("name", "LIKE", "%".$search_like."%")->orWhere("summary", "LIKE", "%".$search_like."%"); });
        }
        if($this->line_id)
        {
            $products = $products->where("parent_category", $this->line_id);
        }
        if($this->cat_id)
        {
            $filter_products = $products->where("category_id", $this->cat_id);
        }
        $filter_products = $products->orderByDesc("id")->paginate(9);
        return $filter_products;
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
