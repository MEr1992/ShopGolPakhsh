import Logo from "@/Theme/Public/Logo"

const Loading = ({assetsPath=""}) => {
    return <>
    <div id="loader" className="preloader-wrapper-4">
							<img src={`${assetsPath}/pixio/images/loading.gif`} alt="" />
						</div>
    </>

    return <>
        <div className="new-loading">
            <div className="loading-content">
                <Logo type="md" />
                <span>
                    <div className="loading1"></div>
                    <div className="loading2"></div>
                    <div className="loading3"></div>
                </span>
            </div>
        </div>
    </>
}

export default Loading