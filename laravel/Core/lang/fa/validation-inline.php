<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => 'این مقدار باید پذیرفته شده باشد.',
    'active_url'           => 'این مقدار یک آدرس معتبر نیست.',
    'after'                => 'این مقدار باید یک تاریخ بعد از :date باشد.',
    'after_or_equal'       => 'این مقدار باید یک تاریخ مساوی یا بعد از :date باشد.',
    'alpha'                => 'این مقدار تنها میتواند شامل حروف باشد.',
    'alpha_dash'           => 'این مقدار تنها میتواند شامل حروف، اعداد، خط تیره و زیرخط باشد.',
    'alpha_num'            => 'این مقداز تنها میتواند شامل حروف و اعداد باشد.',
    'array'                => 'این مقدار باید یک آرایه باشد.',
    'before'               => 'این مقدار باید یک تاریخ قبل از :date باشد.',
    'before_or_equal'      => 'این مقدار باید یک تاریخ مساوی یا قبل از :date باشد.',
    'between'              => [
        'numeric' => 'این مقدار باید بین :min و :max باشد.',
        'file'    => 'حجم این فایل باید بین :min و :max کیلوبایت باشد.',
        'string'  => 'این رشته باید بین :min و :max حرف داشته باشد.',
        'array'   => 'این مقدار باید بین :min و :max گزینه داشته باشد.',
    ],
    'boolean'              => 'این مقدار باید حتما true و یا false باشد.',
    'confirmed'            => 'با مقدار تکرار همخوانی ندارد.',
    'date'                 => 'این مقدار یک تاریخ معبتر نیست.',
    'date_equals'          => 'این مقدار باید یک تاریخ مساوی با :date باشد.',
    'date_format'          => 'این مقدار با فرمت :format همخوانی ندارد.',
    'different'            => 'این مقدار باید متفاوت از :other باشد.',
    'digits'               => 'این مقدار باید :digits رقمی باشد.',
    'digits_between'       => 'تعداد ارقام این مقدار باید بین :min و :max باشد.',
    'dimensions'           => 'ابعاد این عکس نامعتبر است.',
    'distinct'             => 'مقدار این ورودی تکراری است.',
    'email'                => 'این مقدار باید یک آدرس ایمیل معتبر باشد.',
    'ends_with'            => 'این مقدار باید با یکی از عبارت های روبرو پایان یابد: :values.',
    'exists'               => 'مقدار انتخابی نا معتبر است.',
    'file'                 => 'این ورودی باید یک فایل باشد.',
    'filled'               => 'این ورودی باید یک مقدار داشته باشد.',
    'gt'                   => [
        'numeric' => 'مقدار ورودی باید بزرگتر از :value باشد.',
        'file'    => 'حجم فایل ورودی باید بزرگتر از :value کیلوبایت باشد.',
        'string'  => 'تعداد حروف رشته ورودی باید بیشتر از :value باشد.',
        'array'   => 'مقدار ورودی باید بیشتر از :value گزینه داشته باشد.',
    ],
    'gte'                  => [
        'numeric' => 'مقدار ورودی باید بزرگتر یا مساوی :value باشد.',
        'file'    => 'حجم فایل ورودی باید بیشتر یا مساوی :value کیلوبایت باشد.',
        'string'  => 'تعداد حروف رشته ورودی باید بیشتر یا مساوی :value باشد.',
        'array'   => 'مقدار ورودی باید :value گزینه یا بیشتر داشته باشد.',
    ],
    'image'                => 'این مقدار باید یک عکس باشد.',
    'in'                   => 'مقدار انتخابی نامعتبر است.',
    'in_array'             => 'این مقدار در :other موجود نیست.',
    'integer'              => 'این مقدار باید یک عدد صحیح باشد.',
    'ip'                   => 'این مقدار باید یک آدرس IP معتبر باشد.',
    'ipv4'                 => 'این مقدار باید یک آدرس IPv4 معتبر باشد.',
    'ipv6'                 => 'این مقدار باید یک آدرس IPv6 معتبر باشد.',
    'json'                 => 'این مقدار باید یک رشته معتبر JSON باشد.',
    'lt'                   => [
        'numeric' => 'مقدار ورودی باید کمتر از :value باشد.',
        'file'    => 'حجم فایل ورودی باید کمتر از :value کیلوبایت باشد.',
        'string'  => 'تعداد حروف رشته ورودی باید کمتر از :value باشد.',
        'array'   => 'مقدار ورودی باید کمتر از :value گزینه داشته باشد.',
    ],
    'lte'                  => [
        'numeric' => 'مقدار ورودی باید کمتر یا مساوی :value باشد.',
        'file'    => 'حجم فایل ورودی باید کمتر یا مساوی :value کیلوبایت باشد.',
        'string'  => 'تعداد حروف رشته ورودی باید کمتر یا مساوی :value باشد.',
        'array'   => 'مقدار ورودی باید :value گزینه یا کمتر داشته باشد.',
    ],
    'max'                  => [
        'numeric' => 'مقدار ورودی نباید بزرگتر از :max باشد.',
        'file'    => 'حجم فایل ورودی نباید بیشتر از :max کیلوبایت باشد.',
        'string'  => 'تعداد حروف رشته ورودی نباید بیشتر از :max باشد.',
        'array'   => 'مقدار ورودی نباید بیشتر از :max گزینه داشته باشد.',
    ],
    'mimes'                => 'این مقدار باید یک فایل از این انواع باشد: :values.',
    'mimetypes'            => 'این مقدار باید یک فایل از این انواع باشد: :values.',
    'min'                  => [
        'numeric' => 'مقدار ورودی باید حداقل :min باشد.',
        'file'    => 'حجم فایل ورودی باید حداقل :min کیلوبایت باشد.',
        'string'  => 'رشته ورودی باید حداقل :min حرف داشته باشد.',
        'array'   => 'مقدار ورودی باید حداقل :min گزینه داشته باشد.',
    ],
    'multiple_of'          => 'The value must be a multiple of :value',
    'not_in'               => 'گزینه انتخابی نامعتبر است.',
    'not_regex'            => 'این فرمت نامعتبر است.',
    'numeric'              => 'این مقدار باید عددی باشد.',
    'password'             => 'رمزعبور اشتباه است.',
    'present'              => 'این مقدار باید وارد شده باشد.',
    'regex'                => 'این فرمت نامعتبر است.',
    'required'             => 'این مقدار ضروری است.',
    'required_if'          => 'این مقدار ضروری است وقتی که :other برابر :value است.',
    'required_unless'      => 'این مقدار ضروری است مگر اینکه :other برابر :values باشد.',
    'required_with'        => 'این مقدار ضروری است وقتی که :values وارد شده باشد.',
    'required_with_all'    => 'این مقدار ضروری است وقتی که مقادیر :values وارد شده باشند.',
    'required_without'     => 'این مقدار ضروری است وقتی که :values وارد نشده باشد.',
    'required_without_all' => 'این مقدار ضروری است وقتی که هیچکدام از :values وارد نشده باشند.',
    'same'                 => 'مقدار این ورودی باید یکی از مقدار های :other باشد.',
    'size'                 => [
        'numeric' => 'مقدار ورودی باید :size باشد.',
        'file'    => 'حجم فایل ورودی باید :size کیلوبایت باشد.',
        'string'  => 'طول رشته ورودی باید :size حرف باشد.',
        'array'   => 'مقدار ورودی باید :size گزینه داشته باشد.',
    ],
    'starts_with'          => 'این مقدار باید با یکی از گزینه های روبرو شروع شود: :values.',
    'string'               => 'این مقدار باید یک رشته باشد.',
    'unique'               => 'این مقدار قبلا استفاده شده.',
    'uploaded'             => 'این ورودی بارگزاری نشد.',
    'url'                  => 'این فرمت نامعتبر است.',
    'uuid'                 => 'این مقدار باید یک UUID معتبر باشد.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

];
