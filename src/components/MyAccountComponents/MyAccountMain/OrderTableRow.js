import {
    Typography,
    Chip,
    Avatar,
    IconButton,
    Tooltip,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Switch,
} from "@material-tailwind/react";

import { useState } from "react";

export default function OrderTableRow({ data }) {
    const [open, setOpen] = useState(false);

    return (
        <tr className="w-full py-4 bg-blue-gray-50 border-b border-white">
            <td className="text-gray-800 px-4 py-2">
                {data?.orderNumber.slice(0, 10)}
            </td>
            <td className="text-white px-4 py-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {data?.paymentMethod}
                </Typography>
            </td>
            <td className="text-white px-4 py-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {data?.totalPayment}
                </Typography>
            </td>
            <td className="text-white px-4 py-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {data?.toalDiscount}
                </Typography>
            </td>
            <td className="text-white px-4 py-2">
                <Chip className="w-fit" value={data?.shippingStatus} variant="ghost" />
            </td>
            <td className="text-white px-4 py-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {new Date(data?.orderDate).toLocaleDateString('en-GB')}
                </Typography>
            </td>
            <td className="text-white px-4 py-2 flex items-center gap-2">
                <Tooltip content="View Details">
                    <IconButton variant="text" color="blue" className="font-bold bg-blue-50">
                        <svg class="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </IconButton>
                </Tooltip>
            </td>


            <Dialog open={open} handler={() => setOpen(false)}>
                <DialogHeader>
                    <Typography variant="h5" color="blue-gray">
                        Your Attention is Required!
                    </Typography>
                </DialogHeader>
                <DialogBody divider className="grid place-items-center gap-4">

                    <Typography className="text-center font-normal">
                        A small river named Duden flows by their place and supplies it with the necessary
                        regelialia.
                    </Typography>
                </DialogBody>
                <DialogFooter className="space-x-2">
                    <Button variant="text" color="blue-gray" onClick={() => setOpen(!open)}>
                        close
                    </Button>
                </DialogFooter>
            </Dialog>

        </tr>
    );
}