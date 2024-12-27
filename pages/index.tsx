import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Family Tree Creator</title>
        <meta name="description" content="Create and share your interactive family tree" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-20 text-center mt-16">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Welcome to <span className="text-blue-600">Family Tree Creator</span>
        </h1>

        <p className="mt-3 text-lg sm:text-2xl">
          Create and share your interactive family tree with ease.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 w-full">
          <a href="/create" className="p-6 mt-6 text-left border w-full sm:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Create a Family Tree &rarr;</h3>
            <p className="mt-4 text-xl">
              Start building your family tree now.
            </p>
          </a>

          <a href="/share" className="p-6 mt-6 text-left border w-full sm:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Share Your Tree &rarr;</h3>
            <p className="mt-4 text-xl">
              Share your family tree with others.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by{' '}
          <span className="h-4 ml-2">
            Maryll Castelino
          </span>
        </a>
      </footer>
    </div>
  );
}