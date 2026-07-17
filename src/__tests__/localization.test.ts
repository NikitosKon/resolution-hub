import test from "node:test";
import assert from "node:assert/strict";
import {
  formatGuideCount,
  formatReadTime,
  getDictionary,
} from "@/data/dictionaries";

test("Russian reading time uses the correct plural forms", () => {
  assert.equal(formatReadTime(1, "ru"), "1 минута чтения");
  assert.equal(formatReadTime(2, "ru"), "2 минуты чтения");
  assert.equal(formatReadTime(4, "ru"), "4 минуты чтения");
  assert.equal(formatReadTime(5, "ru"), "5 минут чтения");
  assert.equal(formatReadTime(21, "ru"), "21 минута чтения");
});

test("Ukrainian reading time uses the correct plural forms", () => {
  assert.equal(formatReadTime(1, "uk"), "1 хвилина читання");
  assert.equal(formatReadTime(2, "uk"), "2 хвилини читання");
  assert.equal(formatReadTime(4, "uk"), "4 хвилини читання");
  assert.equal(formatReadTime(5, "uk"), "5 хвилин читання");
  assert.equal(formatReadTime(21, "uk"), "21 хвилина читання");
});

test("guide counts and known footer labels are localized", () => {
  assert.equal(formatGuideCount(1, "ru"), "1 разбор");
  assert.equal(formatGuideCount(3, "ru"), "3 разбора");
  assert.equal(formatGuideCount(5, "ru"), "5 разборов");
  assert.equal(formatGuideCount(1, "uk"), "1 розбір");
  assert.equal(formatGuideCount(3, "uk"), "3 розбори");
  assert.equal(formatGuideCount(5, "uk"), "5 розборів");

  assert.deepEqual(Object.values(getDictionary("ru").footer).slice(0, 5), [
    "Блокировки аккаунтов",
    "Проверки",
    "Задержки выплат",
    "Апелляции",
    "RSS / Обновления",
  ]);
  assert.deepEqual(Object.values(getDictionary("uk").footer).slice(0, 5), [
    "Блокування акаунтів",
    "Перевірки",
    "Затримки виплат",
    "Апеляції",
    "RSS / Оновлення",
  ]);
});
