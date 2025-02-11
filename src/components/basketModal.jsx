import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { pizza1, pizza2, pizza3, pizza4 } from "@/app/assests";
import { useRouter } from "next/navigation";
import AppContext from "@/context";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
export const CartPage = () => {
  const { cartItems, setCartItems, handleAddToCart, animate, setBasketModal } =
    useContext(AppContext);
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleCheckout = () => {
    if (cartItems.length < 1) {
      alert("Your cart is empty. Please add items before checkout.");
      return;
    }
    if (!phone.trim() || !address.trim()) {
      alert("Please enter both your phone number and address.");
      return;
    }

    window.open(whatsappLink, "_blank");
  };

  const [suggestedItems] = useState([
    {
      id: 1,
      name: "One Piece Chicken (One Piece)",
      price: 320,
      image: pizza1,
      quantity: 1,
      size: "Large",
    },
    {
      id: 2,
      name: "One Piece Chicken (One Piece)",
      price: 320,
      image: pizza1,
      quantity: 1,
      size: "medium",
    },
    {
      id: 3,
      name: "One Piece Chicken (One Piece)",
      price: 320,
      image: pizza1,
      quantity: 1,
      size: "xl",
    },
    {
      id: 4,
      name: "Hot Shots (9 Pcs)",
      price: 480,
      image: pizza4,
      quantity: 1,
    },
    {
      id: 5,
      name: "Spicy Nuggets (6 Pcs)",
      price: 580,
      image: pizza2,
      quantity: 1,
      size: "2xl",
    },
    {
      id: 6,
      name: "Hot Wings Bucket (10 Pcs)",
      price: 670,
      image: pizza3,
      quantity: 1,
      size: "small",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const gst = subtotal * 0.15;
  const total = subtotal + gst;
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    setBasketModal(false);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };
  const phoneNumber = "923224597570";
  const deliveryDate = "12th Feb 2025";

  // Format order details
  const orderDetails = cartItems
    .map((item) => `- ${item.quantity} x ${item.size} ${item.name}`)
    .join("\n");

  const message = `Order Details:\n${orderDetails}\n\n📅 Date: ${deliveryDate}\n\n Customer Details:\n Address: ${address} \n Phone: ${phone} \n\n Total Price: ${total} Rs `;

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return (
    <div className="container p-0  md:p-6 grid gap-8 md:grid-cols-3 md:h-[80vh] max-w-6xl overflow-hidden">
      <div className="md:col-span-2 overflow-y-scroll md:pr-4">
        <h2 className="text-xl font-semibold mb-4">Items From Your Cart</h2>
        <div className="space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between px-2  py-1 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image.src}
                    alt={item.name}
                    className="W-12 h-12 md:w-16 md:h-16 object-cover rounded-md"
                  />
                  <span className="text-[11px] md:text-lg font-medium">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  {item.quantity === 1 ? (
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-600"
                    >
                      <RiDeleteBin6Line className="text-sm md:text-lg" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="text-white"
                    >
                      <GrFormSubtract className="text-sm md:text-lg" />
                    </button>
                  )}
                  <span className="px-2 text-[11px] text-white border rounded">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="text-white"
                  >
                    <IoMdAdd className="text-sm md:text-lg" />
                  </button>
                  <span className="text-[11px] md:text-lg font-semibold">
                    Rs {item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h1 className="text-lg font-semibold">No Item In Cart</h1>
              <button
                onClick={() => scrollToSection("menu")}
                className="mt-4 p-1 md:px-4 md:py-2 bg-[#F69C1F] text-white rounded-lg"
              >
                Explore Menu
              </button>
            </div>
          )}
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">You may also like</h2>
        <div className="flex gap-3 md:gap-4 overflow-x-auto ">
          {suggestedItems.map((item) => (
            <div className="md:w-[300px] md:h-[370px] mb-2 ">
              <Card className="w-[200px] h-[200[px] md:w-[250px] md:h-[350px] bg-transparent p-3 border-zinc-500 border">
                <CardHeader className="p-0">
                  <img
                    src={item.image.src}
                    alt={item.name}
                    className=" h-[150px] md:h-[200px] rounded-md "
                  />
                  <CardTitle className="mt-2 text-[11px] md:text-base font-medium text-white">
                    {" "}
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base font-semibold text-gray-600">
                    {item.price} Rs
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center p-0 md:mt-2">
                  <Button
                    className="my-2 w-full  bg-[#F69C1F] text-white rounded-lg"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className=" md:p-6 h-full rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Your Order</h2>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Address</label>
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Enter your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>

          <input
            type="tel"
            className="w-full p-2 border rounded"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p>Sub Total: Rs {subtotal}</p>
          <p>GST (15%): Rs {gst.toFixed(0)}</p>
          <p className="text-lg font-semibold">Total: Rs {total.toFixed(0)}</p>
        </div>
        <button
          onClick={handleCheckout}
          className="block w-full mt-4 px-4 py-2 bg-[#F69C1F] text-white text-center rounded-lg"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
