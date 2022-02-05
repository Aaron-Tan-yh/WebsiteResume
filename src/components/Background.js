import React from "react";
import {  UsersIcon } from "@heroicons/react/solid";
import { backgrounds } from "../data";
import { Chrono } from "react-chrono";

export default function Background() {
  return (
    <section id="background">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-education mb-12">
          Timeline About Me
        </h1>
        <div className="flex flex-wrap m-4" style = {{width:"950", height:"950px"}}>
          <Chrono items={backgrounds} mode="VERTICAL" useReadMore={false}/>
        </div>
      </div>
    </section>
  );
}