'use client'

export const getMenus = (user) => {
    const access = user?.role_id !== 2;

    const commonMenus = [
        { title: "dashboard", icon: "Home", href: "/dashboard" },
        { title: "products", icon: "ShoppingBag", href: "/products" },
        { title: "brand", icon: "Star", href: "/brands" },
        { title: "line", icon: "Slack", href: "/lines" },
        { title: "category", icon: "Slack", href: "/categories" },
        { title: "blogs", icon: "Pocket", href: "/blogs" },
        { title: "sliders", icon: "List", href: "/sliders" },
    ];

    const commonMenus2 = [
        { title: "edit_profile", icon: "User", href: "/profile" },
        { title: "change_password", icon: "Lock", href: "/change-password" },
    ];

    return [...commonMenus,...commonMenus2];
};
