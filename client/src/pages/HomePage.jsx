import { Link } from 'react-router-dom';

export const HeroPage = () => {
    return (
        <section className="min-h-screen flex justify-center items-center w-[80%] mx-auto">
            <article className="flex flex-col text-center w-[60%]">
                {/* <h1 className="text-5xl mb-4 font-bold">Welcome to WeatherWise</h1> */}
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Welcome to WeatherWise</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod laborum, praesentium quas quisquam sit explicabo dolorum facere iste minus quis repellendus fugiat harum autem suscipit voluptas, dolor recusandae ad omnis.</p>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                    <Link to='/login' className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Login</Link>
                    <Link to='/signup' className='text-sm font-semibold leading-6 text-gray-900'>Create Account</Link>
                </div>
            </article>
        </section >
    )
}