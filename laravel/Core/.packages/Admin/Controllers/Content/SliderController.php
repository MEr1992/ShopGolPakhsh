<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;
use Models\Content\BlogComment;
use Models\User;

class SliderController extends BaseAbstract
{
    protected $model = 'Models\Content\Slider';
    // protected $request = 'Publics\Requests\Content\SliderRequest';
    protected $files = ["image"];
    protected $with = ["activeStatus"];

    
}
