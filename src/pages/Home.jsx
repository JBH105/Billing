import React from "react";
import Overview from "../components/Overview";
import Transaction from "../components/Transaction";

export default function Home() {
  return (
    <div>
      <div className="lg:pl-64 flex flex-col flex-1">
        <div className="mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Overview />
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
}