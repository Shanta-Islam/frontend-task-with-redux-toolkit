import { useEffect, useState } from "react";
import { HiMiniPlus, HiOutlinePencil, HiMiniTrash } from "react-icons/hi2";

const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(data => setUser(data.data))
    }, [])
    return (
        <div className="max-w-6xl mt-5 mx-auto">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium text-[#101828]">Users</h3>
                <button className="focus:ring-2 focus:ring-offset-2 focus:bg-[#7F56D9] mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-[#7F56D9] hover:bg-[#7F56D9] focus:outline-none rounded">
                    <p className="text-sm font-semibold leading-none text-white flex items-center"><HiMiniPlus />Add User</p>
                </button>
            </div>
            <div className=" mt-[33px]">

                <div className="flex flex-col">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed">
                                    <thead className="bg-[#F9FAFB] border-[#EAECF0] border">
                                        <tr>
                                            <th scope="col" className="p-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                                </div>
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#667085] uppercase dark:text-gray-400">
                                                User Info
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#667085] uppercase dark:text-gray-400">
                                                About
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#667085] uppercase dark:text-gray-400">
                                                Status
                                            </th>
                                            <th scope="col" className="p-4">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200  ">
                                        {
                                            user.map(s => <tr key={s.id} >
                                                <td className="p-4 w-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 whitespace-nowrap grid">
                                                    <div className="flex items-center">
                                                        <div className=" flex items-center justify-center w-10 h-10 mx-4 overflow-hidden rounded-full cursor-pointer relative">
                                                            <img src={s.avatar} alt="img" />

                                                        </div>
                                                        <div className="grid">
                                                            <span className="text-[#101828] text-sm font-medium">{s.first_name}{s.last_name}</span><span className="text-[#667085] text-sm font-normal">{s.email}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap "><div className="grid">
                                                            <span className="text-[#101828] text-sm font-medium">Some dummy Content</span><span className="text-[#667085] text-sm font-normal">Brings all your news into one place</span>
                                                        </div></td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">Customer</td>
                                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                    <a href="#" className=" flex items-center gap-4"><HiMiniTrash className="text-[#667085] w-5 h-5"></HiMiniTrash><HiMiniPlus className="text-[#667085] w-5 h-5"></HiMiniPlus></a>
                                                </td>
                                            </tr>)
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;