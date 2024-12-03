function randomQuote() {
  let randomQuotesOfHazratAli = [
    "علم دولت سے بہتر ہے، کیونکہ علم تمہاری حفاظت کرتا ہے اور دولت کی تمہیں حفاظت کرنی پڑتی ہے۔",
    "خاموشی حکمت کا لباس ہے۔",
    "سب سے بڑا گناہ وہ ہے جو کرنے والے کی نظر میں چھوٹا ہو۔",
    "جو شخص اپنی اصلاح کرے گا، اللہ اس کے حالات بہتر کرے گا۔",
    "صبر ایمان کا لباس ہے۔",
    "دنیا کی محبت تمام گناہوں کی جڑ ہے۔",
    "دشمن پر قابو پانے کا بہترین طریقہ یہ ہے کہ اسے معاف کر دو۔",
    "جو شخص نصیحت کو قبول کرتا ہے، وہ کامیاب ہوتا ہے۔",
    "عقل مند وہ ہے جو اپنے عیبوں پر نظر رکھے، نہ کہ دوسروں کے عیبوں پر۔",
    "علم تمہیں اونچا کرتا ہے، نہ کہ مال۔",
    "دوسروں کے ساتھ وہی سلوک کرو جو تم اپنے لیے پسند کرتے ہو۔",
    "لوگوں کے ساتھ نرمی سے پیش آؤ کیونکہ سختی دلوں کو دور کر دیتی ہے۔",
    "محتاجوں کے ساتھ اچھا سلوک کرو، اللہ تمہیں عزت دے گا۔",
    "ہر شخص کی قیمت اس کے علم اور عمل سے ہے۔",
    "سب سے اچھا عمل وہ ہے جو نیت کی پاکیزگی کے ساتھ کیا جائے۔",
  ];

  let generateIndex = Math.random() * randomQuotesOfHazratAli.length;

  // console.log(generateIndex);

  let roundTheIndex = Math.floor(generateIndex);

  // console.log(roundTheIndex);

  let quoteDisplay = randomQuotesOfHazratAli[roundTheIndex];

  console.log(quoteDisplay);

  let quote = document.querySelector("#quote");
  quote.innerHTML = quoteDisplay;
}
