const AC_GAME_OBJECTS = [];

export class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0; // 当前帧距离上一帧的时间间隔，单位是秒
        this.has_called_start = false; // 是否执行过 start 函数
    }

    start() { // 只会在第一帧执行一次
    }

    update() { // 每一帧都会执行一次
    }

    on_destroy() { // 只会在对象被删除前执行一次
    }

    destroy() { // 删除对象

        this.on_destroy();

        for (let i in AC_GAME_OBJECTS) {
            const obj = AC_GAME_OBJECTS[i];
            if (obj === this) {
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp; // 上一帧的时间戳，单位是毫秒
const step = timestamp => {
    for (let obj of AC_GAME_OBJECTS) {
        if (!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start();
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(step);
}

requestAnimationFrame(step);