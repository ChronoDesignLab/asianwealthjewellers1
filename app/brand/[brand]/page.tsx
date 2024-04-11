import Framer from "@/components/Brand/Framer";

type Params = {
  params: {
    brand: string;
  };
};

export default function page({ params }: Params) {
  return <Framer brand={params.brand} />;
}
