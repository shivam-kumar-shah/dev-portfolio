import { Android } from './components/android';
import { Backend } from './components/backend';
import { Contact } from './components/contact';
import { Flutter } from './components/flutter';
import { Frontend } from './components/frontend';
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
      {/* <Android /> */}
      <Flutter />
      <Contact />
    </>
  );
}
