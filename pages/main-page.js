import Cookie from "universal-cookie"
import { useRouter } from "next/router"
import Layout from "../components/Layout"
import Link from "next/link"

const cookie = new Cookie()

export default function MainPage() {
  const router = useRouter()
  const logout = () => {
    cookie.remove("access_token")
    router.push("/")
  }
  return (
    <Layout title='Main page'>
      <div className='mb-10 grid md:flex'>
        <Link href='/blog-page'>
          <a className='bg-indigo-500 mx-8 my-4 hover:bg-indigo-600 test-white px-4 py-12 rounded'>
            Visit Blog by SSG + ISR
          </a>
        </Link>
        <Link href='/task-page'>
          <a className='bg-gray-500 mx-8 my-4 hover:bg-gray-600 test-white px-4 py-12 rounded'>
            Visit Task by ISR + CSR
          </a>
        </Link>
      </div>
      <svg
        onClick={logout}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='mt-10 cursor-pointer text-gray-500 w-10 h-8'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
        />
      </svg>
      <span className="mt-1 text-xs text-gray-600">Logout</span>
    </Layout>
  )
}
