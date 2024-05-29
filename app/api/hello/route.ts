export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

interface hitokotoResponse {
  id: number
  from: string
  from_who: string
  hitokoto: string
}
export async function hitokoto(): Promise<hitokotoResponse> {
  let res = await fetch('https://v1.hitokoto.cn/?c=i&encode=json', { cache: 'no-store' })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
