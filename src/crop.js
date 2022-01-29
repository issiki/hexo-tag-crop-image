module.exports = function (原字符串) {
    const array = `${原字符串}`.trim().split(" ");
    const image_url = array[0];
    if (image_url === undefined) {
        return 原字符串;
    }

    let width_be_set = false,
        height_be_set = false,
        xx_off_be_set = false,
        yy_off_be_set = false;

    let re_width = /^w(\d+)p?x?$/,
        re_height = /^h(\d+)p?x?$/,
        re_xx_offset = /^x(-?\d+)p?x?$/,
        re_yy_offset = /^y(-?\d+)p?x?$/;

    let width = "16",
        height = "16",
        x_offset = "0",
        y_offset = "0";

    // start from 1
    for (let i = 1; i < array.length; i++) {
        const str = array[i];
        //检查宽度参数
        if (!width_be_set) {
            const ma = str.match(re_width);
            if (ma !== null) {
                width_be_set = true;
                width = ma[1];
            }
        }
        //检查高度参数
        if (!height_be_set) {
            const ma = str.match(re_height);
            if (ma !== null) {
                height_be_set = true;
                height = ma[1];
            }
        }
        //检查x偏移
        if (!xx_off_be_set) {
            const ma = str.match(re_xx_offset)
            if (ma !== null) {
                xx_off_be_set = true;
                x_offset = ma[1]
            }
        }
        //检查y偏移
        if (!yy_off_be_set) {
            const ma = str.match(re_yy_offset);
            if (ma !== null) {
                yy_off_be_set = true;
                y_offset = ma[1];
            }
        }
    }
    //善后
    if (!width_be_set && !height_be_set) {
        width = "16";
        height = "16";
    }
    if (width_be_set && !height_be_set) {
        height = width;
    }
    if (!width_be_set && height_be_set) {
        width = height;
    }

    return `<div style="width:${width}${width === "0" ? "" : "px"};height:${height}${height === "0" ? "" : "px"};background:url(${image_url}) no-repeat scroll ${x_offset}${x_offset === "0" ? "" : "px"} ${y_offset}${y_offset === "0" ? "" : "px"} transparent;"><span style="width:100%;height:100%;"></span></div>`;
}