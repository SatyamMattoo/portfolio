import React from "react";
import { motion } from "framer-motion";
import { boxVariant } from "../utils/BoxVarient";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export const Contact = () => {
  const { ref, control } = useInViewAnimation();

  return (
    <section className="h-screen bg-white bg-gradient">
      <motion.div
        className="py-4 px-4 mx-auto max-w-screen-md"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
        <form action="#" className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm outline-none bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 outline-none w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 shadow-sm "
              placeholder="Let us know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 outline-none w-full text-sm text-gray-900 bg-gray-200 rounded-lg shadow-sm border border-gray-300 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-fuchsia-500 hover:text-gray-100 focus:ring-4 focus:outline-none"
          >
            Send message
          </button>
        </form>
      </motion.div>
    </section>
  );
};
