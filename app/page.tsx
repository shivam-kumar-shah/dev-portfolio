import { Android } from './components/Android';
import { Backend } from './components/Backend';
import { Contact } from './components/Contact';
import { Flutter } from './components/Flutter';
import { Frontend } from './components/Frontend';
import Intro from './components/Intro';
import './globals.css';

export const metadata = {
  title: 'Shivam Kumar | Portfolio',
  description: "shivam-kumar-shah's Developer Portfolio",
};

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
