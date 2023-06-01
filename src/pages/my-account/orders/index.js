import React, { useContext, useEffect, useState, } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Tabs,
    TabsHeader,
    Tab,
    Input,
} from "@material-tailwind/react";
import { AuthContext } from '@/ContextAPI/AuthProvider';
import OrderTableRow from '@/components/MyAccountComponents/MyAccountMain/OrderTableRow';
import MyAccountMain from '..';

const index = () => {
    const { user } = useContext(AuthContext)

    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);


    const fetchOrders = async (page) => {
        try {
            const response = await fetch(`http://localhost:5055/api/order/my-orders/${user?._id}?page=${page}`);
            const data = await response.json();

            setOrders(data.orders);
            setCurrentPage(data.page);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchOrders(currentPage);
    }, [currentPage]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };


    return (
        <MyAccountMain>
            <Card className="h-fit w-screen md:w-full overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="bg-blue-500 p-4 text-left text-white">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal leading-none"
                                >
                                    Order No
                                </Typography>
                            </th>
                            <th className="bg-blue-500 p-4 text-left text-white">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal leading-none"
                                >
                                    Method
                                </Typography>
                            </th>
                            <th className="bg-blue-500 p-4 text-left text-white">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal leading-none"
                                >
                                    Payment
                                </Typography>
                            </th>
                            <th className="bg-blue-500 p-4 text-left text-white">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal leading-none"
                                >
                                    Discount
                                </Typography>
                            </th>
                            <th className="bg-blue-500 p-4 text-left text-white">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal leading-none"
                                >
                                    Status
                                </Typography>
                            </th>
                            <th className="bg-blue-500 p-4 text-left text-white">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal leading-none"
                                >
                                    Date
                                </Typography>
                            </th>
                            <th className="bg-blue-500 p-4 text-left text-white">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal leading-none"
                                >
                                    Action
                                </Typography>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="overflow-scroll px-0" >
                        {
                            orders?.map((product, i) => <OrderTableRow key={i} data={product} />)
                        }
                    </tbody>
                </table>

                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Page {currentPage} of {totalPages}
                    </Typography>
                    <div className="flex gap-2">
                        <Button
                            variant="outlined"
                            color="blue-gray"
                            size="sm"
                            disabled={currentPage === 1}
                            // disabled={currentPage === 1}
                            // onClick={handlePreviousPage}
                            onClick={handlePrevPage}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outlined"
                            color="blue-gray"
                            size="sm"
                            disabled={currentPage === totalPages}
                            // disabled={!hasMoreProducts}
                            // onClick={handleNextPage}
                            onClick={handleNextPage}
                        >
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </MyAccountMain>

    );
};
export default index;