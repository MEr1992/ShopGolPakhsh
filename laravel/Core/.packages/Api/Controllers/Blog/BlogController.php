<?php

namespace Api\Controllers\Blog;

use Api\Http\Controllers\Controller;
use \Models\Content\Blog;
use \Models\Content\BlogSubject;
use \Models\Base\Keyword;
use \Models\Base\Country;

class BlogController extends Controller
{

    public function index()
    {   
       
        $collection = Blog::active()->with('subject')->orderBy('id','desc');

        $collection = $this->filter($collection);
        
        $collection = $collection->paginate(6);
        
        $subjects = \Models\Content\BlogSubject::active()->get();

        $result = ['collection' => $collection, 'topics' => $subjects        ];

        return response()->json($result);

    }

    public function show($id)
    {
        $blog = Blog::with('subject')->find($id);
        $subjects = \Models\Content\BlogSubject::active()->get();

        $result = ['blog' => $blog , 'topics' => $subjects];

        return response()->json($result);

    }
   
    public function filter($items)
    {
        $items = $items->orderBy('id', 'DESC');

        if (request()->has('sort')) {
            $items = $items->orderBy('id', request()->sort);
        }

        if (request()->has('search')) {
            $items = $items->where('title', 'like', "%" . request()->search . "%");
        }

        if (request()->has('topics')) {
            $items = $items->where('subject_id', request()->topics);
        }

        if (request()->has('lang')) {
            $items = $items->where('lang', request()->lang);
        }

        return $items;
    }
    public function saveComment(Request $request)
    {
        $this->validate($request, [
            'sender_name' => 'required|string',
            'comment' => 'required',
        ]);
        $comment = BlogComment::create($request->all());
        // $message = 'نظر شما با موفقیت ثبت شد!';
        $message = trans('Lang::messages.comment_success');
        if ($comment) {
            return response()->json(['message' => $message, 'status' => 200]);
        }
    }   
}
