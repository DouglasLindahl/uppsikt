import ContactForm from "@/components/ContactForm/page";
import Header from "@/components/Header/page";
import Hero from "@/components/Hero/page";
import Services from "@/components/Services/page";
import WhatIsUppsikt from "@/components/WhatIsUppsikt/page";
import WhoIsUppsiktFor from "@/components/WhoIsUppsiktFor/page";

export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <Hero></Hero>
      <WhatIsUppsikt></WhatIsUppsikt>
      <WhoIsUppsiktFor></WhoIsUppsiktFor>
      <Services></Services>
      <ContactForm></ContactForm>
    </main>
  );
}
