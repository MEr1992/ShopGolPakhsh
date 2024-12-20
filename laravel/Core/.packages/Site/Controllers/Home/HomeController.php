<?php

namespace Site\Controllers\Home;

use App\Http\Controllers\Controller;
use \Models\Content\Slider;
use \Models\Product\Category;
use \Models\Product\Brand;
use \Models\Product\Product;
use \Models\Content\BlogSubject;

class HomeController extends Controller
{
    public function index()
    {
        $items = [
            'sliders' => $this->slider(),
            'categories' => $this->category(),
            'brands' => $this->brand(),
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
        return Category::with("childs")->active()->get();
    }
    public function brand()
    {
        return Brand::active()->get();
    }
    public function lastProduct()
    {
        return Product::with("category")->active()->orderByDesc("id")->limit(8)->get();
    }
    public function bestSellerProduct()
    {
        return Product::active()->orderByDesc("count_sell")->limit(4)->get();
    }
    public function mostVisitedProduct()
    {
        return Product::with("category")->active()->orderByDesc("count_view")->limit(10)->get();
    }
    public function subject()
    {
        return BlogSubject::active()->get();
    }
    /**
     * get data menu
     */
    public function getMenus()
    {
        $items = [
            'categories' => $this->category(),
            'subjects' => $this->subject(),
        ];
        return response()->json($items);
    }
}
