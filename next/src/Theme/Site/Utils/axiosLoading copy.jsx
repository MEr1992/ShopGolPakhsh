export const axiosLoading = () => {
    const adding_loading = (loadingContainer = '.loading-container') => {
        $(loadingContainer).attr('disabled', 'disabled').append(`<div class="spinner-container">
        <div class="spinner-eff spinner-eff-3">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <div class="circle circle-3"></div>
        </div>
    </div>`)
    }

    const remove_loading = (loadingContainer = '.loading-container') => {
        $(loadingContainer).removeAttr('disabled').find('.spinner-container').remove()
    }
    return {
        adding_loading,
        remove_loading
    }
}