const diaryRecord = [
  {
    'title': '私の日記の記録が一部表示されます。',
    'desc': 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    'date': '2021.05.21',
    'time': '23:25',
  }
];

const diaryRecords = Array.from({ length: 12 }, () => diaryRecord).flat();


export default diaryRecords
