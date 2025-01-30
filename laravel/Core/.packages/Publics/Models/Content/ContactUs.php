<?php
namespace Models\Content;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class ContactUs extends Model
{
    use Base;
    
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['updated_at','deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'content_contactus';
    
    // public function newQuery($excludeDeleted = true)
    // {
    //     return parent::newQuery($excludeDeleted)->where($this->table.'.lang', \App::getLocale());
    // }
    protected static function booted(): void
    {
        static::deleting(function(Brand $brand) { // before delete() method call this 
            //
        });
    }
}
