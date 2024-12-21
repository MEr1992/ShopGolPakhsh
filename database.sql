/*
SQLyog Professional v13.1.1 (64 bit)
MySQL - 10.4.32-MariaDB : Database - gol
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`gol` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_persian_ci */;

USE `gol`;

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
(1,'راهنمای کامل آرایش صورت برای مبتدیان',1,1,1,'thumb1.jpg','image1.jpg','video1.mp4','doc1.pdf','در این مقاله نکات اساسی برای آرایش صورت را خواهید آموخت.','این مقاله به شما آموزش می‌دهد چگونه از لوازم آرایشی به بهترین شکل استفاده کنید.',0,0,0,0,100,'fa',1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(2,'مراقبت از پوست: بهترین محصولات برای انواع پوست',2,1,1,'thumb2.jpg','image2.jpg','video2.mp4','doc2.pdf','مقاله‌ای برای آشنایی با بهترین محصولات مراقبت از پوست برای هر نوع پوست.','در این مقاله به شما بهترین کرم‌ها و محصولات مراقبت از پوست را معرفی خواهیم کرد.',0,0,0,0,150,'fa',1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(3,'محصولات مراقبت از مو برای داشتن موهای سالم',3,1,1,'thumb3.jpg','image3.jpg','video3.mp4','doc3.pdf','با این محصولات مراقبت از مو می‌توانید موهایی سالم و درخشان داشته باشید.','در این مقاله بهترین شامپوها و محصولات مراقبت از مو معرفی می‌شوند.',0,0,0,0,200,'fa',1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(4,'چگونه آرایش چشم خود را جذاب کنیم؟',4,1,1,'thumb4.jpg','image4.jpg','video4.mp4','doc4.pdf','آرایش چشم‌ها می‌تواند جلوه‌ای خاص به صورت شما بدهد.','در این مقاله تکنیک‌های مختلف آرایش چشم از جمله استفاده از ریمل و سایه چشم را یاد خواهید گرفت.',0,0,0,0,250,'fa',1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(5,'نکات طلایی در آرایش روزانه',5,1,1,'thumb5.jpg','image5.jpg','video5.mp4','doc5.pdf','این مقاله به شما کمک می‌کند تا آرایش روزانه خود را ساده و شیک نگه دارید.','در این مقاله به بررسی نکات کاربردی برای یک آرایش روزانه طبیعی و زیبا می‌پردازیم.',0,0,0,0,300,'fa',1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17'),
(6,'محبوب‌ترین لوازم آرایش در سال 2024',6,1,1,'thumb6.jpg','image6.jpg','video6.mp4','doc6.pdf','مقاله‌ای از بررسی بهترین و محبوب‌ترین لوازم آرایشی در سال 2024.','در این مقاله لیستی از بهترین لوازم آرایشی که امسال در بازار مورد توجه قرار گرفته است، ارائه خواهیم داد.',0,0,0,0,400,'fa',1,NULL,'2024-12-21 01:56:17','2024-12-21 01:56:17');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
