function randomQuote() {
  let randomQuotesOfHazratAli = [
      {
        urdu: "علم دولت سے بہتر ہے، کیونکہ علم تمہاری حفاظت کرتا ہے اور دولت کی تمہیں حفاظت کرنی پڑتی ہے۔",
        english: "Knowledge is better than wealth because knowledge protects you, while you have to protect wealth"
      },
      {
        urdu: "خاموشی حکمت کا لباس ہے۔",
        english: "Silence is the garment of wisdom"
      },
      {
        urdu: "سب سے بڑا گناہ وہ ہے جو کرنے والے کی نظر میں چھوٹا ہو۔",
        english: "The greatest sin is the one that seems small in the eyes of the doer"
      },
      {
        urdu: "جو شخص اپنی اصلاح کرے گا، اللہ اس کے حالات بہتر کرے گا۔",
        english: "Whoever reforms himself, Allah will improve his condition"
      },
      {
        urdu: "صبر ایمان کا لباس ہے۔",
        english: "Patience is the garment of faith"
      },
      {
        urdu: "دنیا کی محبت تمام گناہوں کی جڑ ہے۔",
        english: "Love of the world is the root of all sins"
      },
      {
        urdu: "دشمن پر قابو پانے کا بہترین طریقہ یہ ہے کہ اسے معاف کر دو۔",
        english: "The best way to overcome your enemy is to forgive him"
      },
      {
        urdu: "جو شخص نصیحت کو قبول کرتا ہے، وہ کامیاب ہوتا ہے۔",
        english: "Whoever accepts advice becomes successful"
      },
      {
        urdu: "عقل مند وہ ہے جو اپنے عیبوں پر نظر رکھے، نہ کہ دوسروں کے عیبوں پر۔",
        english: "The wise one is he who focuses on his own faults, not the faults of others"
      },
      {
        urdu: "علم تمہیں اونچا کرتا ہے، نہ کہ مال۔",
        english: "Knowledge elevates you, not wealth"
      },
      {
        urdu: "دوسروں کے ساتھ وہی سلوک کرو جو تم اپنے لیے پسند کرتے ہو۔",
        english: "Treat others the way you want to be treated"
      },
      {
        urdu: "لوگوں کے ساتھ نرمی سے پیش آؤ کیونکہ سختی دلوں کو دور کر دیتی ہے۔",
        english: "Be gentle with people because harshness drives hearts away"
      },
      {
        urdu: "محتاجوں کے ساتھ اچھا سلوک کرو، اللہ تمہیں عزت دے گا۔",
        english: "Treat the needy with kindness, and Allah will honor you"
      },
      {
        urdu: "ہر شخص کی قیمت اس کے علم اور عمل سے ہے۔",
        english: "The worth of every person is based on his knowledge and actions"
      },
      {
        urdu: "سب سے اچھا عمل وہ ہے جو نیت کی پاکیزگی کے ساتھ کیا جائے۔",
        english: "The best deed is the one done with pure intentions"
      }
    ];

  let generateIndex = Math.random() * randomQuotesOfHazratAli.length;

  // console.log(generateIndex);

  let roundTheIndex = Math.floor(generateIndex);

  // console.log(roundTheIndex);

  let quoteDisplay = randomQuotesOfHazratAli[roundTheIndex];

  // console.log(quoteDisplay);


  document.getElementById('quote-urdu').innerText = quoteDisplay.english
  document.getElementById('quote-english').innerText=quoteDisplay.urdu
}
