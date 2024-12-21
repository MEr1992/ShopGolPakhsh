<?php

namespace Models\Content;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class Slider extends Model
{
    use Base;
    protected $guarded = ['created_at', 'updated_at', 'deleted_at'];
    protected $table   = 'content_sliders';
   
}
