import {useEffect} from "react"

export const Brand = ({ items,mediaPath,Lang }) => {
	let items1 = items?.filter((item,i)=>i>=0 && i<=5);
	let items2 = items?.filter((item,i)=>i>=6 && i<=11);

	useEffect(() => {
		// setTimeout(()=>{
			// items?.length > 0 && handleTagSlider();
			// if (jQuery('#tagSlider').length > 0 && jQuery('#tagSlider2').length > 0) {
				// handleTagSlider();
			// }
			// handlePointerEffect();
		// }, 1000)
	}, [items]);
	const handlePointerEffect = ()=>{
		/* 
			pointer.js was created by OwL for use on websites, 
			and can be found at https://seattleowl.com/pointer.
		*/
		const pointer = document.createElement("div")
		pointer.id = "pointer-dot"
		const ring = document.createElement("div")
		ring.id = "pointer-ring"
		document.body.insertBefore(pointer, document.body.children[0])
		document.body.insertBefore(ring, document.body.children[0])

		let mouseX = -100
		let mouseY = -100
		let ringX = -100
		let ringY = -100
		let isHover = false
		let mouseDown = false
		const init_pointer = (options) => {

			window.onmousemove = (mouse) => {
				mouseX = (mouse.clientX != undefined) ? mouse.clientX : -100;
				mouseY = (mouse.clientY != undefined) ? mouse.clientY : -100;
			}

			window.onmousedown = (mouse) => {
				mouseDown = true
			}

			window.onmouseup = (mouse) => {
				mouseDown = false
			}

			const trace = (a, b, n) => {
				return (1 - n) * a + n * b;
			}
			window["trace"] = trace

			const getOption = (option) => {
				let defaultObj = {
					pointerColor: "#750c7e",
					ringSize: 15,
					ringClickSize: (options["ringSize"] || 15) - 5,
				}
				if (options[option] == undefined) {
					return defaultObj[option]
				} else {
					return options[option]
				}
			}

			const render = () => {
				if (mouseX != undefined) {
					ringX = trace(ringX, mouseX, 0.2)
					ringY = trace(ringY, mouseY, 0.2)

					if (document.querySelector(".p-action-click:hover")) {
						pointer.style.borderColor = getOption("pointerColor")
						isHover = true
					} else {
						pointer.style.borderColor = "white"
						isHover = false
					}
					ring.style.borderColor = getOption("pointerColor")
					if (mouseDown) {
						ring.style.padding = getOption("ringClickSize") + "px"
					} else {
						ring.style.padding = getOption("ringSize") + "px"
					}
					
					pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`

					ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`

					requestAnimationFrame(render)
				}
			}
			requestAnimationFrame(render)
		}

		jQuery('a').on('mousemove', function (e) {
			jQuery('#pointer-ring').addClass('active');
		});

		jQuery('a').on('mouseleave', function (e) {
			jQuery('#pointer-ring').removeClass('active');
		});

		init_pointer({});
	}

	const handleTagSlider = ()=>{
		if (jQuery('#tagSlider').length > 0) {
			$('#tagSlider').grouploop && $('#tagSlider').grouploop({
				velocity: 1,
				forward: false,
				pauseOnHover: true,
				childNode: ".item",
				childWrapper: ".item-wrap"
			});

		}
		if (jQuery('#tagSlider2').length > 0) {
			$('#tagSlider2').grouploop && $('#tagSlider2').grouploop({
				velocity: 1,
				forward: true,
				pauseOnHover: true,
				childNode: ".item",
				childWrapper: ".item-wrap"
			});
		}
	}


	
    return(
		<>
			{/* company-box Start */}
			<section className="content-inner-3 companies-section overflow-hidden mt-5  mb-5">
				<div className="container">
					<div className="row justify-content-between align-items-end">
						<div className="col-lg-8 col-md-8 col-sm-12">
							<div className="section-head style-2 wow fadeInUp m-0" data-wow-delay="0.1s">
								<h2 className="title text-white">{Lang("public.We’re just keep growing  with 6.3k trusted companies")}</h2>
							</div>	
						</div>
						<div className="col-lg-4 col-md-4 col-sm-12 text-md-center m-b30 wow fadeInUp" data-wow-delay="0.2s">	
							<a className="icon-button d-md-inline-block d-none" href="blog-tag.html">
								<div className="text-row word-rotate-box c-black border-secondary bg-secondary">
									<span className="word-rotate">{Lang(["public.partner"," - ","public.partner"," - "])}</span>
									<svg className="badge__emoji" xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
										<path d="M85.9974 27.7066L78.4547 15.2934L50.56 30.5869V0H35.44V30.5869L7.54534 15.2934L0 27.7066L27.9018 43L0.00212688 58.2934L7.5451 70.7066L35.44 55.4131V86H50.56V55.4131L78.4544 70.7066L86 58.2934L58.0982 43L85.9974 27.7066Z" fill="#FAFAF8"/>
									</svg>
								</div>
							</a>
						</div>	
					</div>
				</div>	
				<div className="container-fluid">
					<div className="tag-slider style-1 wow fadeInUp" data-wow-delay="0.2s" id="tagSlider">
						<div className="item-wrap">
							{items?.map((item, i)=>{
								return(
									<div className="item">
										<a href="javascript:void(0);" className="companies-wrapper">
											<div className="companies-media">
												<img src={mediaPath+"/brand/"+item?.logo} alt="" /> 
											</div>
										</a>
									</div>
								);
							})}
						</div>
					</div>
					<div className="tag-slider wow fadeInUp" data-wow-delay="0.4s" id="tagSlider2">
						<div className="item-wrap">	
							{items?.map((item, i)=>{
								return(
									<div className="item">
										<a href="javascript:void(0);" className="companies-wrapper">
											<div className="companies-media">
												<img src={mediaPath+"/brand/"+item?.logo} alt="" /> 
											</div>
										</a>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>	
			{/* company-box End */}
    	</>
	);
}