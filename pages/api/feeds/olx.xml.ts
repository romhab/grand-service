import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<offers>
  <offer>
    <id>triangle-pl02-225-40-r18</id>

    <title>Шини зимові Triangle PL02 225/40 R18 92V XL</title>

    <description><![CDATA[
Зимові шини Triangle PL02.
Розмір: 225/40 R18
Індекс навантаження: 92
Індекс швидкості: V
Рік виробництва: 2025
Країна виробник: Китай
Стан: Нові
Призначення: легкові автомобілі
    ]]></description>

    <price>2609</price>
    <currency>UAH</currency>

    <category>Автозапчастини / Шини</category>

    <images>
      <image>https://images.prom.ua/6824945306_w640_h640_shiny-zimnie-triangle.jpg</image>
      <image>https://images.prom.ua/6824945307_w640_h640_shiny-zimnie-triangle.jpg</image>
    </images>

    <manufacturer>Triangle</manufacturer>
    <condition>new</condition>

    <params>
      <param name="Season">Winter</param>
      <param name="Width">225</param>
      <param name="Profile">40</param>
      <param name="Diameter">R18</param>
      <param name="LoadIndex">92</param>
      <param name="SpeedIndex">V</param>
      <param name="XL">Yes</param>
      <param name="Year">2025</param>
      <param name="Country">China</param>
    </params>
  </offer>
</offers>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(xml);
}
