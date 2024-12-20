<?php

$lang = [
    // ******************* Products *************************
    'count_product' => 'تعداد محصول',
    'thumbnail' => 'تصویر بندانگشتی',
    'download_count' => 'تعداد دانلود',
    'size' => 'اندازه',
    'level' => 'سطح',
    'views' => 'بازدیدها',
    'youtube' => 'یوتیوب',
    'content' => 'محتوا',
    'all' => 'همه',
    'users' => 'کاربران',
    'site_texts' => 'تنظیمات سایت',
    'keywords' => 'کلیدواژه‌ها',
    'keyword' => 'کلیدواژه',
    'topic' => 'دسته‌بندی',
    'topics' => 'دسته‌بندی‌ها',
    'biography' => 'بیوگرافی',
    'blog' => 'وبلاگ',
    'creator' => 'ایجاد کننده',
    'editor' => 'ویرایشگر',
    'created_at' => 'تاریخ ثبت',
    'comments' => 'نظرات',
    'profile' => 'پروفایل',
    'birthdate' => 'تاریخ تولد',
    'code' => 'کد',
    'title_en' => 'عنوان',
    'description_en' => 'توضیحات',
    'display_status' => 'وضعیت نمایش',
    'display' => 'نمایش',
    'text_en' => 'متن',
    'active' => 'فعال',
    'inactive' => 'غیرفعال',
    'new_password_confirmation' => 'تأیید رمز عبور',
    'change' => 'تغییر',
    'view_more' => 'مشاهده بیشتر',
    'title_fa' => 'عنوان',
    'text_fa' => 'توضیح',
    'photo' => 'تصویر',
    'view_info' => 'مشاهده جزییات',
    'detail' => 'جزییات',
    'image_pdf' => 'تصاویر (pdf)',
    'audio' => 'صوت',
    'about'=>'درباره',
    'files'=>'فایلها',
    'count'=>'تعداد',
    'report'=>'گزارش',
    'more_detail'=>'جزییات بیشتر',
    // Words Of Site For Home
    'tilte_slider'=>'مجموعه تابستانی',
    'text_slider'=>'مد روز و کلاسیک برای فصل جدید',
    'rotating_slider'=>'محصولات خاص فروشگاه',
    'rotating_slider1'=>'محصولات بیشتر',
    'tilte_cat'=>'دسته بندی های ویژه',
    'text_cat'=>'پرطرفدارترین محصولات را در Shop کشف کنید.',
    'rotating_cat'=>'دسته های خاص فروشگاه',
    'last_products'=>'جدیدترین ها',
    'quick_view'=>'مشاهده سریع',
    'tilte_best'=>'پرفروش ترین ها برای شما',
    'text_best'=>'تا 60٪ تخفیف + تا 107 دلار بازگشت نقدی',
    'see_all'=>'مشاهده همه',
    'animate_best'=>'Great saving',
    // 'animate_best'=>'صرفه جویی عالی',
    'up_to'=>'تا',
    'off'=>'تخفیف',
    'free_delivery'=>'تحویل رایگان',
    // 'tilte_line'=>'Set your wardrobe with our  amazing selection!',
    'tilte_line'=>'کمد لباس خود را با انتخاب شگفت انگیز ما ست کنید!',
    'text_line'=>'Lorem Ipsum به سادگی متن ساختگی صنعت چاپ و حروفچینی است. لورم ایپسوم از آن زمان تاکنون متن ساختگی استاندارد صنعت بوده است',
    // 'text_brand'=>'We’re just keep growing  with 6.3k trusted companies',
    'text_brand'=>'ما با 6.3 هزار شرکت قابل اعتماد به رشد خود ادامه می دهیم',
    'rotating_brand'=>'شرکای ما - شرکای ما - ',
    'most_visited_products'=>'پربازدید ترین ها',
    'see_all'=>'مشاهده همه',
    // Words Of Site
    'filter' => 'فیلتر',
    'showing'=>'نمایش',
    'of'=>'از',
    'results'=>'Results',
    'search_product'=>'جستجو محصول',
    // 'search_product'=>'Search Product',
];

$menus = include(__DIR__.'/./menus.php');
$lang = array_merge($lang, $menus);

$login = include(__DIR__.'/./login.php');
$lang = array_merge($lang, $login);

$menus = include(__DIR__.'/./menus.php');
$lang = array_merge($lang, $menus);

$breadcrumbs = include(__DIR__.'/./breadcrumbs.php');
$lang = array_merge($lang, $breadcrumbs);

$adminPublic = include(__DIR__.'/./admin-public.php');
$lang = array_merge($lang, $adminPublic);

if (\App::getLocale() == 'en') {
    $lang2 = include(__DIR__.'/./fa-words.php');
    $lang = array_merge($lang, $lang2);
}

return $lang;
?>
