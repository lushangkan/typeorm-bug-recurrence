import {RepeatCustom} from "@/data/models/RepeatCustom";
import {faker} from "@faker-js/faker";

/**
 * 从变量中随机获取一个元素
 * @param e 数组,对象
 */
export function getRandomElements(e: any) {
    return Math.floor(Math.random() * (e.length - 1));
}

/**
 * 随机生成Enum中的元素
 * @param e Enum
 */
export function randomEnum(e: any) {
    const keys = Object.keys(e);
    return e[keys[getRandomElements(keys)]];
}

export function randomRepeatCustom() {
    const custom = new RepeatCustom();
    custom.monday = faker.datatype.boolean();
    custom.tuesday = faker.datatype.boolean();
    custom.wednesday = faker.datatype.boolean();
    custom.thursday = faker.datatype.boolean();
    custom.friday = faker.datatype.boolean();
    custom.saturday = faker.datatype.boolean();
    custom.sunday = faker.datatype.boolean();
    return custom;
}

/**
 * 随机生成boolean
 * @param p 概率
 */
export function randomBoolean(p?: number | undefined): boolean {
    p = p === undefined? 0.5: p;
    if (p < 0 || p > 1) {
        throw new Error("Invalid probability");
    }
    const r = Math.random();
    return r < p;
}

/**
 * 获取随机数字
 * @param min 最小值
 * @param max 最大值
 */
export function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
