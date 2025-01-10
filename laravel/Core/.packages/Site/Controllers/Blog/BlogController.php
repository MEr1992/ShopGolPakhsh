<?php

namespace Site\Controllers\Blog;

use App\Http\Controllers\Controller;
use \Models\Content\Blog;
use \Models\Content\BlogSubject;
use \Models\Base\Keyword;
use \Models\Base\Country;

class BlogController extends Controller
{
    public $search;
    public $subject_id;
    public $sort;
    public $limit;
    public $limit_most;

    public function index()
    {
        $this->search = request()->search;
        $this->subject_id = request()->subject;
        $this->sort = request()->sort;
        $this->limit = 6;
        $this->limit_most = 4;
        if(request()->type == "first")
        {
            $items = [
                'blogs' => $this->blogs(),
                'mostVisitedBlogs' => $this->mostVisitedBlogs(),
                'subjects' => $this->subject(),
            ];
        }
        else
        {
            $items = [
                'blogs' => $this->filterBlogs(),
            ];
        }
        return response()->json($items);
    }
    /**
     * get All Blogs
     */
    public function blogs()
    {
        return Blog::with("subject")->active()->orderByDesc("id")->paginate($this->limit);
    }
    /**
     * get All Blogs
     */
    public function mostVisitedBlogs()
    {
        return Blog::active()->orderByDesc("count_view")->latest()->limit($this->limit_most)->get();
    }
    /**
     * get All Subjects
     */
    public function subject()
    {
        return BlogSubject::active()->get();
    }
    /**
     * get filter In Blogs By $search || $subject_id
     */
    public function filterBlogs()
    {
        $blogs = Blog::with("subject")->active();
        if($this->search)
        {
            $search_like = $this->search;
            $blogs = $blogs->where(function ($q) use($search_like) { $q->where("title", "LIKE", "%".$search_like."%")->orWhere("summary", "LIKE", "%".$search_like."%"); });
        }
        if($this->subject_id)
        {
            $filter_blogs = $blogs->where("subject_id", $this->subject_id);
        }
        $filter_blogs = $blogs->orderByDesc("id")->paginate($this->limit);
        return $filter_blogs;
    }
    /**
     * get Info a Blog By $id
     */
    public function show($id)
    {
        $blog = Blog::with("subject")->active()->find($id);
        
        $this->incrementCount(["blog"=>$blog,"field"=>"count_view"]);

        $data = [
            'blog'=>$blog,
        ];
        return $data;
    }
    /**
     * Plus Count For Field (view,like,sell,...)
     */
    public function incrementCount($info)
    {
        if(isset($info["id"]) && $info["id"] > 0) $info["blog"] = Blog::find($info["id"]);
        $info["blog"]->increment($info["field"]);
    }
}
