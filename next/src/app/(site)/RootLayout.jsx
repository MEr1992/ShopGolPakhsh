"use client"

import dynamic from 'next/dynamic';
import Script from 'next/script'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useConfig } from "@/lib/config";
import { config } from "@/lib";
import { usePathname } from 'next/navigation';
const StoreProvider = dynamic(() => import("@/redux/StoreProvider"))
const store = dynamic(() => import("@/redux/store"))
const App = dynamic(() => import("@/app/(shop-panel)/App").then((module) => module.App));
const Loading = dynamic(() => import('./Loading'))

import { Header,Footer } from '@/Theme/Site';

export default function RootLayout({ children }) {
	const pathname = usePathname();
	const { assetsPath } = useConfig();

	// const HeaderComp = (pathname == "/en" || pathname == "/fa" || pathname == "/ar") ? Header : HeaderLight;
	const HeaderComp = Header;

	return (
		<>
			<html lang="en">
				<head>
					{/* Title */}
					<title>Gol: Shop & Online sales of cosmetic products</title>
					
					{/* Meta */}
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="author" content="DexignZone" />
					<meta name="robots" content="index, follow" />
					<meta name="format-detection" content="telephone=no" />
					
					<meta name="keywords" content="template, ui kit, clothing, delivery, ecommerce, fashion, order, shopping, store, fashion design, fashion store, responsive design, fashion showcase, modern design, fashion technology, e-shop, ecommerce web, eCommerce Website, minimal shop, online shop, online shopping, pixio, user experience, Design Elements, Trendy, Stylish, User-Friendly, Navigation, Product Display, Branding, Development, Visual Design, UI/UX, Website, Web Design" />
					<meta name="description" content="Elevate your online retail presence with Pixio Shop & eCommerce HTML Template. Crafted with precision, this responsive and feature-rich template provides a seamless and visually stunning shopping experience. Explore a world of possibilities with modern design elements, intuitive navigation, and customizable features. Transform your website into a dynamic online storefront with Pixio, where style meets functionality for a captivating and user-friendly eCommerce journey." />
					
					<meta property="og:title" content="Pixio: Shop & eCommerce Bootstrap HTML Template | DexignZone" />
					<meta property="og:description" content="Elevate your online retail presence with Pixio Shop & eCommerce HTML Template. Crafted with precision, this responsive and feature-rich template provides a seamless and visually stunning shopping experience. Explore a world of possibilities with modern design elements, intuitive navigation, and customizable features. Transform your website into a dynamic online storefront with Pixio, where style meets functionality for a captivating and user-friendly eCommerce journey." />
					<meta property="og:image" content="https://pixio.dexignzone.com/xhtml/social-image.png" />

					{/* TWITTER META */}
					<meta name="twitter:title" content="Pixio: Shop & eCommerce Bootstrap HTML Template | DexignZone" />
					<meta name="twitter:description" content="Elevate your online retail presence with Pixio Shop & eCommerce HTML Template. Crafted with precision, this responsive and feature-rich template provides a seamless and visually stunning shopping experience. Explore a world of possibilities with modern design elements, intuitive navigation, and customizable features. Transform your website into a dynamic online storefront with Pixio, where style meets functionality for a captivating and user-friendly eCommerce journey." />
					<meta name="twitter:image" content="https://pixio.dexignzone.com/xhtml/social-image.png" />
					<meta name="twitter:card" content="summary_large_image" />
					{/* CANONICAL URL */}
					<link rel="canonical" href="index.html" />
					{/* FAVICONS ICON */}
					<link rel="icon" type="image/x-icon" href="images/favicon.png" />
					{/* MOBILE SPECIFIC */}
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					{/* CSS FILES */}
					<link rel="stylesheet" type="text/css" href={`${assetsPath}/pixio/custom.css`} />
					{/* <Script id='jquery.min.js' src={assetsPath + '/pixio/js/jquery.min.js'} strategy='beforeInteractive' /> */}
				</head>	
				<body id="bg">
					<div className="page-wraper">
						<StoreProvider store={store}>
							<App load={() => <Loading assetsPath={assetsPath} />} key={Math.random()}>
								<Header />
								<div class="page-content bg-light">
									{children}
								</div>
								<Footer />
							</App>
						</StoreProvider>
					</div>
				</body>
			</html>
		</>
	)
}