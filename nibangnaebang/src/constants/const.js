export const BASE_URI = 
  __DEV__ ?
    // 'http://localhost:3000'
    'http://alldpublic.kr/NibangNaebangAPI/apiControl.php'
    :
    'http://alldpublic.kr/NibangNaebangAPI/apiControl.php';

export const IMAGE_URI = 
  __DEV__ ?
    'http://alldpublic.kr/NibangNaebangAPI/Images'
    :
    'http://alldpublic.kr/NibangNaebangAPI/Images';


export const TabName = {
  'Home':'메인',
  'Upload':'방올리기',
  'Message':'쪽지함',
  'MyPage':'마이페이지',
}