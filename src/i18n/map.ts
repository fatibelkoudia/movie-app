// src/i18n/map.ts

import { en } from "./dictionaries/en";

type I18nMap<T> = {
  [K in keyof T]: T[K] extends object ? I18nMap<T[K]> : string;
};

const buildI18nMap = <T extends object>(obj: T, prefix = ""): I18nMap<T> => {
  return Object.keys(obj).reduce((acc, key) => {
    const path = prefix ? `${prefix}.${key}` : key;
    const value = obj[key as keyof T];
    if (typeof value === "object" && value !== null) {
      acc[key as keyof T] = buildI18nMap(value, path) as I18nMap<T>[keyof T];
      return acc;
    }
    acc[key as keyof T] = path as I18nMap<T>[keyof T];
    return acc;
  }, {} as I18nMap<T>);
};

export const i18nMap = buildI18nMap(en.translation);
