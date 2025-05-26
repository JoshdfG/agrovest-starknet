/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cartItems as initialCartItems } from "@/utils/cart";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button } from "@heroui/react";

const MyCarts = () => {
  const path = usePathname();
  const [cartItems, setCartItems] = useState(
    initialCartItems.map((item) => ({ ...item, quantity: 1 })),
  );

  const handleIncrement = (index: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrement = (index: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // Calculate the subtotal using useMemo to memoize the calculation
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => acc + item.priceInEth * item.quantity,
      0,
    );
  }, [cartItems]);

  // Fixed discount rate (2%)
  const discountRate = 0.02;

  // Calculate the discount based on the fixed rate
  const discount = useMemo(() => {
    return subtotal * discountRate;
  }, [subtotal]);

  // Calculate the total using useMemo
  const total = useMemo(() => {
    return subtotal - discount;
  }, [subtotal, discount]);

  return (
    <section className="flex w-full flex-col gap-6 py-4">
      <h1 className="text-base font-semibold uppercase text-darkgreen md:text-xl">
        Transactions
      </h1>

      <div className="flex w-full gap-0 md:ml-3">
        <Link
          href="/user/transactions"
          className={`px-4 py-2 text-base font-medium ${path === "/user/transactions" ? "bg-darkgreen text-gray-200" : "bg-lightgreen text-darkgreen"}`}
        >
          Cart
        </Link>
        <Link
          href="/user/transactions/purchased"
          className={`px-4 py-2 text-base font-medium ${path === "/user/transactions/purchased" ? "bg-darkgreen text-gray-200" : "bg-lightgreen text-darkgreen"}`}
        >
          Purchased
        </Link>
      </div>

      <div className="flex w-full flex-col items-start gap-6 md:flex-row">
        <div className="flex-1 rounded bg-gray-100 p-4">
          <Table>
            <TableHeader>
              <TableRow className="text-gray-800">
                <TableHead className="text-start">Product</TableHead>
                <TableHead>Price(ETH)</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-center">Total(ETH)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems.map((item, index) => (
                <TableRow key={index} className="text-gray-600">
                  <TableCell className="text-start font-medium">
                    <div className="flex items-center gap-2">
                      <div className="h-[50px] w-[50px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={640}
                          height={427}
                          quality={100}
                          priority
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-semibold text-gray-700">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-600">Obasanjo Farm</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {item.priceInEth}
                  </TableCell>
                  <TableCell>
                    <div className="flex">
                      <button
                        className="flex h-8 w-8 items-center justify-center bg-darkgreen text-base text-gray-200 md:h-6 md:w-6"
                        onClick={() => handleDecrement(index)}
                      >
                        <FaMinus />
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        min={1}
                        className="h-6 w-6 border-[0.5px] border-gray-400 text-center font-medium text-gray-700"
                        readOnly
                      />
                      <button
                        className="flex h-8 w-8 items-center justify-center bg-darkgreen text-base text-gray-200 md:h-6 md:w-6"
                        onClick={() => handleIncrement(index)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    {(item.priceInEth * item.quantity).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex w-full flex-col rounded bg-gray-100 md:w-[35%]">
          <h3 className="p-4 font-semibold text-gray-700">Order Summary</h3>
          <ul className="flex w-full list-none flex-col gap-3 border-t-[1px] border-gray-300 p-4">
            <li className="flex w-full items-center justify-between">
              <p className="font-medium text-gray-600">Subtotal</p>
              <p className="font-semibold text-gray-700">
                {subtotal.toFixed(2)} ETH
              </p>
            </li>
            <li className="flex w-full items-center justify-between">
              <p className="font-medium text-gray-600">Discount (2%)</p>
              <p className="font-semibold text-gray-700">
                {discount.toFixed(3)} ETH
              </p>
            </li>
            <li className="flex w-full items-center justify-between">
              <p className="font-medium text-gray-600">Total</p>
              <p className="font-semibold text-gray-700">
                {total.toFixed(2)} ETH
              </p>
            </li>
            <li className="w-full">
              <Button
                type="button"
                className="mt-3 w-full rounded-[7px] bg-darkgreen px-6 py-2.5 text-base text-lightgreen"
              >
                Make Payment
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MyCarts;
