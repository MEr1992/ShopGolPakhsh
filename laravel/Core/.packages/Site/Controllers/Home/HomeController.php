<?php

namespace Site\Controllers\Home;

use App\Http\Controllers\Controller;
use \Models\Content\Slider;
use \Models\Product\Category;
use \Models\Product\Brand;
use \Models\Product\Line;
use \Models\Product\Product;

class HomeController extends Controller
{
    public function index()
    {
        $items = [
            'sliders' => $this->slider(),
            'categories' => $this->category(),
            'brands' => $this->brand(),
            'lines' => $this->line(),
            'lastProducts' => $this->lastProduct(),
            'bestSellerProducts' => $this->bestSellerProduct(),
            'mostVisitedProducts' => $this->mostVisitedProduct(),
        ];
        return response()->json($items);
    }

    public function slider()
    {
        return Slider::active()->get();
    }
    public function category()
    {
        return Category::active()->get();
    }
    public function brand()
    {
        return Brand::active()->get();
    }
    public function line()
    {
        return Line::active()->orderBy("id","ASC")->get();
    }
    public function lastProduct()
    {
        return Product::active()->orderByDesc("id")->limit(8)->get();
    }
    public function bestSellerProduct()
    {
        return Product::active()->orderByDesc("count_sell")->limit(4)->get();
    }
    public function mostVisitedProduct()
    {
        return Product::active()->orderByDesc("count_view")->limit(10)->get();
    }
}
