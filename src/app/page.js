import React from "react";
import Card from "./components/card";
import Header from "./components/header";
import Navabar from './components/navbar'

export default function Home() {
  return (
    <div>
      <Header />
      <Navabar/>
      <Card
        title="Movie Title"
        image="public/1.webp"
        description="This is a description of the movie."
      />
    </div>
  );
}
