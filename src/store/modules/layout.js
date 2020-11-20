const originState = {
    windowWidth: 0,
    windowHeignt: 0,
    isMobile: false, // 是否为手机
    isTablet: false, // 是否为平板
    isDesktop: true, // 是否为桌面
    isShow: false // 菜单收起
}

export default {
    namespaced: true,
    state: {
        ...originState
    },
    mutations: {
        // 初始化state参数
        initState(state) {
            Object.keys(originState).forEach(key => {
                state[key] = originState[key]
            })
        },
        // 修改菜单收起展开状态
        handleIsShow(state, value) {
            state.isShow = value
        },
        // 设置宽高
        handleSize(state, {
            width,
            height
        }) {
            state.windowWidth = width
            state.windowHeignt = height
        },
        // 设置类型
        handleType(state, value) {
            state.isMobile = false
            state.isTablet = false
            state.isDesktop = false
            state[`is${value}`] = true
        }
    }
}