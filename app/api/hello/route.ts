export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

interface hitokotoResponse {
  id: number
  from: string
  from_who: string
  hitokoto: string
}
// TODO 错误处理
export async function hitokoto(): Promise<hitokotoResponse> {
  let res = await fetch('https://v1.hitokoto.cn/?c=i&encode=json', { cache: 'no-store' })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

interface bingDailyImgResponse {
  images: { url: string; title: string; copyrightlink: string }[]
}
export async function bingDailyImg(): Promise<bingDailyImgResponse> {
  let res = await fetch('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  return res.json()
}
