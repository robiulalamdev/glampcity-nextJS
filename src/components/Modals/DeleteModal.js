import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";

import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function DeleteModal({ open, close, endpoint, refetch }) {

    const confirm = () => {
        fetch(`http://localhost:5055/api/${endpoint}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch && refetch()
                close(false);
            })
    }

    return (
        <Dialog open={open} handler={() => close(false)} size="xs">

            <DialogBody divider className="grid place-items-center gap-4 w-full">
                <TrashIcon className="h-10 w-10 text-red-500" />
                <Typography color="red" variant="h4">
                    Are You Sure?
                </Typography>
                <Typography className="text-center font-normal">
                    Do You Really Want to Delete these Records? This proccess cannot be undone.
                </Typography>
            </DialogBody>
            <DialogFooter className="space-x-2">
                <Button variant="gradient" color="red" onClick={() => close(false)}>
                    close
                </Button>
                <Button variant="gradient" color="blue" onClick={() => confirm()}>
                    Delete
                </Button>
            </DialogFooter>
        </Dialog>
    );
}