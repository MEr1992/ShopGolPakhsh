const getBrItems = (local) => {
    let items={
        'fa': [ `/${local}`, 'home' ],
        'products': [ `/${local}/products`, 'products' ],
        'blog': [ `/${local}/blog`, 'blogs' ],
    }
    return items;
}

export { getBrItems };