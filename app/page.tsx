'use client';

import { useEffect, useRef, useState } from 'react';

import { Frontend } from './components/Frontend';
import Intro from './components/Intro';
import './globals.css';
import { Backend } from './components/Backend';
import { Android } from './components/Android';
import { Flutter } from './components/Flutter';
import { Contact } from './components/Contact';

export default function Home() {
  return (
    <>
      <Intro />
      <Frontend />
      <Backend />
      <Android />
      <Flutter />
      <Contact />
    </>
  );
}
