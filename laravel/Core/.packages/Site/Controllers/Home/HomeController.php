<?php

namespace Site\Controllers\Home;

use App\Http\Controllers\Controller;
use \Models\Content\Slider;
use \Models\Product\Category;
use \Models\Product\Brand;
use \Models\Product\Product;
use \Models\Content\BlogSubject;
use \Models\Content\Blog;
use \Models\Content\ContactUs;

class HomeController extends Controller
{
    public function index()
    {
        $items = [
            'sliders' => $this->slider(),
            'categories' => $this->category(),
            'brands' => $this->brand(),
            'cosmeticsLastProducts' => $this->cosmeticsLastProduct(),
            'bodysuitLastProducts' => $this->bodysuitLastProduct(),
            'cosmeticsSuggestionProducts' => $this->cosmeticsSuggestionProduct(),
            'bodysuitSuggestionProducts' => $this->bodysuitSuggestionProduct(),
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
    public function cosmeticsLastProduct()
    {
        return Product::with("category")->Cat2()->active()->orderByDesc("id")->limit(4)->get();
    }
    public function bodysuitLastProduct()
    {
        return Product::with("category")->Cat1()->active()->orderByDesc("id")->limit(12)->get();
    }
    public function cosmeticsSuggestionProduct()
    {
        return Product::with("category")->active()->orderByDesc("count_sell")->limit(12)->get();
    }
    public function bodysuitSuggestionProduct()
    {
        return Product::with("category")->active()->orderByDesc("count_view")->limit(3)->get();
    }
    public function subject()
    {
        return BlogSubject::active()->get();
    }
    /**
     * get data menu
     */
    public function getDataPublic()
    {
        $items = [
            'categories' => $this->category(),
            'brands' => $this->brand(),
            'subjects' => $this->subject(),
        ];
        return response()->json($items);
    }
    /**
     * post Message For Insert
     */
    public function contactSave()
    {
        $record = new ContactUs();
        $record->sender_name = request()->sender_name;
        $record->sender_email = request()->sender_email;
        // $record->subject = request()->subject;
        $record->comment = request()->comment;
        $record->lang = fa;
        $record->save();

        $result = ['message' => "Your message was successful", 'status' => 'successful'];
        return response()->json($result);
    }
}
