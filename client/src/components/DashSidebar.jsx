import { Link } from "react-router-dom"
import auth from "../utils/auth"

// export const DashSideBar = () => {
//     const handleLogout = () => {
//         auth.logout()
//     }
//     return (
//         <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full border-r border-gray-200 md:translate-x-0 ">
//             <div className="overflow-y-auto py-5 px-3 h-full bg-white">
//                 <ul>
//                     <li>
//                         <Link to="/dashboard" className="flex items center p-2 text-base font-medium text-gray-900 rounded-lg">Home</Link>
//                         <Link to="/forecast" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg">Forecast</Link>
//                         <Link to="/maps" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg">Maps</Link>
//                     </li>
//                 </ul>
//                 <div className="absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-2">
//                     <button onClick={handleLogout} type="button" className="inline-flex justify-center p-2 text-white bg-gray-900 rounded cursor-pointer">Logout</button>
//                 </div>
//             </div>
//         </aside>
//     )
// }
export const DashSideBar = () => {
    const handleLogout = () => {
        auth.logout()
    }
    return (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full border-r border-gray-200 md:translate-x-0 ">
            <div className="overflow-y-auto py-5 px-3 h-full bg-white">
                <form className="search-form">
                    <input
                        type="text"
                        name="city"
                        id="city"
                        aria-label="city"
                        placeholder="City Name"
                        className="search-input"
                    />
                    <input
                        type="text"
                        name="country"
                        id="country"
                        aria-label="country"
                        placeholder="Country Name"
                        className="search-input"
                    />
                    <div className="weather-btn-container">
                        <input className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 cursor-pointer" type="submit" />
                    </div>
                </form>
                <div className="absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-2">
                    <button onClick={handleLogout} type="button" className="inline-flex justify-center p-2 text-white bg-gray-900 rounded cursor-pointer">Logout</button>
                </div>
            </div>
        </aside>
    )
}
