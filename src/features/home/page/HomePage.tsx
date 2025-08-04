import { Carrusel } from "../components/Carrusel";
import { Categories } from "../components/Categories";
import { HeroBanner } from "../components/HeroBanner";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/products.service";
import { useEffect } from "react";
import { toast } from 'sonner';
import { Megaphone } from 'lucide-react';
import OfferAdvice from "../components/OfferAdvice";

export const HomePage = () => {
  const { data, isPending } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });
  useEffect(() => {
    toast('Todas las velas al 2x1', {
      className: 'bg-pink-600 text-white',
      description: 'Ultima Oportunidad',
      duration: 5000,
      icon: <Megaphone />,
    });
  },[])
  return (<>
    <div className="grid grid-cols-1">
      <Header />
      <OfferAdvice />
      <HeroBanner />
      <Carrusel products={data} isPending={isPending}/>
      <Categories />
      <Footer />
    </div>
  </>);
};