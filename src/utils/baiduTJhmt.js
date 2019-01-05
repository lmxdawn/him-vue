/**
    百度统计
 */

// 事件统计
export function bdTrackEvent(category, action, opt_label, opt_value) {
    if (window._hmt) {
        window._hmt.push([
            "_trackEvent",
            category,
            action,
            opt_label,
            opt_value
        ]);
    }
}
