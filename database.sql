/*
SQLyog Professional v13.1.1 (64 bit)
MySQL - 10.4.32-MariaDB : Database - shoponline
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`shoponline` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `shoponline`;

/*Table structure for table `base_keywords` */

DROP TABLE IF EXISTS `base_keywords`;

CREATE TABLE `base_keywords` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL COMMENT 'عنوان',
  `order` int(11) DEFAULT NULL COMMENT 'ترتیب',
  `count_blog` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد مقاله',
  `count_product` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد محصول',
  `lang` varchar(255) NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `base_keywords` */

/*Table structure for table `base_languages` */

DROP TABLE IF EXISTS `base_languages`;

CREATE TABLE `base_languages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(10) DEFAULT NULL COMMENT 'عنوان',
  `symbol` varchar(5) DEFAULT NULL COMMENT 'عنوان اختصاری',
  `dir` varchar(3) NOT NULL DEFAULT 'rtl' COMMENT 'چینش',
  `icon` varchar(50) DEFAULT NULL COMMENT 'آیکون',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `base_languages` */

insert  into `base_languages`(`id`,`title`,`symbol`,`dir`,`icon`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'فارسی','fa','rtl','fa.png',1,NULL,'2024-09-14 11:56:33','2024-09-14 11:56:33'),
(2,'English','en','ltr','en.png',0,NULL,'2024-09-14 11:56:33','2024-09-14 11:56:33'),
(3,'عربی','ar','rtl','ar.png',0,NULL,'2024-09-14 11:56:33','2024-09-14 11:56:33');

/*Table structure for table `base_statuses` */

DROP TABLE IF EXISTS `base_statuses`;

CREATE TABLE `base_statuses` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title_fa` varchar(200) DEFAULT NULL COMMENT 'عنوان به زبان فارسی',
  `title_en` varchar(200) DEFAULT NULL COMMENT 'عنوان به زبان عربی',
  `group_id` int(11) DEFAULT NULL COMMENT 'شناسه گروه وضعیت',
  `code` varchar(3) DEFAULT NULL COMMENT 'کد وضعیت',
  `color` varchar(20) DEFAULT NULL COMMENT 'رنگ',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `base_statuses` */

insert  into `base_statuses`(`id`,`title_fa`,`title_en`,`group_id`,`code`,`color`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'وضعیت فعالی','active status',NULL,NULL,NULL,1,NULL,'2024-09-14 11:56:33','2024-09-14 11:56:33'),
(2,'فعال','active',1,'1','theme-10',1,NULL,'2024-09-14 11:56:33','2024-09-14 11:56:33'),
(3,'غیر فعال','inactive',1,'0','theme-24',1,NULL,'2024-09-14 11:56:33','2024-09-14 11:56:33');

/*Table structure for table `blog_comments` */

DROP TABLE IF EXISTS `blog_comments`;

CREATE TABLE `blog_comments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `creator_id` int(11) DEFAULT NULL COMMENT 'شناسه کاربر ثبت کننده(فرستنده پیام)',
  `editor_id` int(11) DEFAULT NULL COMMENT 'شناسه کاربر ویرایش کننده',
  `blog_id` int(11) DEFAULT NULL COMMENT 'شناسه محتوا',
  `parent_id` int(11) NOT NULL DEFAULT 0 COMMENT 'شناسه پیام اصلی',
  `comment` text DEFAULT NULL COMMENT 'اظهار نظر',
  `confirm_user_id` int(11) DEFAULT NULL COMMENT 'شناسه پرسنل برای تأیید یا رد',
  `confirm_id` int(11) NOT NULL DEFAULT 2 COMMENT 'شناسه وضعیت تأیید، از جدول وضعیت ها',
  `lang` varchar(2) NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `blog_comments` */

/*Table structure for table `blog_keyword` */

DROP TABLE IF EXISTS `blog_keyword`;

CREATE TABLE `blog_keyword` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `blog_id` int(11) DEFAULT NULL COMMENT 'شناسه مقاله',
  `keyword_id` int(11) DEFAULT NULL COMMENT 'شناسه کلمه کلیدی',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `blog_keyword` */

/*Table structure for table `blog_subjects` */

DROP TABLE IF EXISTS `blog_subjects`;

CREATE TABLE `blog_subjects` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title_fa` varchar(50) DEFAULT NULL COMMENT 'عنوان',
  `order` int(11) DEFAULT 1 COMMENT 'ترتیب',
  `count_blog` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد محتوا',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `blog_subjects` */

insert  into `blog_subjects`(`id`,`title_fa`,`order`,`count_blog`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'آرایش صورت',1,0,1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(2,'مراقبت پوست',2,0,1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(3,'محصولات مو',3,0,1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(4,'لوازم آرایش چشم',4,0,1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(5,'نکات آرایشی',5,0,1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(6,'میزان محبوبیت محصولات',6,0,1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17');

/*Table structure for table `blogs` */

DROP TABLE IF EXISTS `blogs`;

CREATE TABLE `blogs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL COMMENT 'عنوان',
  `subject_id` int(11) DEFAULT NULL COMMENT 'شناسه موضوع محتوا',
  `creator_id` int(11) DEFAULT NULL COMMENT 'شناسه کاربر ثبت کننده',
  `editor_id` int(11) DEFAULT NULL COMMENT 'شناسه کاربر ویرایش کننده',
  `thumb` varchar(255) DEFAULT NULL COMMENT 'بند انگشتی',
  `img` varchar(255) DEFAULT NULL COMMENT 'چندین عمس',
  `video` varchar(255) DEFAULT NULL COMMENT 'چندین ویدئو',
  `document` varchar(255) DEFAULT NULL COMMENT 'چندین فایل داکیومنت',
  `summary` text DEFAULT NULL COMMENT 'متن خلاصه',
  `text` text DEFAULT NULL COMMENT 'متن توضیحات',
  `count_comment` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد پیام',
  `count_comment_waiting` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد پیام نیاز به بررسی',
  `count_comment_confirmed` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد پیام تأیید شده',
  `count_comment_rejected` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد پیام رد شده',
  `count_view` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد بازدید',
  `lang` varchar(2) NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `blogs` */

insert  into `blogs`(`id`,`title`,`subject_id`,`creator_id`,`editor_id`,`thumb`,`img`,`video`,`document`,`summary`,`text`,`count_comment`,`count_comment_waiting`,`count_comment_confirmed`,`count_comment_rejected`,`count_view`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'راهنمای کامل آرایش صورت برای مبتدیان',1,1,1,'pic1.jpg','pic1.jpg','video1.mp4','doc1.pdf','در این مقاله نکات اساسی برای آرایش صورت را خواهید آموخت.','این مقاله به شما آموزش می‌دهد چگونه از لوازم آرایشی به بهترین شکل استفاده کنید.',0,0,0,0,100,'fa',1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(2,'مراقبت از پوست: بهترین محصولات برای انواع پوست',2,1,1,'pic2.jpg','pic2.jpg','video2.mp4','doc2.pdf','مقاله‌ای برای آشنایی با بهترین محصولات مراقبت از پوست برای هر نوع پوست.','در این مقاله به شما بهترین کرم‌ها و محصولات مراقبت از پوست را معرفی خواهیم کرد.',0,0,0,0,150,'fa',1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(3,'محصولات مراقبت از مو برای داشتن موهای سالم',3,1,1,'pic3.jpg','pic3.jpg','video3.mp4','doc3.pdf','با این محصولات مراقبت از مو می‌توانید موهایی سالم و درخشان داشته باشید.','در این مقاله بهترین شامپوها و محصولات مراقبت از مو معرفی می‌شوند.',0,0,0,0,200,'fa',1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(4,'چگونه آرایش چشم خود را جذاب کنیم؟',4,1,1,'pic4.jpg','pic4.jpg','video4.mp4','doc4.pdf','آرایش چشم‌ها می‌تواند جلوه‌ای خاص به صورت شما بدهد.','در این مقاله تکنیک‌های مختلف آرایش چشم از جمله استفاده از ریمل و سایه چشم را یاد خواهید گرفت.',0,0,0,0,250,'fa',1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(5,'نکات طلایی در آرایش روزانه',5,1,1,'pic5.jpg','pic5.jpg','video5.mp4','doc5.pdf','این مقاله به شما کمک می‌کند تا آرایش روزانه خود را ساده و شیک نگه دارید.','در این مقاله به بررسی نکات کاربردی برای یک آرایش روزانه طبیعی و زیبا می‌پردازیم.',0,0,0,0,300,'fa',1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(6,'محبوب‌ترین لوازم آرایش در سال 2024',6,1,1,'pic6.jpg','pic6.jpg','video6.mp4','doc6.pdf','مقاله‌ای از بررسی بهترین و محبوب‌ترین لوازم آرایشی در سال 2024.','در این مقاله لیستی از بهترین لوازم آرایشی که امسال در بازار مورد توجه قرار گرفته است، ارائه خواهیم داد.',0,0,0,0,400,'fa',1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17');

/*Table structure for table `cache` */

DROP TABLE IF EXISTS `cache`;

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `cache` */

/*Table structure for table `content_site_texts` */

DROP TABLE IF EXISTS `content_site_texts`;

CREATE TABLE `content_site_texts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title_fa` varchar(200) DEFAULT NULL COMMENT 'عنوان به زبان فارسی',
  `code` int(11) DEFAULT NULL COMMENT 'کد',
  `icon` varchar(200) DEFAULT NULL COMMENT 'آیکون',
  `image` varchar(200) DEFAULT NULL COMMENT 'تصویر',
  `text_fa` text DEFAULT NULL COMMENT 'متن به زبان فارسی',
  `text_fa_2` text DEFAULT NULL,
  `btn_txt_1` varchar(255) DEFAULT NULL,
  `btn_url_1` varchar(255) DEFAULT NULL,
  `btn_txt_2` varchar(255) DEFAULT NULL,
  `btn_url_2` varchar(255) DEFAULT NULL,
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_site_texts` */

/*Table structure for table `content_sliders` */

DROP TABLE IF EXISTS `content_sliders`;

CREATE TABLE `content_sliders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL COMMENT 'عنوان',
  `title_2` varchar(200) DEFAULT NULL COMMENT 'عنوان دوم',
  `link` varchar(200) DEFAULT NULL COMMENT 'لینک',
  `link_2` varchar(200) DEFAULT NULL COMMENT 'لینک دوم',
  `btn` varchar(200) DEFAULT NULL COMMENT 'عنوان دکمه',
  `btn_2` varchar(200) DEFAULT NULL COMMENT 'عنوان دکمه دوم',
  `price` varchar(200) DEFAULT NULL COMMENT 'قیمت در اسلایدر',
  `mobile` int(11) NOT NULL DEFAULT 0 COMMENT 'اسلایدر موبایل مقدار 1 و اسلایدر سیستم مقدار 0',
  `order` int(11) DEFAULT 1 COMMENT 'ترتیب',
  `image` varchar(200) DEFAULT NULL COMMENT 'تصویر',
  `lang` varchar(2) NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `content_sliders` */

insert  into `content_sliders`(`id`,`title`,`title_2`,`link`,`link_2`,`btn`,`btn_2`,`price`,`mobile`,`order`,`image`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'Beautiful Woman Purple Sweater.',NULL,NULL,NULL,'ADD TO CART','VIEW DETAIL','$75.00',0,1,'banner-media.png','en',1,NULL,NULL,NULL),
(2,'Shot Slad Curly Woman.',NULL,NULL,NULL,'ADD TO CART','VIEW DETAIL','$50.00',0,1,'banner-media2.png','en',1,NULL,NULL,NULL),
(3,'Athletic Mesh Sports Leggings.',NULL,NULL,NULL,'ADD TO CART','VIEW DETAIL','$65.00',0,1,'banner-media3.png','en',1,NULL,NULL,NULL),
(4,'Curly Girl Beautiful Dress.',NULL,NULL,NULL,'ADD TO CART','VIEW DETAIL','$85.00',0,1,'banner-media4.png','en',1,NULL,NULL,NULL),
(5,'Vintage Denim Overalls Shorts.',NULL,NULL,NULL,'ADD TO CART','VIEW DETAIL','$95.00',0,1,'banner-media5.png','en',1,NULL,NULL,NULL),
(6,'ژاکت بنفش زن زیبا.',NULL,NULL,NULL,'افزودن به سبد خرید','مشاهده جزییات','$75.00',0,1,'banner-media.png','fa',1,NULL,NULL,NULL),
(7,'شلیک اسلد زن فرفری.',NULL,NULL,NULL,'افزودن به سبد خرید','مشاهده جزییات','$50.00',0,1,'banner-media2.png','fa',1,NULL,NULL,NULL),
(8,'ساق ورزشی مشبک ورزشی.',NULL,NULL,NULL,'افزودن به سبد خرید','مشاهده جزییات','$65.00',0,1,'banner-media3.png','fa',1,NULL,NULL,NULL),
(9,'لباس دختر مجعد زیبا.',NULL,NULL,NULL,'افزودن به سبد خرید','مشاهده جزییات','$85.00',0,1,'banner-media4.png','fa',1,NULL,NULL,NULL),
(10,'شلوارک جین قدیمی.',NULL,NULL,NULL,'افزودن به سبد خرید','مشاهده جزییات','$95.00',0,1,'banner-media5.png','fa',1,NULL,NULL,NULL);

/*Table structure for table `product_brands` */

DROP TABLE IF EXISTS `product_brands`;

CREATE TABLE `product_brands` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name_fa` varchar(255) DEFAULT NULL COMMENT 'نام',
  `name_en` varchar(200) DEFAULT NULL COMMENT 'نام',
  `logo` varchar(255) DEFAULT NULL COMMENT 'لوگو',
  `count_product` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد محصولات در برند',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `product_brands` */

insert  into `product_brands`(`id`,`name_fa`,`name_en`,`logo`,`count_product`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'برند ۱','Brand 1','logo1.png',2,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(2,'برند ۲','Brand 2','logo2.png',2,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(3,'برند ۳','Brand 3','logo3.png',2,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(4,'برند ۴','Brand 4','logo4.png',2,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(5,'برند ۵','Brand 5','logo5.png',2,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(6,'برند ۶','Brand 6','logo6.png',1,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(7,'برند ۷','Brand 7','logo7.png',1,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(8,'برند ۸','Brand 8','logo8.png',1,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(9,'برند ۹','Brand 9','logo1.png',1,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(10,'برند ۱۰','Brand 10','logo2.png',1,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(11,'برند ۱','Brand 1','logo1.png',1,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(12,'برند ۲','Brand 2','logo2.png',1,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(13,'برند ۳','Brand 3','logo3.png',2,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(14,'برند ۴','Brand 4','logo4.png',2,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(15,'برند ۵','Brand 5','logo5.png',2,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(16,'برند ۶','Brand 6','logo6.png',1,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(17,'برند ۷','Brand 7','logo7.png',1,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(18,'برند ۸','Brand 8','logo8.png',1,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(19,'برند ۹','Brand 9','logo1.png',1,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17'),
(20,'برند ۱۰','Brand 10','logo2.png',1,1,NULL,'2024-10-31 11:35:22','2024-10-31 12:52:17');

/*Table structure for table `product_categories` */

DROP TABLE IF EXISTS `product_categories`;

CREATE TABLE `product_categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title_fa` varchar(255) DEFAULT NULL COMMENT 'عنوان',
  `title_en` varchar(200) DEFAULT NULL COMMENT 'عنوان',
  `parent_id` int(11) NOT NULL DEFAULT 0 COMMENT 'شناسه دسته بندی اصلی',
  `image` varchar(255) DEFAULT NULL COMMENT 'تصویر',
  `count_child` int(2) NOT NULL DEFAULT 0 COMMENT 'تعداد دسته بندی سطح دو',
  `count_product` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد محصولات در دسته بندی',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `product_categories` */

insert  into `product_categories`(`id`,`title_fa`,`title_en`,`parent_id`,`image`,`count_child`,`count_product`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'لباس های لوکس','Luxury Bras',0,'line-3.png',3,6,1,NULL,NULL,NULL),
(2,'تابستان','Summer',0,'line-2.png',2,6,1,NULL,NULL,NULL),
(3,'لباس شنا','Swimwear',0,'line-1.png',2,5,1,NULL,NULL,NULL),
(4,'پیراهن','Shirts',1,'1.png',0,4,1,NULL,NULL,NULL),
(5,'شورت','Shorts',2,'2.png',0,5,1,NULL,NULL,NULL),
(6,'تی شرت','t-Shirt',3,'3.png',0,4,1,NULL,NULL,NULL),
(7,'تی جین','t-Jeans',1,'4.png',0,1,1,NULL,NULL,NULL),
(8,'تی جین','t-Jeans',2,'5.png',0,1,1,NULL,NULL,NULL),
(9,'شورت','Shorts',3,'2.png',0,1,1,NULL,NULL,NULL),
(10,'تی شرت','t-Shirt',1,'3.png',0,1,1,'2024-12-20 16:05:55',NULL,'2024-12-20 16:05:55'),
(11,'ffhggh',NULL,1,'image39611734709940.jpg###',0,0,1,'2024-12-20 16:53:26','2024-12-20 16:52:23','2024-12-20 16:53:26');

/*Table structure for table `product_keyword` */

DROP TABLE IF EXISTS `product_keyword`;

CREATE TABLE `product_keyword` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL COMMENT 'شناسه محصول',
  `keyword_id` int(11) DEFAULT NULL COMMENT 'شناسه کلمه کلیدی',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `product_keyword` */

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT 'نام',
  `category_id` int(11) DEFAULT NULL COMMENT 'شناسه دسته بندی محصول',
  `parent_category` int(11) DEFAULT NULL COMMENT 'شناسه دسته بندی اصلی محصول',
  `brand_id` int(11) DEFAULT NULL COMMENT 'شناسه برند محصول',
  `price` int(11) DEFAULT NULL COMMENT 'قیمت',
  `discount` int(11) DEFAULT NULL COMMENT 'درصد تخفیف',
  `discount_price` int(11) DEFAULT NULL COMMENT 'قیمت تخفیف خورده',
  `image` varchar(255) DEFAULT NULL COMMENT 'تصویر',
  `review` text DEFAULT NULL COMMENT 'نقد وبررسی',
  `usage` text DEFAULT NULL COMMENT 'نحوه استفاده و مصرف',
  `description` text DEFAULT NULL COMMENT 'توضیحات',
  `count_view` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد بازدید',
  `count_sell` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد فروش',
  `count_like` int(11) NOT NULL DEFAULT 0 COMMENT 'تعداد علاقه مندی',
  `lang` varchar(255) NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `products` */

insert  into `products`(`id`,`name`,`category_id`,`parent_category`,`brand_id`,`price`,`discount`,`discount_price`,`image`,`review`,`usage`,`description`,`count_view`,`count_sell`,`count_like`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'Cozy Knit Cardigan Sweater',4,1,1,95,79,80,'product-2-1.png',NULL,NULL,NULL,0,10,0,'en',1,NULL,NULL,NULL),
(2,'Sophisticated Swagger Suit',5,2,2,95,NULL,NULL,'product-2-2.png',NULL,NULL,NULL,0,8,0,'en',1,NULL,NULL,NULL),
(3,'Classic Denim Skinny Jeans',6,3,3,95,NULL,NULL,'product-2-3.png',NULL,NULL,NULL,0,5,0,'en',1,NULL,NULL,NULL),
(4,'Athletic Mesh Sports Leggings',7,1,4,95,79,80,'product-2-4.png',NULL,NULL,NULL,0,2,0,'en',1,NULL,NULL,NULL),
(5,'Printed Spread Collar Casual Shirt',8,2,5,95,79,80,'shart-1.png',NULL,NULL,NULL,100,0,0,'en',1,NULL,NULL,NULL),
(6,'Checkered Slim Collar Casual Shirt',9,3,6,95,79,80,'shart-2.png',NULL,NULL,NULL,90,0,0,'en',1,NULL,NULL,NULL),
(7,'Solid Cut Away Collar Casual Shirt',10,1,7,95,79,80,'shart-3.png',NULL,NULL,NULL,80,0,0,'en',1,NULL,NULL,NULL),
(8,'Printed Spread Collar Casual Shirt',5,2,8,95,79,80,'shart-4.png',NULL,NULL,NULL,70,0,0,'en',1,NULL,NULL,NULL),
(9,'Checkered Spread Collar Casual Shirt',6,3,9,95,79,80,'shart-5.png',NULL,NULL,NULL,60,0,0,'en',1,NULL,NULL,NULL),
(10,'Water-Resistant Windbreaker Jacket',4,1,10,95,20,80,'8.png',NULL,NULL,NULL,0,0,0,'en',1,NULL,NULL,NULL),
(11,'Plaid Wool Winter Coat',5,2,11,95,20,80,'7.png',NULL,NULL,NULL,0,0,0,'en',1,NULL,NULL,NULL),
(12,'Satin Wrap Party Blouse',6,3,12,95,20,80,'6.png',NULL,NULL,NULL,0,0,0,'en',1,NULL,NULL,NULL),
(13,'Vintage Denim Overalls Shorts',4,1,1,95,20,80,'5.png',NULL,NULL,NULL,0,0,0,'en',1,NULL,NULL,NULL),
(14,'Athletic Mesh Sports Leggings',5,2,2,95,20,80,'4.png',NULL,NULL,NULL,0,0,0,'en',1,NULL,NULL,NULL),
(15,'Classic Denim Skinny Jeans',6,3,3,95,20,80,'3.png',NULL,NULL,NULL,0,0,0,'en',1,NULL,NULL,NULL),
(16,'Sophisticated Swagger Suit',4,1,4,95,20,80,'2.png',NULL,NULL,NULL,0,0,0,'en',1,NULL,NULL,NULL),
(17,'Cozy Knit Cardigan Sweater',5,2,5,95,20,80,'1.png',NULL,NULL,NULL,0,0,0,'en',1,NULL,NULL,NULL),
(18,'ژاکت کشباف بافتنی راحت',4,1,1,95,79,80,'product-2-1.png',NULL,NULL,NULL,0,10,0,'fa',1,NULL,NULL,NULL),
(19,'کت و شلوار سوئگر پیچیده',5,2,2,95,NULL,NULL,'product-2-2.png',NULL,NULL,NULL,0,8,0,'fa',1,NULL,NULL,NULL),
(20,'شلوار جین اسکینی کلاسیک',6,3,3,95,NULL,NULL,'product-2-3.png',NULL,NULL,NULL,0,5,0,'fa',1,NULL,NULL,NULL),
(21,'ساق ورزشی مشبک ورزشی',7,1,4,95,79,80,'product-2-4.png',NULL,NULL,NULL,0,2,0,'fa',1,NULL,NULL,NULL),
(22,'پیراهن گاه به گاه یقه پهن چاپ شده',8,2,5,95,79,80,'shart-1.png',NULL,NULL,NULL,100,0,0,'fa',1,NULL,NULL,NULL),
(23,'پیراهن یقه باریک چهارخانه',9,3,6,95,79,80,'shart-2.png',NULL,NULL,NULL,90,0,0,'fa',1,NULL,NULL,NULL),
(24,'پیراهن گاه به گاه یقه جامد',10,1,7,95,79,80,'shart-3.png',NULL,NULL,NULL,80,0,0,'fa',1,NULL,NULL,NULL),
(25,'پیراهن گاه به گاه یقه پهن چاپ شده',5,2,8,95,79,80,'shart-4.png',NULL,NULL,NULL,70,0,0,'fa',1,NULL,NULL,NULL),
(26,'پیراهن یقه پهن چهارخانه',6,3,9,95,79,80,'shart-5.png',NULL,NULL,NULL,60,0,0,'fa',1,NULL,NULL,NULL),
(27,'ژاکت بادشکن مقاوم در برابر آب',4,1,10,95,20,80,'8.png',NULL,NULL,NULL,0,0,0,'fa',1,NULL,NULL,NULL),
(28,'مانتو زمستانی پشمی چهارخانه',5,2,11,95,20,80,'7.png',NULL,NULL,NULL,0,0,0,'fa',1,NULL,NULL,NULL),
(29,'بلوز پارتی ساتن',6,3,12,95,20,80,'6.png',NULL,NULL,NULL,0,0,0,'fa',1,NULL,NULL,NULL),
(30,'شلوارک جین قدیمی',4,1,1,95,20,80,'5.png',NULL,NULL,NULL,0,0,0,'fa',1,NULL,NULL,NULL),
(31,'ساق ورزشی مشبک ورزشی',5,2,2,95,20,80,'4.png',NULL,NULL,NULL,0,0,0,'fa',1,NULL,NULL,NULL),
(32,'شلوار جین اسکینی کلاسیک',6,3,3,95,20,80,'3.png',NULL,NULL,NULL,0,0,0,'fa',1,NULL,NULL,NULL),
(33,'کت و شلوار سوئگر پیچیده',4,1,4,95,20,80,'2.png',NULL,NULL,NULL,0,0,0,'fa',1,NULL,NULL,NULL),
(34,'ژاکت کشباف بافتنی راحت',1,2,5,95,20,80,'1.png','لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان تون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.','لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان تون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.','لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان تون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',0,0,0,'fa',1,NULL,NULL,'2024-12-20 15:41:04'),
(35,'rter',9,NULL,5,45645,5,NULL,'image59991734704782.png###','ddddddddddddddgggggggggggggggggggdg dg dg dgdgdg','dggggggggggggggdfgdg','gdddddddddddddddddgdg',0,0,0,'fa',1,'2024-12-20 15:27:18','2024-12-20 15:26:26','2024-12-20 15:27:18');

/*Table structure for table `user_roles` */

DROP TABLE IF EXISTS `user_roles`;

CREATE TABLE `user_roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title_fa` varchar(255) DEFAULT NULL COMMENT 'عنوان',
  `title_en` varchar(255) DEFAULT NULL COMMENT 'عنوان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `user_roles` */

insert  into `user_roles`(`id`,`title_fa`,`title_en`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'مدیر ارشد','sadmin',1,NULL,'2024-09-14 11:56:32','2024-09-14 11:56:32'),
(2,'مدیر','admin',1,NULL,'2024-09-14 11:56:32','2024-09-14 11:56:32');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL COMMENT 'نام',
  `lastname` varchar(255) DEFAULT NULL COMMENT 'نام خانوادگی',
  `mobile` varchar(255) DEFAULT NULL COMMENT 'شماره همراه',
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL COMMENT 'رمز عبور',
  `role_id` int(11) DEFAULT NULL COMMENT 'نقش',
  `photo` varchar(255) DEFAULT NULL COMMENT 'تصویر',
  `lang` varchar(2) NOT NULL DEFAULT 'fa' COMMENT 'زبان',
  `status_id` int(11) NOT NULL DEFAULT 1 COMMENT 'شناسه وضعیت فعال/غیر فعال',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_mobile_unique` (`mobile`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`firstname`,`lastname`,`mobile`,`email`,`password`,`role_id`,`photo`,`lang`,`status_id`,`deleted_at`,`created_at`,`updated_at`) values 
(1,'سانگار','مدیر ارشد','09191964745','sanegar.info@gmail.com','$2y$12$6KBSKABNUpwppTwc0TKfKucmqMANzEE2D22dSfKwovqKh.sW5oMWW',1,'1.jpg','fa',1,NULL,'2024-09-14 11:56:33','2024-09-14 11:56:33'),
(2,'گل پخش','مدیریت','09191532091',NULL,'$2y$12$/kg3.CUk.SXebk6AYWsFDO3nSV1uQdLI9vW8DgDhmyxtDL.UI.7SO',2,'1.jpg','fa',1,NULL,'2024-09-14 11:56:33','2024-09-14 11:56:33');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
