import { sidebarItemList } from "@/constants/sidebar"

export const getCurrentPageDisplayName = (pathname) => {
    for (let i = 0; i < sidebarItemList.length; i++) {
        const data = sidebarItemList[i];
        if(data.path === pathname) {
            return data.displayName;
        }
    }
}